---
title: News
permalink: /news/
---

<!-- This page lists all news posts automatically. To write a new post, add a file to the _posts folder (see HOW-TO-EDIT.md). -->

{% for post in site.posts %}
{% include post-summary.html post=post %}
{% endfor %}
