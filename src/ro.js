(function() {
  angular.module('getcm.l10n.ro', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('ro', {
      navbar: {
        about:"Despre",
        download:"Descarcă",
        devices:"Dispozitive",
        blog:"Blog",
        forum:"Forum",
        community:"Comunitate",
        manufacturers:"Producători",
        all_manufacturers:"Toți Producătorii"
      }
    });
  }]);
}).call(this);
