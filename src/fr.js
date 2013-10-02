(function() {
  angular.module('getcm.l10n.fr', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('fr', {
      navbar: {
        about:"À propos",
        download:"Téléchargement",
        devices:"Appareils",
        blog:"Blog",
        forum:"Forum",
        community:"Communauté",
        manufacturers:"Fabricants",
        all_manufacturers:"Tous les fabricants"
      }
    });
  }]);
}).call(this);
