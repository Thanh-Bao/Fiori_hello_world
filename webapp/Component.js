// sap.ui.getCore().attachInit(() => {
//     sap.ui.xmlview({
//         viewName: "opensap.myapp.view.App"
//     }).placeAt("content");
// })

sap.ui.getCore().attachInit(function () {
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
