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
            //   let oList = this.byId("idTable");
            //   oList.setFixedColumnCount(1);

                 // Obtém o ano atual
                let currentYear = new Date().getFullYear();

                // Obtém a referência ao ComboBox
                let oComboBox = this.byId("idYearListSetComboBox");

                // Define o ano atual como o selectedKey
                oComboBox.setSelectedKey(currentYear.toString());
                
            },
             
            onFilterBarSearch: function (event) {
                // Pesquisa por consultores
                let oConsultantComboBox     = this.byId("idConsultantListSetMultiComboBox");
                let aConsultantSelectedKeys = oConsultantComboBox.getSelectedKeys();
                this.fetchDataFromBackend(aConsultantSelectedKeys);
               
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

            fetchDataFromBackend: function(consultantValues) {
                let oTable = this.byId("idTable");
                let oBinding = oTable.getBinding("rows");
            
                // Construa o filtro composto para enviar ao backend
                let aFilters = consultantValues.map(value => {
                    return new sap.ui.model.Filter("Consultant", sap.ui.model.FilterOperator.EQ, value);
                });
            
                // Cria um filtro composto usando o operador lógico "OU" (OR)
                let oCombinedFilter = new sap.ui.model.Filter({
                    filters: aFilters,
                    and: false // 'false' significa 'OR'
                });
            
                // Aplique o filtro composto ao binding da tabela
                oBinding.filter(oCombinedFilter);
            },
 
        });
    });
