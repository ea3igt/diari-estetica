---
layout: default
title: Inici
---

<header class="entrada-capcalera">
  <p class="entrada-tema">ERAM · Universitat de Girona · 2026-27</p>
  <h1>Diari creatiu-reflexiu</h1>
  <p class="entrada-subtitol">Estètica i Teoria de l'Art</p>
</header>

Aquest diari recull, sessió a sessió, el meu recorregut per l'assignatura: els apunts presos a classe, els conceptes que he volgut aprofundir, les obres amb què els he relacionat i el que n'he pensat.
{: .en-una-frase}

## Entrades

{% assign entrades = site.pages | where: "layout", "entrada" | where: "tipus", "classe" | sort: "date" %}
<ul class="llista-entrades">
{% for e in entrades %}
  <li><a href="{{ e.url | relative_url }}">{{ e.title }}</a>
  <span class="meta">{{ e.date | date: "%d/%m/%Y" }}{% if e.tema %} · Tema {{ e.tema }}{% endif %}</span></li>
{% endfor %}
</ul>

## Annexos

Informes d'estudi complets en què es basen algunes entrades.

{% assign annexos = site.pages | where: "tipus", "annex" | sort: "title" %}
<ul class="llista-entrades">
{% for e in annexos %}
  <li><a href="{{ e.url | relative_url }}">{{ e.title }}</a>
  <span class="meta">{{ e.subtitol }}</span></li>
{% endfor %}
</ul>
