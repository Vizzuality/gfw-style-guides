---
layout: post
title:  "Main templates"
date:   0008-01-01 12:23:49
categories: page-elements

img:
  home-template: /gfw-style-guides/images/posts/main-templates/01-01-home-template.png
  dashboard-template: /gfw-style-guides/images/posts/main-templates/01-03-dashboard-template.png
  map-template: /gfw-style-guides/images/posts/main-templates/01-04-map-template.png
  content-template: /gfw-style-guides/images/posts/main-templates/01-02-content-template.png
  newsletter-template: /gfw-style-guides/images/posts/main-templates/01-05-newsletter-template.png

download:
  - https://invis.io/82QPKXD964H#/349475981_GFW_-_Home
  - https://invis.io/82QPKXD964H#/349475980_GFW_-_Dashboard
  - https://invis.io/82QPKXD964H#/349475979_GFW_-_Map
  - https://invis.io/82QPKXD964H#/349755642_GFW_-_About
  - http://vizzuality.github.io/gfw-style-guides/downloads/main-templates/newsletter/newsletter.zip

---

The Global Forest Watch website uses four main templates to create all of its pages. They all share
some structural elements but each one has its own features.

<div class="advice">
  <p class="advice_content">Please request access to the UI Kit Invision project for a full inspection of all these elements.  <a class="btn btn--download" href="https://invis.io/82QPKXD964H">Preview UI Kit</a></p>
</div>

<div class="gallery">
  {% if page.img %}
    {% for img in page.img %}
    <div class="image-container">
      <img src="{{img[1]}}">
      <div class="container">
        {% if forloop.index == 1 %}
          <a class="btn btn--download" target="_blank" href="{{page.download[0]}}">preview</a>
        {% endif %}
        {% if forloop.index == 2 %}
          <a class="btn btn--download" target="_blank" href="{{page.download[1]}}">preview</a>
        {% endif %}
        {% if forloop.index == 3 %}
          <a class="btn btn--download" target="_blank" href="{{page.download[2]}}">preview</a>
        {% endif %}
        {% if forloop.index == 4 %}
          <a class="btn btn--download" target="_blank" href="{{page.download[3]}}">preview</a>
        {% endif %}
        {% if forloop.index == 5 %}
          <a class="btn btn--download" download="newsletter.zip" href="{{page.download[4]}}">download</a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  {% endif %}
</div>
