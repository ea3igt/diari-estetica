---
layout: entrada
title: "Prototip: catàleg de components"
subtitol: "Pàgina de prova amb fragments dels informes del Tema 1 i del Tema 2"
date: 2026-10-04
tema: "1 i 2"
tipus: prova
us_ia: "Prototip generat amb Claude a partir dels informes del Tema 1 i del Tema 2. Text de prova; no conté cap reflexió personal."
---

* Índex
{:toc}

Aquesta pàgina no és una entrada del diari. Serveix per veure com queda cada component amb contingut real abans d'aprovar el mètode.
{: .aplicacio data-label="Nota"}

## Cronologia de moviments

Component generat a partir de dades (`_data/cronologia.yml`). Substitueix el gràfic en imatge de l'informe del Tema 1.

{% include cronologia.html inici=1800 final=2000 %}

## Taula comparativa

|             | Romanticisme                                           | Realisme                               |
|-------------|--------------------------------------------------------|----------------------------------------|
| Tema        | Natura salvatge, heroïsme, passió, somni               | Vida quotidiana, treballadors, pagesos |
| Actitud     | Subjectiva, emocional                                  | Objectiva, documental, sovint crítica  |
| Pinzellada  | Dinàmica (Delacroix, Turner) o molt polida (Friedrich) | Matèrica, colors terrosos              |
| Figura clau | Friedrich, Turner, Delacroix                           | Courbet, Millet, Daumier               |

## Fitxes d'obra

{% include obra.html img="img/friedrich-caminant.jpg" autor="Caspar David Friedrich" titol="Caminant sobre un mar de boira" any="c. 1817-1818" tecnica="Oli sobre tela" museu="Hamburger Kunsthalle" text="La figura d'esquena (Rückenfigur) ens convida a mirar el paisatge amb els seus ulls. És la imatge per excel·lència del sublim romàntic: l'individu sol davant d'una natura inabastable." font="domini públic" %}

{% include obra.html img="img/turner-pescadors.jpg" autor="J. M. W. Turner" titol="Pescadors al mar" any="1796" tecnica="Oli sobre tela" museu="Tate, Londres" text="Va ser el primer oli que Turner va exposar a la Royal Academy. És anterior a 1800, però ja conté tot el Romanticisme: la llum de la lluna contra la foscor, la fragilitat de la barca, la força del mar." font="domini públic" %}

## L'art com a forma i com a experiència

### Clive Bell: el que compta és la forma

l'art és art per com estan organitzades les línies, els colors i les formes, no pel que representa.
{: .en-una-frase}

A *Art* (1914), Bell parla de «forma significativa»: una combinació de línies, colors i formes que ens provoca una emoció especial, l'emoció estètica. No cal que la pintura representi res reconeixible. Per això aquesta idea va bé per defensar la pintura abstracta.[^bell]

Una fotografia d'una fàbrica pot tenir interès pel ritme dels pilars, el contrast entre llums i ombres o com s'organitza l'espai. No cal que ens interessi la indústria per apreciar-la.
{: .aplicacio data-label="Aplicació fotogràfica proposada"}

Com sabem que sentim aquesta emoció estètica i no un altre tipus de plaer? Bell defineix la forma per l'emoció i l'emoció per la forma, i així el raonament dona voltes sobre si mateix. A més, si només mirem les formes, deixem de banda la memòria, el testimoni o la idea que hi ha darrere d'una obra.
{: .objeccio}

### John Dewey: l'art és una experiència

l'art no és l'objecte penjat a la paret, sinó el que passa quan algú el viu.
{: .en-una-frase}

A *Art as Experience* (1934), Dewey critica que veiem l'art com una col·lecció d'objectes separats de la vida. Per a ell, el que importa és la relació entre qui crea, els materials i qui mira. Una experiència estètica té un recorregut, té parts que es lliguen entre elles i acaba en un punt que li dona sentit.[^dewey]

Un fotollibre crea una experiència amb l'ordre de les imatges, les pauses, la mida de cada foto i la relació amb el text. No és només una suma de fotos boniques.
{: .aplicacio}

Una bona conversa, un sopar o una excursió també poden ser experiències intenses i completes. Dewey ens ajuda a entendre com funciona l'art, però no ens diu on és la frontera entre una obra i una vivència qualsevol.
{: .objeccio}

## Galeria

A les entrades reals, aquest component mostrarà les fotos de la llibreta (`apunts/`). Aquí mostra la carpeta `img/`. Clica una imatge per ampliar-la.

{% include galeria.html carpeta="img" peu="Galeria de prova: tres obres del Romanticisme citades a l'informe del Tema 1." %}

## Components de veu pròpia

[Text de mostra] Aquí aniria la reflexió personal, escrita en primera persona: què en penso, on em situo, què canvia en la meva manera de mirar o de fotografiar.
{: .veu}

[Text de mostra]<br>aquí un escrit breu,<br>un poema, una carta,<br>una descripció lenta d'una obra
{: .experimental}

[^bell]: Bell, C. (1914). *Art*. Chatto & Windus. [Text complet a Project Gutenberg](https://www.gutenberg.org/cache/epub/16917/pg16917-images.html)
[^dewey]: Dewey, J. (1934). *Art as experience*. Minton, Balch & Company.
