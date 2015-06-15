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
    'click .show-code': 'toggleHidden',
    'click .close': 'closeHidden',
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
  toggleHidden: function(e){
    var active = this.$snippet.hasClass('hidden');
    this.model.set('hidden', !active);
  },

  closeHidden: function(e){
    this.model.set('hidden', true);
  },

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


(function(){
  // View inits

  // Sidebar
  new SidebarView();

  // Snippet
  _.each($('.code-snippet-box'), function(v,k){
    new SnippetView({el: '#'+$(v).attr('id') });
  });

})();
