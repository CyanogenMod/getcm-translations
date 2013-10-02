(function() {
  angular.module('getcm.l10n.zh-cn', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('zh-cn', {
      navbar: {
        about:"关于",
        download:"下载",
        devices:"设备",
        blog:"博客",
        forum:"论坛",
        community:"社区",
        manufacturers:"厂家",
        all_manufacturers:"所有厂家"
      }
    });
  }]);
}).call(this);
