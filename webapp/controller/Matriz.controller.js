sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("inetum.ssm.alocationssc.controller.Matriz", {
            onInit: function () {
                var oList = this.byId("idTable");
                 oList.setFixedColumnCount(1);
            },
 
 
        });
    });
