sap.ui.getCore().attachInit(function () {
    // workaround begin: start a mock server
    jQuery.sap.require('sap.ui.core.util.MockServer');
    var oMockServer = new sap.ui.core.util.MockServer({
        rootUri: '/destinations/ES5/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/',
    });
    oMockServer.simulate('metadata.xml', {
        sMockdataBaseUrl: 'mockdata',
        bGenerateMissingMockData: true,
    });
    oMockServer.start();
    // workaround end

    new sap.ui.core.ComponentContainer({
        name: 'opensap.myapp',
    }).placeAt('content');
});