var SnippetModel = Backbone.Model.extend({
  defaults: {
    hidden: false,
    lang: 'html'
  }
});

var SidebarView = Backbone.View.extend({

  el: '.layout-sidenav',

  events: {
    'click .item-selected': 'setMenu'
  },

  initialize: function() {
    this.setCurrentTarget();
    this.setMenu();
  },

  setCurrentTarget: function(e) {
    var url = window.location.href.split('/');
    this.currentTarget = url[url.length - 1].split('.')[0];
  },

  setMenu: function(e) {
    e && e.preventDefault();

    var lists = this.$el.find('.third-level'),
      current = this.$el.find('[data-location="' + this.currentTarget + '"]'),
      currentList = $(current).parents('.third-level').length > 0 ?
        $(current).parents('.third-level') : $(current).next();

    this.selectItem();

    if (this.currentTarget && $(current).hasClass('open')) {
      this.closeMenu.apply(lists);
    } else {
      this.openMenu.apply(currentList);
    }
  },

  selectItem: function() {
    this.$el.find('[data-location="' + this.currentTarget + '"]')
      .addClass('item-selected');
  },

  openMenu: function() {
    this.prev().addClass('open');
    this.removeClass('hidden');
  },

  closeMenu: function() {
    this.prev().removeClass('open');
    this.addClass('hidden');
  }

});

var SnippetView = Backbone.View.extend({
  events: {
    // 'click .show-code': 'toggleHidden',
    // 'click .close': 'closeHidden',
    'click .lang': 'changeLang'
  },

  initialize: function(){
    this.model = new SnippetModel();
    this.cacheVars();
    this.setListeners();
  },

  cacheVars: function(){
    //Snippet
    this.$snippet = this.$el.find('.code-snippet');
    this.$close = this.$el.find('.close');
    this.$showCode = this.$el.find('.show-code');

    //Lang
    this.$langBtn = this.$el.find('.lang');
    this.$langSnippet = this.$el.find('.lang-snippet');
  },

  setListeners: function(){
    this.model.on('change:hidden', this.toggleSnippet, this);
    this.model.on('change:lang', this.toggleTabs, this);
  },


  // Toggle Snippet
  // toggleHidden: function(e){
  //   var active = this.$snippet.hasClass('hidden');
  //   this.model.set('hidden', !active);
  // },

  // closeHidden: function(e){
  //   this.model.set('hidden', true);
  // },

  toggleSnippet: function(){
    var hidden = this.model.get('hidden');
    this.$snippet.toggleClass('hidden', hidden);
    if (!hidden) {
      this.$showCode.text('Hide code');
    }else{
      this.$showCode.text('Show code');
    }
  },

  // Language tabs
  changeLang: function(e){
    e && e.preventDefault();
    this.model.set('lang', $(e.currentTarget).data('lang'));
  },

  toggleTabs: function(){
    var lang = this.model.get('lang');
    // reset
    this.$langBtn.removeClass('active');
    this.$langSnippet.addClass('hidden');

    //current
    this.$el.find('.lang[data-lang="'+lang+'"]').addClass('active');
    this.$el.find('.language-'+lang).removeClass('hidden');
  }

});

var ColorGallery = Backbone.View.extend({

  initialize: function() {
    this.formatData = [];
    this.getData();
  },

  getData: function() {
    $.getJSON('../../data/layer_colors.json', _.bind(function(json) {
      var data = _.groupBy(json, 'layer');

      _.each(data, _.bind(function(layer, i) {
        var group = _.groupBy(layer, 'hierarchy');
        var sorted = _.sortBy(group.other, 'order');
        group.other = sorted;

        this.formatData.push(group);

      }, this));

      this.formatData = _.sortBy(this.formatData, function(layer) {
        return layer.primary[0].layer_order;
      });

      this.render();
    }, this));
  },

  render: function() {

    function createListItem(color) {
      return '<li class="item-color"><div class="sample-color" style="background-color:' + color[0].title_color +'"></div><div class="info"><span>' + color[0].hierarchy +'</span><span>' + color[0].title_color + '</span></div></li>'
    }

    function createPalette(palette) {
      var html = '<div class="palette">';

      _.map(palette, function(color) {
        html += '<div class="sample-color" style="background-color: ' + color.title_color +'"></div>';
      });
      html += '</div>';

      return html;
    }

    if (this.formatData) {

      // Create list
      var content = '';

      _.each(this.formatData, function(layer) {

        if (layer.primary) {

          content += '<div class="container-layer"><h4>' + layer.primary[0].layer +'</h4>';
          content += '<ul class="category-list">'

          content += createListItem(layer.primary);

          if (layer.secondary) {
            content += createListItem(layer.secondary);

            content += '</ul>';
          }

          if (layer.other) {
            content += createPalette(layer.other);
          }

          content += '</div>';

        }

      });

      this.$el.html(content);
    };
  }

});


(function(){
  // View inits

  // Sidebar
  new SidebarView();

  if ($('#layer-colors').length > 0) {

    new ColorGallery({el: '#layer-colors'});

  };

  // Snippet
  _.each($('.code-snippet-box'), function(v,k){
    new SnippetView({el: '#'+$(v).attr('id') });
  });

})();
