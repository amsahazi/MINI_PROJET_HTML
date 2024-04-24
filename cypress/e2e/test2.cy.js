/// <reference types="cypress"/>
//const users = require("../fixtures/jdd.json")
// Importe les données des utilisateurs depuis le fichier JSON "jdd.json" situé dans le répertoire "fixtures"
import * as users from "../fixtures/jdd.json"
const mobileconf = {
  viewportHeight:812,
  viewportWidth:575,
 }
describe("suite de test d'authentification",mobileconf,()=>{
    beforeEach(()=>{
        cy.visit("https://practice.automationtesteracademy.com/")
       // cy.fixture("jdd").as("users")
    })
it("scenero de test1", function(){
    const user = users[0];
    cy.login(user.username,user.password)
    //cy.get("#username").type(user.username);
       //cy.get("#password").type(user.password);
       //cy.get(".login-button").click();
    });
    it("scenero de test2",function(){
        const user = users[1];
        // Utilise la commande personnalisée "login" pour vous connecter avec les identifiants de l'utilisateur sélectionné
        cy.login(user.username,user.password)
       // cy.get("#username").type(user.username);
          // cy.get("#password").type(user.password);
          // cy.get(".login-button").click();
          // selectionner l'element avec la class css "error-message"
           cy.get(".error-message")
           // verifier si est visible à l'ecran
             .should("be.visible")
            // en suite de verifier le texte "Veuillez vérifier votre nom d'utilisateur ou mot de passe"
             .and("contains.text","Veuillez vérifier votre nom d'utilisateur ou mot de passe");

        });
        it("scenero de test3", function(){
            const user = users[2]
            cy.login(user.username,user.password)
           // cy.get("#username").type(user.username);
             //  cy.get("#password").type(user.password);
              // cy.get(".login-button").click();
    
               cy.get(".error-message")
                 .should("be.visible")
                 .and("contains.text","Veuillez vérifier votre nom d'utilisateur ou mot de passe");
    
            });
            it("scenero de test2", function (){
                const user = users[3]
                cy.login(user.username,user.password)
               // cy.get("#username").type(user.username);
                //   cy.get("#password").type(user.password);
                 //  cy.get(".login-button").click();
        
                   cy.get(".error-message")
                     .should("be.visible")
                     .and("contains.text","Veuillez vérifier votre nom d'utilisateur ou mot de passe");
        
                });
});
