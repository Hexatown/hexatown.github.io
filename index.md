---
title: Hexatown -A living Community
---

## Have you ever wanted to control the world? 

<img align="right" src="./img/www-egger-bahn.de-images-history-03-oldphoto.jpg" title="Photo © 2001 - 2017 by Textwerkstatt Ralph Stenzel. http://www.egger-bahn.de" />

## Found it kind of hard to achieve the goal?
Even in just a slightly larger scale than here, like your companies suite of collaboration tools? Why not share your own best practices with peers from other companies? 

## Join the Community
If you are working with the technical part of administrating Office365 and Azure, and if you are working in the financial sector in Denmark your are qualified to [join](join)

## Assist in building a shared repository
We are working within areas as

- Process Documentation
- Test cases
- Automation scripts

[Explore GitHub](https://www.github.com/hexatown)

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
