sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], (Controller, MessageToast) => {
	"use strict";
	return Controller.extend("opensap.myapp.controller.App", {
		onShowHello: () => {
			MessageToast.show("Hello openSAP @@@@");
		}

	});
});
