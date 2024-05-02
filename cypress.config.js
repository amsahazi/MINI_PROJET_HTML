const { defineConfig } = require("cypress");

module.exports = defineConfig({

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
