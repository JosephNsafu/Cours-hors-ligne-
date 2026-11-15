(function(){
"use strict";
var L=window.LECONS||[], vue=document.getElementById("vue"),
    retour=document.getElementById("retour"), statut=document.getElementById("statut");
var CLE="coursHorsLigne.v1", etat={};

function lire(){try{etat=JSON.parse(localStorage.getItem(CLE))||{}}catch(e){etat={}}}
function ecrire(){try{localStorage.setItem(CLE,JSON.stringify(etat))}catch(e){}}
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function vider(){vue.innerHTML="";vue.focus();window.scrollTo(0,0)}
function majStatut(){statut.textContent=navigator.onLine?"En ligne":"Hors ligne"}
window.addEventListener("online",majStatut);window.addEventListener("offline",majStatut);

function accueil(){
  vider();retour.hidden=true;
  var faites=L.filter(function(l){return etat[l.id]}).length;
  vue.appendChild(el("h2","","Choisissez une leçon"));
  vue.appendChild(el("p","intro",faites+" leçon"+(faites>1?"s":"")+" terminée"+(faites>1?"s":"")+" sur "+L.length+"."));
  var b=el("div","barre","<i style='width:"+(L.length?100*faites/L.length:0)+"%'></i>");vue.appendChild(b);
  var ul=el("ul","liste");
  L.forEach(function(l){
    var li=el("li"),bt=el("button","", "<span>"+l.titre+"<small>"+l.matiere+" · "+l.quiz.length+" questions</small></span>"+
      (etat[l.id]?"<span class='badge'>"+etat[l.id].meilleur+"/"+l.quiz.length+"</span>":""));
    bt.onclick=function(){location.hash="#/lecon/"+l.id};
    li.appendChild(bt);ul.appendChild(li)});
  vue.appendChild(ul);
}

function lecon(l){
  vider();retour.hidden=false;
  vue.appendChild(el("h2","",l.titre));
  vue.appendChild(el("div","texte",l.texte));
  var b=el("button","btn","Faire le quiz");
  b.onclick=function(){location.hash="#/quiz/"+l.id};
  vue.appendChild(b);
}

function quiz(l){
  vider();retour.hidden=false;
  var i=0,bon=0;
  function question(){
    vider();
    var q=l.quiz[i];
    vue.appendChild(el("p","intro","Question "+(i+1)+" sur "+l.quiz.length));
    vue.appendChild(el("p","q",q.q));
    var box=el("div","choix"),rep=false,suite=el("button","btn","");
    suite.hidden=true;
    q.choix.forEach(function(c,k){
      var bt=el("button","",c);
      bt.onclick=function(){
        if(rep)return;rep=true;
        if(k===q.reponse){bon++;bt.className="ok"}else{bt.className="ko";box.children[q.reponse].className="ok"}
        if(q.explication)vue.appendChild(el("div","explic",q.explication));
        suite.textContent=i<l.quiz.length-1?"Question suivante":"Voir le score";
        suite.hidden=false;vue.appendChild(suite);
      };
      box.appendChild(bt)});
    vue.appendChild(box);
    suite.onclick=function(){i++;i<l.quiz.length?question():fin()};
  }
  function fin(){
    vider();
    var prev=etat[l.id]||{meilleur:0};
    etat[l.id]={meilleur:Math.max(prev.meilleur,bon),date:new Date().toISOString().slice(0,10)};ecrire();
    vue.appendChild(el("h2","","Résultat"));
    vue.appendChild(el("div","score",bon+" / "+l.quiz.length));
    vue.appendChild(el("p","intro",bon===l.quiz.length?"Parfait. Passez à la leçon suivante.":"Relisez la leçon puis réessayez."));
    var a=el("button","btn","Refaire le quiz");a.onclick=function(){quiz(l)};
    var b=el("button","btn sec","Toutes les leçons");b.onclick=function(){location.hash="#/"};
    vue.appendChild(a);vue.appendChild(b);
  }
  question();
}

function route(){
  var p=location.hash.replace(/^#\/?/,"").split("/");
  var l=L.filter(function(x){return x.id===p[1]})[0];
  if(p[0]==="lecon"&&l)lecon(l);else if(p[0]==="quiz"&&l)quiz(l);else accueil();
}
retour.onclick=function(){location.hash="#/"};
window.addEventListener("hashchange",route);
lire();majStatut();route();

if("serviceWorker" in navigator&&location.protocol.indexOf("http")===0){
  navigator.serviceWorker.register("sw.js").catch(function(){});
}
})();
