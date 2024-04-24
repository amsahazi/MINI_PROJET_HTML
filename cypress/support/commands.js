// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//// Définition d'une commande personnalisée pour se connecter 
Cypress.Commands.add("login", (username, password)=>{
// Saisie du nom d'utilisateur dans le champ avec l'ID "username"
    cy.get("#username").type(username);
// Saisie du mot de passe dans le champ avec l'ID "password"
    cy.get("#password").type(password);
// Cliquer sur le bouton de connexion avec la classe CSS ".login-button"
    cy.get(".login-button").click();
})