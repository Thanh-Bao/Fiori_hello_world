sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("in.sijas.ui5.app.controller.App", {
        onInit: function () {
            var oModel = new sap.ui.model.odata.ODataModel("https://expressjs.bao.name.vn/ZSBUI_PHONE_PRICE/", true);

            oModel.read("/ZC_PHONE_PRICE", {
                success: function (data) {
                    console.log("Hello ===>", data)
                }
            })

            // var oModel2 = new sap.ui.model.odata.ODataModel("https://services.odata.org/V2/Northwind/Northwind.svc/", true);
            // oModel2.read("/Products", {
            //     success: function (data) {
            //         console.log("Hello2 ===>", data)
            //     }
            // })

        },
    });
});

