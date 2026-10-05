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

## Entrades i informes

Cada sessió de classe és una entrada del diari. Quan un tema m'ha portat a estudiar-lo més a fons, l'informe complet hi apareix al costat com a annex.

{% assign entrades = site.pages | where: "layout", "entrada" | where: "tipus", "classe" | sort: "date" %}
{% assign annexos = site.pages | where: "tipus", "annex" | sort: "tema" %}
{% capture temes_amb_entrada %}{% for e in entrades %}|{{ e.tema }}|{% endfor %}{% endcapture %}
<div class="index-temes">
<table class="taula-temes">
<thead>
<tr><th class="col-tema">Tema</th><th>Entrada</th><th>Annex</th></tr>
</thead>
<tbody>
{% for e in entrades %}
{% assign anx = annexos | where: "tema", e.tema %}
<tr>
<td class="col-tema"><span class="num-tema">{{ e.tema | prepend: "0" | slice: -2, 2 }}</span></td>
<td class="col-entrada"><a href="{{ e.url | relative_url }}">{{ e.title }}</a><span class="meta">{{ e.date | date: "%d/%m/%Y" }}</span></td>
<td class="col-annex">{% if anx.size > 0 %}{% for a in anx %}{% assign parts = a.title | split: " · " %}<span class="etiqueta-annex">{{ parts.first }}</span><a href="{{ a.url | relative_url }}">{{ parts.last }}</a>{% endfor %}{% else %}<span class="sense-annex">—</span>{% endif %}</td>
</tr>
{% endfor %}
{% for a in annexos %}{% capture clau %}|{{ a.tema }}|{% endcapture %}{% unless temes_amb_entrada contains clau %}{% assign parts = a.title | split: " · " %}
<tr>
<td class="col-tema"><span class="num-tema">{{ a.tema | prepend: "0" | slice: -2, 2 }}</span></td>
<td class="col-entrada"><span class="sense-annex">—</span></td>
<td class="col-annex"><span class="etiqueta-annex">{{ parts.first }}</span><a href="{{ a.url | relative_url }}">{{ parts.last }}</a></td>
</tr>
{% endunless %}{% endfor %}
</tbody>
</table>
</div>
