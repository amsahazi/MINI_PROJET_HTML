//let OrangeQuantity = 3;
//let MangoQuantity = 8;
//let totalFruitsQuantity = OrangeQuantity + MangoQuantity; 
//let Message = "Bonjour Abdallah votre note est :";
//let message = "Bonjour Abdallah vous avez :";
//message = "Bonjour Rouchdi vous possedez :";
//console.log (message, OrangeQuantity,"Orange et", MangoQuantity, "Mange")

//const { functionsIn } = require("cypress/types/lodash");

/*const num = 255;
let txt ="255";
let bin = true;
let flt = 7.23;*/

/*let text1 = "je suis";
let text2 = "un testeur";
console.log(text1+text2);
console.log(text1+' '+text2)
console.log(`${text1}${text2}`)
console.log(`${text1} ${text2}`)*/
/*
// exercice 1 apprendre a creer un tableau et manipuler un tableau
let daysOfTheWeeks = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
console.log(daysOfTheWeeks[2]);

// exercice 2 
let listOfNumber = [1,2,3,4,5,6,7,8,9]; // creation d'un tableau de donnée de type nombre
console.log(listOfNumber[1]);// affichage du deuxieme element du tableau
let item = listOfNumber[1];// stocker l'element [1] ds une vrible item
listOfNumber[1] = 50;// remplcer la valeur [1] par 50
console.log(listOfNumber[1])
listOfNumber.push(30)// pour ajouter a la fin
console.log(listOfNumber)
listOfNumber.unshift(0)
console.log(listOfNumber)

//exercice 1 pour les objets
let trainerProfile = {
    name:"Abdallah",
    age:32,
    availble:false
};
console.log(trainerProfile["name"])
console.log(trainerProfile.age)

// exercice 2
let coursAutomation = {
    "data":[
       {
          "uuid":"7dafa230-0eb5-4870-ae79-e5e5a764e046",
          "name":"Terminal",
          "slug":"terminal",
          "order":1,
          "price":49,
          "status":"PUBLISHED",
          "enforce_progression_order":true,
          "counters":{
             "nb_customer":11,
             "nb_abandoned_cart":1,
             "nb_pre_launch":0,
             "nb_training_items":13,
             "nb_draft_training_items":2
          },
          "created_at":"2022-05-05 12:51:47",
          "updated_at":"2022-09-18 19:14:18"
       },
       {
          "uuid":"a66a1b4f-c36d-4cb5-80bb-07f95f3585f6",
          "name":"Git et GitHub",
          "slug":"git",
          "order":2,
          "price":99,
          "status":"PUBLISHED",
          "enforce_progression_order":true,
          "counters":{
             "nb_customer":12,
             "nb_abandoned_cart":0,
             "nb_pre_launch":0,
             "nb_training_items":17,
             "nb_draft_training_items":0
          },
          "created_at":"2022-01-22 07:58:37",
          "updated_at":"2022-09-18 19:14:30"
       },
       {
          "uuid":"1c26c9cd-e184-4621-9b60-9eea426e8aa7",
          "name":"HTML \/ CSS Basics",
          "slug":"html-css",
          "order":3,
          "price":49,
          "status":"PUBLISHED",
          "enforce_progression_order":true,
          "counters":{
             "nb_customer":11,
             "nb_abandoned_cart":0,
             "nb_pre_launch":0,
             "nb_training_items":10,
             "nb_draft_training_items":2
          },
          "created_at":"2022-05-30 14:03:17",
          "updated_at":"2022-09-18 19:14:46"
       }   
    ],
    "links":{
       "first":"https:\/\/api.teachizy.fr\/api\/v1\/trainings?page=1",
       "last":"https:\/\/api.teachizy.fr\/api\/v1\/trainings?page=1",
       "prev":null,
       "next":null
    },
    "meta":{
       "current_page":1,
       "from":1,
       "last_page":1,
       "path":"https:\/\/api.teachizy.fr\/api\/v1\/trainings",
       "per_page":100,
       "to":8,
       "total":8
    }
 }
 
 console.log(coursAutomation.data[2].updated_at)// 1er methode pour afficher (updtae_at htmlcss)
let htmlcss = coursAutomation.data[2];
console.log(htmlcss.updated_at)// 2em methode

// exercice 1 (if,else if et else) les conditions sur javascript
let age = 17;
if (age<18) {
    console.log("vous êtes mineur")
}
else if (age>=18 && age<=65) {
    console.log("vous êtes majeur")
}
else {
    console.log("vous êtes senior")
}
//exercice 2 pour switch
let jourNumber = 7;
let jour;
switch (jourNumber) {
    case 1:
        jour = "Lundi"
        break;
    case 2:
        jour = "Mardi"
        break;
    case 3:
        jour = "Mercredi"
        break;
    case 4:
        jour = "Jeudi"
        break;
    case 5:
        jour = "Vendredi"
        break;
    case 6:
        jour = "Samedi"
        break;
    case 7:
        jour = "Dimanche"
        break;

    default: 
    console.log("Votre numero n'est pas valide")    
}
console.log("Le jour correspondant à ce numero est : "+jour)

// exercice3 pour les fonction
function square(num) {
    return num * num
}
console.log(square(7))*/

/*function Addition(a,b) {
    return a+b 
}
    console.log(Addition(4,4))*/

 /*function Soustraction(a,b) {
    return a-b
}
console.log(Soustraction(7,9))*/

function multiplication(a,b) {
    return a*b
}
console.log(multiplication(7,9))













