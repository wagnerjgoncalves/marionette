this.WL.module('HeaderApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.Header = Marionette.ItemView.extend({
    template: _.template('<div>Welcome abord</div>')
  });

  return Show.Header;
});
