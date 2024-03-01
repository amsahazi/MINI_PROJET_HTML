//KATA
// exercice 1
// declaration d'une fonction de la surface d'un triangle avec comme parametre la base et la hauteur
/*function surfaceTriangle(base, hauteur) {
   //on retourne la formule de la srface d'un triangle
   return (base * hauteur)/2 
}
// on definit les valeurs de la base et de la hauteur et on affiche la surface avec la fonction (surface triangle)
console.log(surfaceTriangle(5,8))
// exercice 2
// declaration d un nombre factoriel
function nombre Factoriel(a) {
   // on declare d'abord resMultiple pour stoquer notre resultat
   let resMultiple = 1;
   // on declare en suite le compteur (i) qui va incrementer de 1 tout les nombres factoriel de ce nombre
   let i = 1;
   // pour declarer une boucle for pour parcourir sur les nombres factoriel(1*2*3*4)
   for (i = 1; i <= a; i++) {
      // on donne la formule pour multiplier ces nombres
   resMultiple = resMultiple * i;
   }
// on retourne le resultat final
   return resMultiple;
}
// on definit le nombre factoriel (4) et on affiche le resultat final
console.log(nombreFactoriel(4))
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
// on definit les trois valeurs et on affiches le plus grand nombre est c'est (6)
console.log(plusGrandNombre(5,4,6))*/
 // exercice 4
 //declaration d'une fonction d'un tableau
 function dernierElementTableau(fruits) {
   // on a utilise la condition pour verifier si le tableau est pas vide et retourner undefind si c'est le cas
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