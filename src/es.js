(function() {
  angular.module('getcm.l10n.es', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('es', {
      navbar: {
        about:"Acerca de",
        download:"Descargar",
        devices:"Dispositivos",
        blog:"Blog",
        forum:"Foro",
        community:"Comunidad",
        manufacturers:"Fabricantes",
        all_manufacturers:"Todos los fabricantes"
      }
    });
  }]);
}).call(this);
