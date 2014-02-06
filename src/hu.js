(function() {
  angular.module('getcm.l10n.hu', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('hu', {
      navbar: {
        about:"Névjegy",
        download:"Letöltés",
        devices:"Eszközök",
        blog:"Blog",
        forum:"Fórum",
        community:"Közösség",
        manufacturers:"Gyártók",
        all_manufacturers:"Összes gyártó"
      }
    });
  }]);
}).call(this);
