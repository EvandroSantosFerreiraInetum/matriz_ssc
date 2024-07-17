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

            // Obtém o ano atual
                var currentYear = new Date().getFullYear();

                // Obtém a referência ao ComboBox
                var oComboBox = this.byId("idYearListSetComboBox");

                // Define o ano atual como o selectedKey
                oComboBox.setSelectedKey(currentYear.toString());
            },
 
 
        });
    });
