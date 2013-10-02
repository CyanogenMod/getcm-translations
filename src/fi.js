(function() {
  angular.module('getcm.l10n.fi', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('fi', {
      navbar: {
        about:"Tietoja",
        download:"Lataa",
        devices:"Laitteet",
        blog:"Blogi",
        forum:"Foorumi",
        community:"Yhteisö",
        manufacturers:"Valmistajat",
        all_manufacturers:"Kaikki valmistajat"
      }
    });
  }]);
}).call(this);
