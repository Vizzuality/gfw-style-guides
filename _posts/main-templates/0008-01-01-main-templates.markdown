---
layout: post
title:  "Main templates"
date:   0008-01-01 12:23:49
categories: page-elements

img:
  home-template: /gfw-style-guides/images/posts/main-templates/01-01-home-template.png
  content-template: /gfw-style-guides/images/posts/main-templates/01-02-content-template.png
  directory-template: /gfw-style-guides/images/posts/main-templates/01-03-directory-template.png
  story-template: /gfw-style-guides/images/posts/main-templates/01-04-story-template.png
  map-template: /gfw-style-guides/images/posts/main-templates/01-05-map-template.png
  newsletter-template: /gfw-style-guides/images/posts/main-templates/01-06-newsletter-template.png

download:
  - http://vizzuality.github.io/gfw-style-guides/downloads/main-templates/home/home.zip
  - http://vizzuality.github.io/gfw-style-guides/downloads/main-templates/content/content.zip
  - http://vizzuality.github.io/gfw-style-guides/downloads/main-templates/directory/directory.zip
  - http://vizzuality.github.io/gfw-style-guides/downloads/main-templates/story/story.zip
  - http://vizzuality.github.io/gfw-style-guides/downloads/main-templates/map/map.zip
  - http://vizzuality.github.io/gfw-style-guides/downloads/main-templates/newsletter/newsletter.zip

---

The Global Forest Watch website uses four main templates to create all of its pages. They all share
some structural elements but each one has its own features.

<div class="advice">
  <p class="advice_content">Many of these elements can be previewed and downloaded.</p>
</div>

<div class="gallery">
  {% if page.img %}
    {% for img in page.img %}
    <div class="image-container">
      <img src="{{img[1]}}">
      <div class="container">
        {% if forloop.index == 1 %}
          <a class="btn btn--preview" target="_blank" href="{{site.url}}gfw-style-guides/downloads/main-templates/home/index.html">preview</a>
          <a class="btn btn--download" download="home-template.zip" href="{{page.download[0]}}">download</a>
        {% endif %}
        {% if forloop.index == 2 %}
          <a class="btn btn--preview" target="_blank" href="{{site.url}}gfw-style-guides/downloads/main-templates/content/index.html">preview</a>
          <a class="btn btn--download" download="content-template.zip" href="{{page.download[1]}}">download</a>
        {% endif %}
        {% if forloop.index == 3 %}
          <a class="btn btn--preview" target="_blank" href="{{site.url}}gfw-style-guides/downloads/main-templates/directory/index.html">preview</a>
          <a class="btn btn--download" download="directory-template.zip" href="{{page.download[2]}}">download</a>
        {% endif %}
        {% if forloop.index == 4 %}
          <a class="btn btn--preview" target="_blank" href="{{site.url}}gfw-style-guides/downloads/main-templates/story/index.html">preview</a>
          <a class="btn btn--download" download="story-template.zip" href="{{page.download[3]}}">download</a>
        {% endif %}
        {% if forloop.index == 5 %}
          <a class="btn btn--preview" target="_blank" href="{{site.url}}gfw-style-guides/downloads/main-templates/map/index.html">preview</a>
          <a class="btn btn--download" download="map.zip" href="{{page.download[4]}}">download</a>
        {% endif %}
        {% if forloop.index == 6 %}
          <a class="btn btn--preview" target="_blank" href="{{site.url}}gfw-style-guides/downloads/main-templates/newsletter/index.html">preview</a>
          <a class="btn btn--download" download="newsletter.zip" href="{{page.download[5]}}">download</a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  {% endif %}
</div>

Learn more about these templates and when to use them in the next pages.
