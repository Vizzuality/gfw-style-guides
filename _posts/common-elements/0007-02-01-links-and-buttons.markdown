---
layout: post
title:  "Links and buttons"
date:   0007-02-01 12:23:49
categories: page-elements common-elements
---

Links and buttons are used to allow navigation between different pages of the website. Regular links are
usually used within paragraphs while buttons, on the other hand, are used independently, calling for an action.

### Links

Regular links are usually used within paragraphs. They are green and slightly thicker than the rest of the text to
differentiate themselves and be easier to identify.

<div class="gallery">
  <img src="/gfw-style-guides/images/posts/common-elements/links_and_buttons/02-01-links.png" alt="links">
</div>
<div id="code-snippet-box1" class="code-snippet-box">
  <span class="show-code">show code</span>

  <div class="code-snippet hidden">
    <div class="tabs">
      <ul>
        <li><a href="#" data-lang="html" class="lang active">HTML</a></li>
        <li><a href="#" data-lang="css" class="lang">CSS</a></li>
      </ul>
      <div class="close">&#10006;</div>
    </div>
    <div class="lang-snippet language-html">
{% highlight html %}

<p>Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat elementum
rutrum, neque sem pretium metus, quis mollis nisl et massa. Vestibulum sed metus
in lorem <a href="#">tristique ullamcorper</a> id <a href="#">vitae erat</a>.</p>

{% endhighlight %}
    </div>
    <div class="lang-snippet language-css hidden">
{% highlight css %}

a {
  color: #97bd3d;
  font-weight: 500;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

{% endhighlight %}
    </div>
  </div>
</div>

### Buttons

Buttons are used independently, outside of text blocks. They are much more striking than simple links, and they usually
call to an action (“See more”, “Download”, etc.)

There are two types of buttons which are used depending on the importance of the action to call. The primary buttons are green
and flashy so they are very easy to see at first glance. The secondary buttons are, on the other hand, more conspicuous as they
only use a thin border to identify themselves as buttons.

There are also alternative buttons to be used at certain places (for example, the dark button is used on the related content module,
while the huge button is used on the Home.)

![alt text][buttons]

<div id="code-snippet-box2" class="code-snippet-box">
  <span class="show-code">show code</span>

  <div class="code-snippet hidden">
    <div class="tabs">
      <ul>
        <li><a href="#" data-lang="html" class="lang active">HTML</a></li>
        <li><a href="#" data-lang="css" class="lang">CSS</a></li>
      </ul>
      <div class="close">&#10006;</div>
    </div>
    <div class="lang-snippet language-html">
      {% highlight html %}

        <button href="#" class="btn green medium">browse data</button>

        <button href="#" class="btn gray medium">more</button>

        <button href="#" class="btn dark medium">join now</button>

        <button href="#" class="btn green huge">click here!</button>

      {% endhighlight %}
    </div>
    <div class="lang-snippet language-css hidden">
      {% highlight css %}

      .btn {
        -webkit-appearance: none;
        border: 1px solid transparent;
        background: none;
        outline: none;
        box-shadow: none;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        font-family: "Fira Sans";
        background: $border;
        position: relative;
        display: inline-block;
        z-index: 1;
        padding: 0px 12px;
        border-radius: 40px;
        font-size: 14px;
        text-decoration: none;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-weight: 500;
        white-space: nowrap;
        transition(background .15s linear);

      }

      .btn:hover {
        background: $cGreen;
        text-decoration: none !important;
      }

      .btn.lowercase { text-transform: lowercase;}
      .btn.uppercase { text-transform: uppercase;}

      .btn.medium {
        // font-size: 18px;
        text-transform: uppercase;
        padding: 0px 35px;
      }

        &.huge {
          font-size: 18px;
          text-transform: uppercase;
          height: 38px;
          line-height: 40px;
          padding: 0px 20px;
          @media (min-width: $br-mobile) {
            font-size: 21px;
          }
        }
        &.little{
          font-size: 10px;
          text-transform: uppercase;
          height: 25px;
          line-height: 24px;
        }
        &.full-width{
          display: block;
          width: 100%;
        }
        &.lines{
          line-height: 1;
          white-space: normal;
          height: auto;
          line-height: 1;
          padding: 10px;
        }


        // Colors
        &.dark {
          color: $white;
          background: $dark;
          &:hover {
            background: darken($dark,25%);
          }
        }
        &.white {
          color: $dark;
          background: $white;
          &:hover {
            background: darken($white,10%);
          }
        }
        &.gray {
          color: $dark;
          background: $white;
          border-color: $cGreen;
          &:hover {
            background: darken($white,5%);
          }
        }
        &.green {
          color: $white;
          background: $cGreen;
          &:hover {
            background: darken($cGreen,10%);
          }
          &.disabled{
            &:hover {
              background: $cGreen;
            }
          }
        }
        &.light {
          color: $white;
          background: #CBCCBF;
          &:hover {
            background: darken(#CBCCBF,5%);
          }
        }
        &.light2 {
          color: $dark;
          background: $border;
          font-weight: 400;
          &:hover {
            background: darken($border,5%);
          }
        }
        &.soon {
          color: #ccc;
          background: none;
          font-weight: 400;
          text-transform: uppercase;
          cursor: default;
        }
        &.disabled{
          opacity: 0.25;
          cursor: default;
        }
        &.with-icon{
          min-width: 0;
          @media (min-width: $br-mobile) {
            padding-right: 36px;
          }
          svg{
            width: 26px;
            height: 26px;
            position: absolute;
            top: 50%;
            right: 5px;
            fill: $dark;
            @include transform(translate(0,-50%));
          }
        }
        &.with-center-icon{
          min-width: 0;
          span{
            position: relative;
            padding-right: 25px;
          }
          svg{
            width: 20px;
            height: 20px;
            position: absolute;
            top: 50%;
            right: 0;
            fill: $white;
            @include transform(translate(0px,-50%));
          }
        }
      }


      {% endhighlight %}
    </div>
  </div>
</div>

[buttons]: /gfw-style-guides/images/posts/common-elements/links_and_buttons/02-02-buttons.png "buttons"
