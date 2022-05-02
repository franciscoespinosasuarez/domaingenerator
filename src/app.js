/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let site = [".com", ".es", ".net"];
  let frase = "";
  let dominio = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        //console.log(pronoun[i] + adj[a] + noun[b]);
        for (let c = 0; c < site.length; c++) {
          frase = pronoun[i] + adj[a] + noun[b] + site[c];
          dominio.push(frase);
        }
      }
    }
  }

  let listaDominio = document.querySelector("#lista-dominios");

  for (let i = 0; i < dominio.length; i++) {
    let p = document.createElement("p");
    p.textContent = dominio[i];
    listaDominio.appendChild(p);
  }
};
