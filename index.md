---
title: HEXATOWN
---

# Hexatown - A living Community
Have you ever enjoyed controlling the world? But what about controlling a scaled down copy of it?

<img align="right" src="./img/www-egger-bahn.de-images-history-03-oldphoto.jpg" title="Photo © 2001 - 2017 by Textwerkstatt Ralph Stenzel. http://www.egger-bahn.de" />

## Learn
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lectus quis sem lacinia nonummy. Proin mollis lorem non dolor. In hac habitasse platea dictumst. Nulla ultrices odio. Donec augue. Phasellus dui. Maecenas facilisis nisl vitae nibh.

## Collaborate
So lets work to getter and share our own best practices within areas as

- Process Documentation
- Test cases
- Automation

<!---->
<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
<div>

</div>