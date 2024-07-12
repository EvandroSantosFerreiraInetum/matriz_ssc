/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"inetumssm/alocation_ssc/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
