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
                let oList = this.byId("idTable");
                oList.setFixedColumnCount(1);

                 // Obtém o ano atual
                let currentYear = new Date().getFullYear();

                // Obtém a referência ao ComboBox
                let oComboBox = this.byId("idYearListSetComboBox");

                // Define o ano atual como o selectedKey
                oComboBox.setSelectedKey(currentYear.toString());
                
            },
             
            onFilterBarSearch: function (event) {
                // Pesquisa por ano
                let oYearComboBox = this.byId("idYearListSetComboBox");
                let sSelectedYear = oYearComboBox.getSelectedKey();

                // Pesquisa por consultores
                let oConsultantComboBox = this.byId("idConsultantListSetMultiComboBox");
                let aConsultantSelectedKeys = oConsultantComboBox.getSelectedKeys();

                // Chama o método fetchDataFromBackend com ambos os valores
                this.fetchDataFromBackend(sSelectedYear, aConsultantSelectedKeys);
               
                // Obter os meses selecionados
                let oMultiComboBox = this.byId("idMonthtListSetMultiComboBox");
                let aSelectedKeys = oMultiComboBox.getSelectedKeys();
                
                // Mapear os IDs das colunas para os meses
                let mMonthToColumnId = {
                    "01": "id1Column",
                    "02": "id2Column",
                    "03": "id3Column",
                    "04": "id4Column",
                    "05": "id5Column",
                    "06": "id6Column",
                    "07": "id7Column",
                    "08": "id8Column",
                    "09": "id9Column",
                    "10": "id10Column",
                    "11": "id11Column",
                    "12": "id12Column"
                };
    
                // Se nenhum mês estiver selecionado, mostrar todas as colunas
                if (aSelectedKeys.length === 0) {
                    for (let key in mMonthToColumnId) {
                        let sColumnId = mMonthToColumnId[key];
                        let oColumn = this.byId(sColumnId);
                        if (oColumn) {
                            oColumn.setVisible(true);
                        }
                    }
                } else {
                    // Iterar sobre os IDs das colunas e ajustar a visibilidade
                    for (let key in mMonthToColumnId) {
                        let sColumnId = mMonthToColumnId[key];
                        let oColumn = this.byId(sColumnId);
                        if (oColumn) {
                            oColumn.setVisible(aSelectedKeys.includes(key));
                        }
                    }
                }
            },

            fetchDataFromBackend: function(selectedYear, consultantValues) {
                let oTable = this.byId("idTable");
                let oBinding = oTable.getBinding("rows");
            
                let aFilters = [];
            
                // Adiciona filtro de ano se selecionado
                if (selectedYear) {
                    aFilters.push(new sap.ui.model.Filter("Year", sap.ui.model.FilterOperator.EQ, selectedYear));
                }
            
                // Adiciona filtros de consultores se algum consultor for selecionado
                if (consultantValues && consultantValues.length > 0) {
                    let aConsultantFilters = consultantValues.map(value => {
                        return new sap.ui.model.Filter("Consultant", sap.ui.model.FilterOperator.EQ, value);
                    });
            
                    // Adiciona filtros de consultores ao array de filtros
                    aFilters.push(new sap.ui.model.Filter({
                        filters: aConsultantFilters,
                        and: false // 'false' significa 'OR'
                    }));
                }
            
                // Cria um filtro composto usando o operador lógico 'AND' para combinar os filtros de ano e consultores
                let oCombinedFilter = new sap.ui.model.Filter({
                    filters: aFilters,
                    and: true // 'true' significa 'AND'
                });
            
                // Aplica o filtro composto ao binding da tabela
                oBinding.filter(oCombinedFilter);
            },

            onDataReceive: function (oEvent) {
                var oTable = this.byId("idTable");
                var oBinding = oTable.getBinding("rows");
    
                if (oBinding) {
                    var aContexts = oBinding.getContexts(0, 1); // Obtém o contexto da primeira linha
    
                    if (aContexts.length > 0) {
                        var oFirstRow = aContexts[0].getObject();
    
                        // Atualiza o texto dos títulos das colunas com base na primeira linha de dados
                        this.byId("id1Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("january") + " - " + oFirstRow.DaysM1  + "H");
                        this.byId("id2Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("february") + " - " + oFirstRow.DaysM2 + "H");
                        this.byId("id3Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("march") + " - " + oFirstRow.DaysM3 + "H");
                        this.byId("id4Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("april") + " - " + oFirstRow.DaysM4 + "H");
                        this.byId("id5Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("may") + " - " + oFirstRow.DaysM5 + "H");
                        this.byId("id6Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("june") + " - " + oFirstRow.DaysM6 + "H");
                        this.byId("id7Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("july") + " - " + oFirstRow.DaysM7 + "H");
                        this.byId("id8Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("august") + " - " + oFirstRow.DaysM8 + "H");
                        this.byId("id9Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("september") + " - " + oFirstRow.DaysM9 + "H");
                        this.byId("id10Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("october") + " - " + oFirstRow.DaysM10 + "H");
                        this.byId("id11Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("november") + " - " + oFirstRow.DaysM11 + "H");
                        this.byId("id12Title").setText(this.getView().getModel("i18n").getResourceBundle().getText("december") + " - " + oFirstRow.DaysM12 + "H");
                    }
                }
            },
 
        });
    });
