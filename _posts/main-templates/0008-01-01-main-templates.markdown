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

---

The Global Forest Watch website uses four main templates to create all of its pages. They all share
some structural elements but each one has its own features.


<div class="gallery">
  {% if page.img %}
    {% for img in page.img %}
      <img src="{{img[1]}}" alt="">
    {% endfor %}
  {% endif %}
</div>



Learn more about these templates and when to use them in the next pages.
