---
layout: post
title:  "Home template"
date:   0008-02-01 12:23:49
categories: page-elements main-templates
---

This template is used exclusively in the website’s home page. Its main function is to showcase some
featured and important sections to the new user while explaining what the website is all about.

<div class="advice">
  <p class="advice_content">Many of these elements can be previewed and downloaded.</p>
</div>

### Desktop

The desktop home template has a huge carousel showcasing some of the featured content in the site, followed by
quick links to other sections and applications, a Recent Activity module and the footer.


<div class="gallery">
  <img src="/gfw-style-guides/images/posts/main-templates/home-template/02-01-home-template-desktop.png" alt="home-template-desktop">
  <a target="_blank" href="/gfw-style-guides/images/posts/main-templates/home-template/02-02-home-desktop-full.jpg">
    <img src="/gfw-style-guides/images/posts/main-templates/home-template/02-02-home-desktop.png" alt="home-desktop">
  </a>
</div>

### Responsive

As explained in the section about **[responsive adaptations][responsive-adaptations-link]**, the modules adapt to fit the
full width of the device screen.

<div class="gallery">
  <a target="_blank" href="/gfw-style-guides/images/posts/main-templates/home-template/02-03-home-mobile-full.jpg">
    <img src="/gfw-style-guides/images/posts/main-templates/home-template/02-03-home-mobile.png" alt="home-mobile">
  </a>
</div>

### Code

<div id="code-snippet-box1" class="code-snippet-box">
  {% include code-snippet.html htmlcode="snippets/main-templates/home/home.html" csscode="snippets/main-templates/home/home-css.html" %}
</div>

<a class="btn btn--preview" target="_blank" href="{{site.url}}gfw-style-guides/downloads/main-templates/home/index.html">preview</a>
<a class="btn btn--download" download="home-template.zip" href="{{site.url}}gfw-style-guides/downloads/main-templates/home/home.zip">download</a>

[responsive-adaptations-link]: /gfw-style-guides/page-elements/responsive-adaptations.html  "responsive adaptations"
