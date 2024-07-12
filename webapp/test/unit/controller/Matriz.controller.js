/*global QUnit*/

sap.ui.define([
	"inetumssm/alocation_ssc/controller/Matriz.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Matriz Controller");

	QUnit.test("I should test the Matriz controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
