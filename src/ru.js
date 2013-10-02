(function() {
  angular.module('getcm.l10n.ru', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('ru', {
      navbar: {
        about:"О проекте",
        download:"Загрузки",
        devices:"Устройства",
        blog:"Блог",
        forum:"Форум",
        community:"Сообщество",
        manufacturers:"Производители",
        all_manufacturers:"Все производители"
      }
    });
  }]);
}).call(this);
