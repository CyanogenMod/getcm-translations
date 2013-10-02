(function() {
  angular.module('getcm.l10n.de', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('de', {
      navbar: {
        about:"Über",
        download:"Download",
        devices:"Geräte",
        blog:"Blog",
        forum:"Forum",
        community:"Community",
        manufacturers:"Hersteller",
        all_manufacturers:"Alle Hersteller"
      }
    });
  }]);
}).call(this);
