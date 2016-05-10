angular.module('app', []).controller("MainController", function() {

	// Todo list
	this.tasks = [
	{
		name: "Go to grocery",
		done: false
	},
	{
		name: "Walk the dog",
		done: false
	},
	{
		name: "Dinner with boss",
		done: false
	}
	];

	// Filter list
	this.language = [
	{
		name: "Java",
		done: false
	},
	{
		name: "PHP",
		done: false
	},
	{
		name: "C#",
		done: false
	},
	{
		name: "C++",
		done: false
	},
	{
		name: "Angular",
		done: false
	}	
	];

});
