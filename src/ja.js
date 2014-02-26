(function() {
  angular.module('getcm.l10n.ja', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('ja', {
      navbar: {
        about:"CyanogenModについて",
        download:"ダウンロード",
        devices:"デバイス",
        blog:"ブログ",
        forum:"フォーラム",
        community:"コミュニティ",
        manufacturers:"メーカー",
        all_manufacturers:"すべてのメーカー"
      }
    });
  }]);
}).call(this);
