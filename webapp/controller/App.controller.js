sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	
	return Controller.extend("opensap.MyApp_ui5.controller.App", {

	onShowHello : function () {
		MessageToast.show("Test message");
	}
		
	});
});
