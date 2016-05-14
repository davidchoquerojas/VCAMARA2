﻿$(document).ready(function () {
    var contrato_sis = function () {
        this.IDE_CONTRATO = $("#ctl00_ContentPlaceHolder1_ddl_contrato").val()
    };
    //eventos
    $("section").delegate("#ctl00_ContentPlaceHolder1_btn_buscar", "click", function (ev) {
        ev.preventDefault();
        var filters = [$("#ctl00_ContentPlaceHolder1_ddl_tipo_archivo").val(), $("#ctl00_ContentPlaceHolder1_txt_fec_ini_o").val(), $("#ctl00_ContentPlaceHolder1_txt_fec_hasta_o").val()];
        listSegDescarga(new contrato_sis(), filters);
    });
    const action = "/WebPage/ModuloDIS/Consultas/frmSegDescarga.aspx/listSegDescarga";
    var fields = {
        nombreArchivo :{title:'NombreArchivo'},
        FechaCarga: {title:'FechaCarga', type: 'date', displayFormat: 'dd/mm/yy'},
        Usuario: {title:'Usuario'},
        NroLineas: {title:'NroLineas'},
        Estado: { title:'Estado' },
        Importe: { title:'Importe' }
    }
    function listSegDescarga(contrato, filters) {
        $('#tblApruebaCarga').jtable({
            tableId: 'ApruebaCarga',
            paging: true,
            sorting: true,
            pageSize: 12,
            defaultSorting: 'nombreArchivo ASC',
            selecting: false,
            actions: {
                listAction: action,
            },
            recordsLoaded: function (event, data) {
                //GetTipoTabla($("#ctl00_ContentPlaceHolder1_ddl_tabla_t").val());
            },
            fields: fields
        });

        $("#ApruebaCarga").css({"text-align":"center"});
        $('#tblApruebaCarga.jtable-main-container').css({ "width": "1500px" });
        $('#tblApruebaCarga').jtable('load', { contrato: contrato, filters: filters });
    }
})