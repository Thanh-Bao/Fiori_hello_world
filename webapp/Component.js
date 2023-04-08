// sap.ui.getCore().attachInit(() => {
//     sap.ui.xmlview({
//         viewName: "opensap.myapp.view.App"
//     }).placeAt("content");
// })

sap.ui.getCore().attachInit(function () {


    // workaround begin: start a mock server
    jQuery.sap.require("sap.ui.core.util.MockServer");
    var oMockServer = new sap.ui.core.util.MockServer({
        rootUri: "/destinations/ES5/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/"
    });
    oMockServer.simulate("metadata.xml", {
        sMockdataBaseUrl: "mockdata",
        bGenerateMissingMockData: true
    });
    oMockServer.start();
    // workaround end


    new sap.ui.core.ComponentContainer({
        name: "opensap.myapp"
    }).placeAt("content");
});

sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("opensap.myapp.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // additional initialization can be done here
        }

    });
});
