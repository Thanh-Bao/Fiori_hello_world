// Right click on desktop, add new shortcut
// Add the target as "[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp
// Click OK.

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var oData = {
                recipient: {
                    name: "World"
                }
            };
            console.log(oData)
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});
