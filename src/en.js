(function() {
  angular.module('getcm.l10n.en', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('en', {
      navbar: {
        about:"About",
        download:"Download",
        devices:"Devices",
        blog:"Blog",
        forum:"Forum",
        community:"Community",
        manufacturers:"Manufacturers",
        all_manufacturers:"All Manufacturers"
      }
    });
  }]);
}).call(this);
