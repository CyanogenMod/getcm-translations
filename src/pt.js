(function() {
  angular.module('getcm.l10n.pt', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('pt', {
      navbar: {
        about:"Sobre",
        download:"Download",
        devices:"Dispositivos",
        blog:"Blog",
        forum:"Fórum",
        community:"Comunidade",
        manufacturers:"Fabricantes",
        all_manufacturers:"Todos Fabricantes"
      }
    });
  }]);
}).call(this);
