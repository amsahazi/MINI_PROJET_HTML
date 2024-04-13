/*//KATA
// exercice 1
// declaration d'une fonction de la surface d'un triangle avec comme parametre la base et la hauteur
function surfaceTriangle(base, hauteur) {
   //on retourne la formule de la surface d'un triangle
   return (base * hauteur)/2 
}
// on definit les valeurs de la base et de la hauteur et on affiche la surface avec la fonction (surface triangle)
console.log(surfaceTriangle(5,8))
// exercice 2
// declaration d un nombre factoriel
function factorielle(n) {
   // on declare d'abord resMultiple pour stoquer notre resultat
   let resMultiple = 1;
   // on declare en suite le compteur (i) qui va incrementer de 1 tout les nombres factoriel de ce nombre
   let i = 1;
   // pour declarer une boucle for pour parcourir sur les nombres factoriel(1*2*3*4)
   for (i = 1; i <= n; i++) {
      // on donne la formule pour multiplier ces nombres
   resMultiple = resMultiple * i;
   }
// on retourne le resultat final
   return resMultiple;
}
// on definit le nombre factoriel (4) et on affiche le resultat final
console.log(factorielle(4))
// exercice 3
// on declare une fonction qui retoune le plus grand nombre des elements donnés en parametre
function plusGrandNombre(a,b,c) {
   // declarons (i = c) comme (c) est le premier plus grand nombre
   let i = c
   // on compare pour voir si (a>i) donc (a) devient maintenant le plus grand nombre
   if (a > i) {

      i = a; 
   }
   // sinon si (b>i) cela veut dire que (b) devient en suite le plus grand nombre
  else if (b > i) {
        i = b;

  } 
  // on retourn maintenant le plus grand nombre de ces trois elements
  return i;
}
// on definit les trois valeurs et on affiches le plus grand nombre est c'est (C)
console.log(plusGrandNombre(5,4,6))
 // exercice 4
 //declaration d'une fonction d'un tableau
 function dernierElementTableau(fruits) {
   // on a utilise la condition pour verifier si le tableau n'est pas vide et retourner undefind si c'est le cas
    if (fruits.length === 0) { 
      return undefined;
    }
    // sinon si le tableau n'est pas vide on retourne donc le dernier element
    else {
      return fruits[fruits.length-1];
    }
 }
 // on definit le tableau et on affiche  
 console.log(dernierElementTableau(["pomme","mangue","orange","citron"]))
exercice 1'
 function surfaceRectangle(longueur,largeur) {
   return longueur * largeur;
 }
 console.log(surfaceRectangle(10,5))
 //exercice 5
 function concatenation(str1,str2) {
   return str1+"|"+str2
 }
console.log(concatenation("bonjour","abdallah"))
// exercice 6
function TotalNbCaractere(str1,str2) {
   if (str1.length===str2.length) {
      console.log("les deux mots ont le meme nombre de chaine de caractere")
   }
   else {
   console.log("les deux mots n'ont pas les meme nombres de chaine de caractere" )
   }
}
TotalNbCaractere("bonjour","salmat")
// exercice 7 a expliquer
function PairImpair(n) {
   if (n%2===0) {
      return "pair"
   }
   else{
      return "impair"
   }
}
console.log(PairImpair(4))*/
// exercice 8
// declaration d'une fonction qui retourn le nom de la capitale du pays*/
 function capital(pays) {
   switch (pays.toLowerCase()) {
      case "france":
      return "Paris";
      break;
      case "allemagne":
      return "Berlin";
      break;
      case "espagne":
      return "Madrid";
      break
      case "maroc":
      return "Rabat";
      break
      case "italie":
      return "Rome";
     break
      default:
         return "Inconnu"
         break;
      
   }
 }
 console.log(capital("france"));
   

