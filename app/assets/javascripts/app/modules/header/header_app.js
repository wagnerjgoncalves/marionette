this.WL.module('HeaderApp', function (HeaderApp, App, Backbone, Marionette, $, _) {
  this.startWithParent = false;
  var API;

  API = {
    show: function() {
      HeaderApp.Show.Controller.showHeader();
    }
  };

  HeaderApp.on('start', function(){
    API.show();
  });

  return HeaderApp;
});
