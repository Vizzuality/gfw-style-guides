---
layout: post
title:  "Branded sub-sites"
date:   0009-01-01 12:23:49
categories: applications
img:
  template-example-1: /gfw-style-guides/images/posts/applications/branded-sub-sites/01-01b-home.jpg
  template-example-2: /gfw-style-guides/images/posts/applications/branded-sub-sites/01-02b-climate.jpg
---

The Global Forest Watch site works as an umbrella platform where new applications and sub-sites can be added. Please follow the previous guidelines when creating these new sections to keep the look and feel coherent and integrated.

### Inherited templates examples

Some applications may use the **[home template.][home-template]** as happens in the following example:

<div class="gallery">
  {% if page.img %}
    {% for img in page.img %}
      <div class="image-container">
        <img src="{{img[1]}}" alt="">
      </div>
    {% endfor %}
  {% endif %}
</div>

[home-template]: /gfw-style-guides/page-elements/main-templates/home-template.html
