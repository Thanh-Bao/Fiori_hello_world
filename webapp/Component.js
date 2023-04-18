sap.ui.define([
  'sap/ui/core/UIComponent',
], function (UIComponent) {
  'use strict';

  return UIComponent.extend("in.sijas.ui5.app.Component", {
    metadata: {
      "interfaces": ["sap.ui.core.IAsyncContentCreation"],
      "manifest": "json"
    },
    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
    }
  });
});