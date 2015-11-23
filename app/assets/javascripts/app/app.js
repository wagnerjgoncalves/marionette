this.WL = (function(Backbone, Marionette){
  var App = Marionette.Application.extend({
    container: 'body',

    regions: {
      headerRegion: '[data-attribute=header-app]'
    },

    initialize: function(options) {
      // console.log('this.module', this.module('HeaderApp'));
    },

    onStart: function() {
      this.module('HeaderApp').start();
    }
  });

  return new App();
})(Backbone, Marionette);
