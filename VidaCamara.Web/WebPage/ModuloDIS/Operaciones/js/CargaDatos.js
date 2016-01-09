﻿$(document).ready(function () {
    //validacion detablas para mostrar data
    //validacion de campos para grabar
    $("section").delegate("#ctl00_ContentPlaceHolder1_btnGuardar", 'click', function () {
        var nro_contrato = $('#ctl00_ContentPlaceHolder1_ddl_conrato1').val();
        var tipo_archivo = $("#ctl00_ContentPlaceHolder1_ddl_tipo_archivo").val();
        var tipo_archivo_des = $("#ctl00_ContentPlaceHolder1_ddl_tipo_archivo option:selected").text();
        if (parseInt(nro_contrato) == 0) {
            mostrarMensajeAlert("Seleccione el contrato"); return false;
        } else if (parseInt(tipo_archivo) == 0) {
            mostrarMensajeAlert("Seleccione el tipo de archivo"); return false;
        } else {
            return confirm("¿ Esta seguro de Guardar el tipo de archivo " + tipo_archivo_des + " ?");
        }
    });
});
