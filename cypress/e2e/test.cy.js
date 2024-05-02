/// <reference types="cypress"/>

 describe("premier test", ()=>{

    before(()=>{
        cy.viewport('macbook-11')
        // Déclaration de la variable url
        let url;
        // Vérifier la valeur de l'environnement définie dans les variables Cypress
       // if (Cypress.env("environment")==="test"){
            // Si l'environnement est "test", définis l'URL de test
           /* url= "https://practice.automationtesteracademy-test.com/"
            // Si l'environnement est "prod", définir l'URL de production
        } else if(Cypress.env("environment")==="prod"){
            url="https://practice.automationtesteracademy.com/"
        }*/
        // Visite l'URL définie
        cy.visit("https://practice.automationtesteracademy.com/");
        
    })
    /*beforeEach(()=>{
        cy.log("deuxieme scenario")
    })*/
    it("premier scenario de test", ()=>{
    cy.intercept({
        url:"",
        method:""
    })

        cy.get("#username").type("known_user");
       cy.get("#password").type("cypress-geek");
        //cy.get(".checkbox-input").check().should("be.checked");
       cy.get(".login-button").click();
       cy.get('[data-test="search-products"]').click();
       cy.get('[data-test="search-products"]').type("Robe");
       cy.get('[data-test="submit-search"]').click();
       //cy.get("[data-testid=user-title1]").should("be.visible").and("contains.text", known_user);
       // cy.contains("Se Connecter").click();
        //cy.get(".all-usernames").contains(known_user).should("be.visible");
        // Sélectionne un élément avec l'attribut 'data-test' ayant la valeur 'consulter-btn'
     // cy.get('[data-test="consulter-btn"]')
      // et vérifie qu'il est visible à l'écran
      //.should('be.visible')
      //puis sélectionne le troisième élément trouvé
      //.eq(2);
      // Sélectionne tous les éléments avec la classe CSS "bottom-content"
      //cy.get('.bottom-content')
      // Recherche les éléments descendants avec l'attribut data-test="price-product"
      //.find('[data-test="price-product"]')
      // Vérifie que le texte de ces éléments inclut le symbole de livre sterling (£)
      //.should('include.text', '£')
      // Ensuite, vérifie que les éléments sont visibles à l'écran
      //.and('be.visible');
      // Sélectionne tous les éléments avec la classe CSS "bottom-content"
      //cy.get('.bottom-content')
      // et trouve les éléments descendants avec l'attribut data-test="price-product"
      //.find('[data-test="price-product"]')
      // Pour chaque élément trouvé, vérifie que son texte inclut le symbole de livre sterling (£)
      //.each((price)=>{
      //expect(price).include.text('£')
      })
    });
   /* after(()=>{
       
        /*cy.get(".span-name")
        .contains("Consulter")
        .eq(0)
        .should("be.visible");
       // cy.get(':nth-child(8) > .MuiCardContent-root > .bottom-content > a > [data-test="consulter-btn"] > .span-name');
       // Sélectionne un élément avec l'attribut 'data-test' ayant la valeur 'title-product'
       cy.get('[data-test="title-product"]')
       // Sélectionne un élément avec l'attribut 'data-test' ayant la valeur 'title-product'
        .should("contain","Robe sans manches")
        //et qu'il est visible à l'écran
        .should("be.visible");
        cy.get('[data-test="logo-img"]').should('exist');
        

    })*/


/*
    it.skip("deuxieme scenario", ()=>{
        cy.log("ceci est le deuxieme scenario")
    })
});
describe("deuxieme suite de test", ()=>{
    it("deuxieme scenario de test", ()=>{
        cy.visit("Bibliotheque.html")
        cy.get("[name=livres]").select("Solution").should("have.value","solution");
    });
} );*/