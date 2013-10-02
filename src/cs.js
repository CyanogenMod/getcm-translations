(function() {
  angular.module('getcm.l10n.cs', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('cs', {
      navbar: {
        about:"O aplikaci",
        download:"Stáhnout",
        devices:"Zařízení",
        blog:"Blog",
        forum:"Fórum",
        community:"Komunita",
        manufacturers:"Výrobci",
        all_manufacturers:"Všichni výrobci"
      }
    });
  }]);
}).call(this);
