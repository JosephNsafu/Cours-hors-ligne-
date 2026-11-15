window.LECONS = [
{
 id:"excel-01", matiere:"Informatique · Excel", titre:"Cellules, lignes et colonnes",
 texte:"<p>Un classeur Excel contient des <b>feuilles</b>. Chaque feuille est un tableau fait de <b>colonnes</b> (A, B, C…) et de <b>lignes</b> (1, 2, 3…).</p><p>Le croisement d'une colonne et d'une ligne s'appelle une <b>cellule</b>. Son nom est son adresse : la cellule <code>B3</code> est dans la colonne B, ligne 3.</p><p>Une <b>plage</b> est un groupe de cellules, par exemple <code>A1:A5</code> (de A1 jusqu'à A5).</p>",
 quiz:[
  {q:"Quelle est l'adresse de la cellule située en colonne C, ligne 7 ?",choix:["7C","C7","C-7"],reponse:1,explication:"On écrit d'abord la colonne (lettre), puis la ligne (chiffre) : C7."},
  {q:"Que désigne A1:A5 ?",choix:["Une seule cellule","Une plage de 5 cellules","Une formule"],reponse:1,explication:"Les deux-points relient la première et la dernière cellule de la plage."},
  {q:"Les colonnes d'Excel sont repérées par :",choix:["Des chiffres","Des lettres","Des couleurs"],reponse:1,explication:"Colonnes = lettres, lignes = chiffres."}
 ]
},
{
 id:"excel-02", matiere:"Informatique · Excel", titre:"Les formules de base",
 texte:"<p>Une formule commence toujours par le signe <code>=</code>.</p><span class='exemple'>=A1+B1      addition\n=A1-B1      soustraction\n=A1*B1      multiplication\n=A1/B1      division</span><p>Pour additionner beaucoup de cellules, utilisez la fonction <code>SOMME</code> :</p><span class='exemple'>=SOMME(A1:A5)\n=MOYENNE(A1:A5)\n=MAX(A1:A5)   =MIN(A1:A5)</span>",
 quiz:[
  {q:"Par quel signe commence une formule ?",choix:["#","=","@"],reponse:1,explication:"Sans le signe =, Excel affiche du texte au lieu de calculer."},
  {q:"Quelle formule additionne les cellules de A1 à A5 ?",choix:["=SOMME(A1:A5)","=A1+A5","=TOTAL(A1)"],reponse:0,explication:"SOMME(A1:A5) additionne toute la plage."},
  {q:"Quelle fonction donne la plus grande valeur d'une plage ?",choix:["MIN","MOYENNE","MAX"],reponse:2,explication:"MAX renvoie la plus grande valeur, MIN la plus petite."},
  {q:"Quel signe sert à multiplier dans Excel ?",choix:["x","*","×"],reponse:1,explication:"Le symbole de multiplication est l'astérisque (*)."}
 ]
},
{
 id:"excel-03", matiere:"Informatique · Excel", titre:"Recopier une formule",
 texte:"<p>Pour appliquer la même formule à plusieurs lignes, faites glisser la <b>poignée de recopie</b> (le petit carré en bas à droite de la cellule).</p><p>Excel adapte la formule : <code>=B2*C2</code> devient <code>=B3*C3</code> à la ligne suivante. C'est la <b>référence relative</b>.</p><p>Pour bloquer une cellule, ajoutez des <code>$</code> : <code>=B2*$F$1</code>. C'est la <b>référence absolue</b>. Utile pour un taux ou un prix unique.</p>",
 quiz:[
  {q:"Comment appelle-t-on le petit carré en bas à droite d'une cellule ?",choix:["La poignée de recopie","Le curseur","La bordure"],reponse:0,explication:"On le fait glisser pour recopier une formule."},
  {q:"Que fait le signe $ dans $F$1 ?",choix:["Il ajoute une devise","Il bloque la cellule","Il supprime la cellule"],reponse:1,explication:"$F$1 reste identique quand on recopie la formule."},
  {q:"Si =B2*C2 est recopiée une ligne plus bas, elle devient :",choix:["=B2*C2","=B3*C3","=B1*C1"],reponse:1,explication:"Les références relatives suivent le déplacement."}
 ]
},
{
 id:"graph-01", matiere:"Informatique · Graphiques", titre:"Choisir le bon graphique",
 texte:"<p>Un graphique rend les chiffres faciles à comprendre. Le choix dépend de ce que l'on veut montrer :</p><p><b>Histogramme (colonnes)</b> : comparer des valeurs (ventes par mois).</p><p><b>Courbe</b> : suivre une évolution dans le temps (température, prix).</p><p><b>Secteurs (camembert)</b> : montrer la part de chaque élément dans un total (budget).</p><p>Pour créer un graphique : sélectionnez le tableau, puis <b>Insertion → Graphiques</b>. N'oubliez pas le <b>titre</b> et les <b>légendes</b>.</p>",
 quiz:[
  {q:"Quel graphique montre le mieux l'évolution du prix du manioc sur 12 mois ?",choix:["Courbe","Secteurs","Aucun"],reponse:0,explication:"La courbe est faite pour suivre une évolution dans le temps."},
  {q:"Quel graphique montre la part de chaque dépense dans un budget ?",choix:["Courbe","Secteurs","Histogramme seulement"],reponse:1,explication:"Le graphique en secteurs représente les parts d'un total."},
  {q:"Quel menu permet d'insérer un graphique ?",choix:["Accueil","Insertion","Affichage"],reponse:1,explication:"Insertion → Graphiques."}
 ]
},
{
 id:"algo-01", matiere:"Informatique · Algorithmique", titre:"Qu'est-ce qu'un algorithme ?",
 texte:"<p>Un <b>algorithme</b> est une suite d'instructions claires, dans le bon ordre, pour résoudre un problème. Une recette de cuisine en est un exemple.</p><p>Exemple : <i>calculer le total d'un achat</i></p><span class='exemple'>1. Lire le prix\n2. Lire la quantité\n3. total = prix × quantité\n4. Afficher le total</span><p>Un algorithme se représente par des instructions écrites ou par un <b>organigramme</b> (schéma avec des formes). Il contient parfois un <b>test</b> : <code>SI note ≥ 10 ALORS afficher \"Réussi\" SINON afficher \"Échec\"</code>.</p>",
 quiz:[
  {q:"Un algorithme est :",choix:["Un virus","Une suite d'instructions ordonnées","Un type de câble"],reponse:1,explication:"Des étapes claires, dans le bon ordre, pour résoudre un problème."},
  {q:"Quelle instruction permet de faire un choix ?",choix:["SI … ALORS … SINON","AFFICHER","LIRE"],reponse:0,explication:"Le test SI … ALORS … SINON choisit selon une condition."},
  {q:"Dans l'exemple, que vaut le total pour un prix de 500 et une quantité de 3 ?",choix:["503","1500","150"],reponse:1,explication:"total = prix × quantité = 500 × 3 = 1500."}
 ]
}
];
