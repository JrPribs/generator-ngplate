var global = {
    "navItems": [{
        'name': 'Home',
        'icon': 'home',
        'url': '#/home'
    }]
};

describe('Home Controller Test', function() {
    beforeEach(module('<%- appControllers %>'));

    var homeController, scope;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        homeController = $controller('homeCtrl', {
            $scope: scope
        });
    }));

    it('Has section name of Home', function() {
        expect(scope.sectionName).toEqual("Home");
    });
});
