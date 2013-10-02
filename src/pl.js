(function() {
  angular.module('getcm.l10n.pl', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('pl', {
      navbar: {
        about:"O projekcie",
        download:"Pobierz",
        devices:"Urządzenia",
        blog:"Blog",
        forum:"Forum",
        community:"Społeczność",
        manufacturers:"Producenci",
        all_manufacturers:"Wszyscy producenci"
      }
    });
  }]);
}).call(this);
