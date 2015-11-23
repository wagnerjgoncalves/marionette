this.WL.module('HeaderApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.Controller = {
    showHeader: function() {
      var headerView = this.getHeaderView();
      App.headerRegion.show(headerView);
    },

    getHeaderView: function() {
      return new Show.Header();
    }
  };

  return Show.Controller;
});
