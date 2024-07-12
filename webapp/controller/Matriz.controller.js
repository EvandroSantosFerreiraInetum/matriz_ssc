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
                oList.setFixedColumnCount(2);
            },
 
            onDataReceive: function(oEvent) {
                // Ajusta automaticamente as colunas após os dados serem recebidos
                var oTable = this.byId("idTable");
                this._autoResizeColumns(oTable);
           
            },
    
            _autoResizeColumns: function(oTable) {
                var aColumns = oTable.getColumns();
                aColumns.forEach(function(oColumn, index) {
               //        oTable.autoResizeColumn(index);
                });
           
            }
         
        });
    });
