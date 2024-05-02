const { defineConfig } = require("cypress");

module.exports = defineConfig({
<<<<<<< HEAD

  e2e: {
    requestTimeout: 2000,
    responseTimeout: 2000,
    taskTimeout: 2000,
    pageLoadTimeout: 2000,
    execTimeout: 2000,
    projectId: null,
    // Définit l'URL de base pour toutes les visites de site
// Les chemins relatifs seront concaténés avec cette URL de base
   baseUrl: null,
=======
  e2e: {
    // Définit l'URL de base pour toutes les visites de site
// Les chemins relatifs seront concaténés avec cette URL de base
    baseUrl: "https://practice.automationtesteracademy.com/",
    projectId: c94720f4-f7d4-43e1-8e02-eb4bc7d698b4,
>>>>>>> f0856e1fca544f3426bef4460a9806f6ce10c959
    // Active ou désactive la surveillance des changements de fichiers dans le dossier de test
// Si activée (true), Cypress relancera automatiquement les tests en cas de modification
    watchForFileChanges: true,
    // Définit le nombre de tentatives de réouverture de la fenêtre du navigateur en cas d'échec lors du démarrage des tests
// Dans cet exemple, la fenêtre du navigateur sera réouverte jusqu'à deux fois en cas d'échec initial
    retries: {
      openMode: 2,
      },
  },
});
