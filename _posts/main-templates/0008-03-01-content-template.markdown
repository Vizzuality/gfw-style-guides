---
layout: post
title:  "Content template"
date:   0008-03-01 12:23:49
categories: page-elements main-templates
---

The content template is the most common template used in the site. Content pages are based on them.

<div class="advice">
  <p class="advice_content">Many of these elements can be previewed and downloaded.</p>
</div>

### Desktop

The main elements of the content template are a header, a content module (usually with a sidebar),
a related content module, and the footer.


<div class="gallery">
  <img src="/gfw-style-guides/images/posts/main-templates/content-template/03-01-content-template-desktop.png" alt="content-template-desktop">
  <a target="_blank" href="/gfw-style-guides/images/posts/main-templates/content-template/03-02-content-desktop-full.jpg">
    <img src="/gfw-style-guides/images/posts/main-templates/content-template/03-02-content-desktop.png" alt="content-desktop">
  </a>
</div>


### Responsive

In this case, the mobile adaptation changes the way the page behaves. When a tab is selected, the content
related to that tab substitutes the content displayed, hiding the logo, the header, footer, etc. The user can
get back to the main content page tapping the top link.


<div class="gallery">
  <div class="image-container">
    <a target="_blank" href="/gfw-style-guides/images/posts/main-templates/content-template/03-03-content-mobile-1-full.jpg">
      <img src="/gfw-style-guides/images/posts/main-templates/content-template/03-03-content-mobile-1.png" alt="content-mobile-1">
    </a>
  </div>
  <div class="image-container">
    <a target="_blank" href="/gfw-style-guides/images/posts/main-templates/content-template/03-04-content-mobile-2-full.jpg">
      <img src="/gfw-style-guides/images/posts/main-templates/content-template/03-04-content-mobile-2.png" alt="content-mobile-2">
    </a>
  </div>
</div>

### Code

<div id="code-snippet-box1" class="code-snippet-box">
  {% include code-snippet.html htmlcode="snippets/main-templates/content/content.html" csscode="snippets/main-templates/content/content-css.html" %}
</div>

<a class="btn btn--preview" target="_blank" href="{{site.url}}gfw-style-guides/downloads/main-templates/content/index.html">preview</a>
<a class="btn btn--download" download="content-template.zip" href="{{site.url}}gfw-style-guides/downloads/main-templates/content/content.zip">download</a>
