(function() {
  angular.module('getcm.l10n.nl', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('nl', {
      navbar: {
        about:"Over",
        download:"Downloaden",
        devices:"Apparaten",
        blog:"Blog",
        forum:"Forum",
        community:"Gemeenschap",
        manufacturers:"Fabrikanten",
        all_manufacturers:"Alle fabrikanten"
      }
    });
  }]);
}).call(this);
