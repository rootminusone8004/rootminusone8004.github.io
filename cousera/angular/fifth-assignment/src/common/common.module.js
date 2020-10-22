(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://rootminusone8005.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
