---
layout: post
title:  "Branded sub-sites"
date:   0009-01-01 12:23:49
categories: applications
img:
  template-example-1: /gfw-style-guides/images/posts/applications/branded-sub-sites/01brandSub01.png
---

The Global Forest Watch site works as an umbrella platform where new applications and sub-sites can be added. Please follow the previous guidelines when creating these new sections to keep the look and feel coherent and integrated.

<div class="advice development">
  <p class="advice_content">Please note that the information presented on this page might not apply for future applications.</p>
</div>

### Inherited templates examples

Some applications may use the **[home template.][home-template]** as it happens in the following examples:

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
