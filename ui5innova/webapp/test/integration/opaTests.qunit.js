/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ui5innova/ui5innova/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});