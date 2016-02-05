(function() {
	var app = angular.module('diceRoller', []);

	app.controller('DiceController', function () {
		this.numberOfDice = 1;
		this.sides = 20;
	});
})();