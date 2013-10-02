(function() {
  angular.module('getcm.l10n.nb', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('nb', {
      navbar: {
        about:"Om",
        download:"Last ned",
        devices:"Enheter",
        blog:"Blogg",
        forum:"Forum",
        community:"Felleskap",
        manufacturers:"Produsenter",
        all_manufacturers:"Alle Produsenter"
      }
    });
  }]);
}).call(this);
