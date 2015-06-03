---
layout: post
title:  "Responsive adaptations"
date:   0005-01-01 12:23:49
categories: page-elements
images:
  desktop:          /gfw-style-guides/images/posts/responsive-adaptations/02-01-desktop.png
  reponsive-labels: /gfw-style-guides/images/posts/responsive-adaptations/02-02-responsive-labels.png
  mobile:           /gfw-style-guides/images/posts/responsive-adaptations/02-03-mobile.png
---

All responsive adaptations are module-based. The modules adapt their design to fit the device's screen,
and stack one on top of the next.

<div class="center">
  {% for img in page.images %}
    <img src="{{img[1]}}" alt="{{img[0]}}">
  {% endfor %}
</div>
