---
layout: base
title: LonnyGomes.com - haiku
pagination:
    data: collections.haiku
    size: 1
    alias: haiku
---

<nav aria-labelledby="my-pagination" class="navbar">

<a class="{% if not pagination.href.previous %}inactive{% endif %}" href="{{pagination.href.previous}}"><i class="fas fa-angle-left" aria-label="Previous"></i></a>

<p>{{pagination.pageNumber + 1 }} of {{pagination.pages | length }}</p>

<a class="{% if not pagination.href.next %}inactive{% endif %}" href="{{pagination.href.next}}"><i class="fas fa-angle-right" aria-label="Next"></i></a>

</nav>

<h2 class="haiku-header">{{ haiku.data.title }}</h2>

<pre class="haiku-body">
{{ haiku.templateContent | safe}}
</pre>
