app.directive('optionPanel', function() {
  return {
    // restrict to using attributes as we will need to decorate the panel depending on the behavior
    restrict: 'A',
    scope: {
      // the key needs to match that within the template
      panelValue: '=info'
    },
    templateUrl: function(elem, attr) {
      return 'views/directives/optionPanel-'+attr.type+'.html'
    }
  };
});