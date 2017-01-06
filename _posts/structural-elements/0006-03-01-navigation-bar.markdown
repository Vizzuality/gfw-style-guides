---
layout: post
title:  "Navigation bar"
date:   0006-03-01 12:23:49
categories: page-elements structural-elements
---

The navigation bar is the main way to navigate the website. It contains links to all the sections,
and it’s also used to display the GFW logo.

<a class="btn btn--preview" target="_blank" href="{{site.url}}gfw-style-guides/downloads/structural-elements/navigation-bar/index.html">preview</a>
<a class="btn btn--download" download="navigation-bar.zip" href="{{site.url}}gfw-style-guides/downloads/structural-elements/navigation-bar/navigation-bar.zip">download</a>

![alt text][navbar]

The navigation bar shows the main sections. When the user is in one of the sections, it is visually
indicated with a 5px green line under its name.

The GFW logo is placed on the left, with at least 10 pixels of separation on both sides to the next element.
It overflows the white bar where the navigation links are located, overlapping the next element in the page.

![alt text][navbar-meassures]

### Responsive

If the site is accessed from a small device (screen less than 850px wide), the navbar is hidden. On the right
side of the toolbar (now fixed on the bottom of the screen) there is a button to expand all the navigation options.

![alt text][navbar-mobile]

![alt text][navbar-mobile-open]

### Alignment with the toolbar

The toolbar and the navigation bar have the exact same width. The application icons on the toolbar must be aligned to
the left side of the GFW logo, and the section titles must be aligned to the right side of the toolbar.

![alt text][navbar-alignment]

### Code

<div id="code-snippet-box1" class="code-snippet-box">
  {% include code-snippet.html htmlcode="snippets/structural-elements/navigation-bar/navigation-bar.html" csscode="snippets/structural-elements/navigation-bar/navigation-bar-css.html" %}
</div>

<a class="btn btn--preview" target="_blank" href="{{site.url}}gfw-style-guides/downloads/structural-elements/navigation-bar/index.html">preview</a>
<a class="btn btn--download" download="navigation-bar.zip" href="{{site.url}}gfw-style-guides/downloads/structural-elements/navigation-bar/navigation-bar.zip">download</a>


[navbar]: /gfw-style-guides/images/posts/structural-elements/navigation-bar/05-01-navbar.png "navbar"
[navbar-meassures]: /gfw-style-guides/images/posts/structural-elements/navigation-bar/05-02-navbar-meassures.png "navbar meassures"
[navbar-mobile]: /gfw-style-guides/images/posts/structural-elements/navigation-bar/05-03-navbar-mobile.png "navbar mobile"
[navbar-mobile-open]: /gfw-style-guides/images/posts/structural-elements/navigation-bar/05-04-navbar-mobile-open.png "navbar mobile open"
[navbar-alignment]: /gfw-style-guides/images/posts/structural-elements/navigation-bar/05-05-navbar-alignment.png "navbar aligment"
