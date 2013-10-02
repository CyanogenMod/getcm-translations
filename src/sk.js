(function() {
  angular.module('getcm.l10n.sk', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('sk', {
      navbar: {
        about:"O projekte",
        download:"Prevziať",
        devices:"Zariadenia",
        blog:"Blog",
        forum:"Fórum",
        community:"Komunita",
        manufacturers:"Výrobcovia",
        all_manufacturers:"Všetci výrobcovia"
      }
    });
  }]);
}).call(this);
