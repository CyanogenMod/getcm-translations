(function() {
  angular.module('getcm.l10n.zh-tw', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('zh-tw', {
      navbar: {
        about:"關於",
        download:"下載",
        devices:"裝置",
        blog:"部落格",
        forum:"論壇",
        community:"社群",
        manufacturers:"製造商",
        all_manufacturers:"所有製造商"
      }
    });
  }]);
}).call(this);
