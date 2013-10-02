(function() {
  angular.module('getcm.l10n.el', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('el', {
      navbar: {
        about:"Σχετικά",
        download:"Λήψη",
        devices:"Συσκευές",
        blog:"Blog",
        forum:"Forum",
        community:"Κοινότητα",
        manufacturers:"Κατασκευαστές",
        all_manufacturers:"Όλοι οι κατασκευαστές"
      }
    });
  }]);
}).call(this);
