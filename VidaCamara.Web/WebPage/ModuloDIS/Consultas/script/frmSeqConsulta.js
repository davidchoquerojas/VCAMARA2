﻿$(document).ready(function () {
    //llenado de la entidad cabecera historia
    var cabecera = function(){
        this.IDE_CONTRATO = $("#ctl00_ContentPlaceHolder1_ddl_contrato").val()
    };
    //llenado de la entidad historia detalle
    var historiaLinDet = function () {
        this.COD_AFP_ = $("#ctl00_ContentPlaceHolder1_ddl_afp").val(),
        this.TIP_MONE = $("#ctl00_ContentPlaceHolder1_ddl_moneda").val(),
        this.COD_CUSP = $("#ctl00_ContentPlaceHolder1_txt_cod_cusp").val(),
        this.APE_MATE_PEN = $("#ctl00_ContentPlaceHolder1_txt_apellido").val(),
        this.PRI_NOMB_PEN = $("#ctl00_ContentPlaceHolder1_txt_nombre").val(),
        this.NUM_DOCU_PEN = $("#ctl00_ContentPlaceHolder1_txt_dni").val(),
        this.NUM_SOLI_PEN = $("#ctl00_ContentPlaceHolder1_txt_nro_solicitud").val()
    };
    //boton de consultar
    $("section").delegate("#ctl00_ContentPlaceHolder1_btn_consultar", "click", function (ev) {
        ev.preventDefault();
        //aca se adicionara algunos valores que no se encuentren en la tabla historia cabecera
        var filterParam = [$("#ctl00_ContentPlaceHolder1_ddl_tipo_archivo").val(),$("#ctl00_ContentPlaceHolder1_txt_fec_ini_o").val(),$("#ctl00_ContentPlaceHolder1_txt_fec_hasta_o").val()];
        console.log(filterParam);
        jatbleRequestOperacion(new cabecera(),new historiaLinDet(),filterParam, false, "5000");
    });
    function jatbleRequestOperacion(cabecera, historiaLinDet,filterParam, visibleColumn, sizetable) {
        $('#frmSeqConsulta').jtable({
            tableId: 'tblSeqConsulta',
            paging: true,
            sorting: true,
            selecting: false,
            pageSize: 13,
            defaultSorting: 'IdHistorialCargaArchivoLinCab ASC',
            actions: {
                listAction: '/WebPage/ModuloDIS/Consultas/frmSegConsulta.aspx/listHistoriaDetalle'
            },
            fields: {
                IdHistorialCargaArchivoLinDet: { title: 'N° Operación' },
                IdHistorialCargaArchivoLinCab: { title: 'N° Operación' },
                FechaInsert: { title: 'N° Operación' },
                TipoLinea: { title: 'N° Operación' },
                NumeroLinea: { title: 'N° Operación' },
                FEC_DEVE: { title: 'N° Operación' },
                FEC_FALL: { title: 'N° Operación' },
                FEC_OCUR: { title: 'N° Operación' },
                FEC_PAGO_APO_ADI: { title: 'N° Operación' },
                FEC_INV_DEF: { title: 'N° Operación' },
                CAP_GAST_SEP: { title: 'N° Operación' },
                PARE: { title: 'N° Operación' },
                SAL_CIC_SOL: { title: 'N° Operación' },
                TIP_REGI: { title: 'N° Operación' },
                TIP_SOLI: { title: 'N° Operación' },
                NUM_BENE: { title: 'N° Operación' },
                NUM_MESE_DEV: { title: 'N° Operación' },
                POR_BENE: { title: 'N° Operación' },
                TIP_IDEN_SOL: { title: 'N° Operación' },
                TIP_PENS: { title: 'N° Operación' },
                TIP_DOCU_IDE_PEN: { title: 'N° Operación' },
                TIP_MOVI: { title: 'N° Operación' },
                COD_CSV_01: { title: 'N° Operación' },
                COD_CSV_02: { title: 'N° Operación' },
                COD_CSV_03: { title: 'N° Operación' },
                COD_CSV_04: { title: 'N° Operación' },
                COD_CSV_05: { title: 'N° Operación' },
                COD_CSV_06: { title: 'N° Operación' },
                COD_CSV_07: { title: 'N° Operación' },
                COD_CSV_08: { title: 'N° Operación' },
                COD_AFP_: { title: 'N° Operación' },
                COD_IDE_CSV: { title: 'N° Operación' },
                FRA_MESE_DEV: { title: 'N° Operación' },
                IND_PENS_PRE: { title: 'N° Operación' },
                MTO_PPRE_ORI: { title: 'N° Operación' },
                TIP_CAMB_VTA: { title: 'N° Operación' },
                EXC_PENS_SOL: { title: 'N° Operación' },
                EXC_PENS_NM: { title: 'N° Operación' },
                MES_DEVE: { title: 'N° Operación' },
                CAP_REQU_PEN: { title: 'N° Operación' },
                CRU_FAMI: { title: 'N° Operación' },
                FEC_NACI: { title: 'N° Operación' },
                FEC_NACI_PEN: { title: 'N° Operación' },
                FEC_PAGO: { title: 'N° Operación' },
                FEC_PAGO_TEX: { title: 'N° Operación' },
                FEC_SECI: { title: 'N° Operación' },
                FEC_SINI_OCU: { title: 'N° Operación' },
                FEC_DEVE_ACT: { title: 'N° Operación' },
                FEC_DEVE_INI: { title: 'N° Operación' },
                FEC_FIN_SUB: { title: 'N° Operación' },
                RAM_PROM_SOL: { title: 'N° Operación' },
                TAS_INTE: { title: 'N° Operación' },
                VACIO_10: { title: 'N° Operación' },
                DES_PENS_MONE: { title: 'N° Operación' },
                MTO_APOR_ADI: { title: 'N° Operación' },
                MTO_APOR_ADI_SOL: { title: 'N° Operación' },
                MTO_APOR_COM: { title: 'N° Operación' },
                MTO_PENS_PAG: { title: 'N° Operación' },
                MTO_PPRE_MN: { title: 'N° Operación' },
                MTO_APOR_OBL: { title: 'N° Operación' },
                MTO_MONE_APO_COM1: { title: 'N° Operación' },
                MTO_MONE_APO_COM2: { title: 'N° Operación' },
                MTO_MONE_APO_COM3: { title: 'N° Operación' },
                MTO_MONE_APO_COM4: { title: 'N° Operación' },
                MTO_MONE_APO_COM5: { title: 'N° Operación' },
                MTO_MONE_APO_COM6: { title: 'N° Operación' },
                MTO_MONE_APO_COM7: { title: 'N° Operación' },
                MTO_MONE_APO_COM8: { title: 'N° Operación' },
                MTO_MONE_APO_OBL1: { title: 'N° Operación' },
                MTO_MONE_APO_OBL2: { title: 'N° Operación' },
                MTO_MONE_APO_OBL3: { title: 'N° Operación' },
                MTO_MONE_APO_OBL4: { title: 'N° Operación' },
                MTO_MONE_APO_OBL5: { title: 'N° Operación' },
                MTO_MONE_APO_OBL6: { title: 'N° Operación' },
                MTO_MONE_APO_OBL7: { title: 'N° Operación' },
                MTO_MONE_APO_OBL8: { title: 'N° Operación' },
                MTO_PAGO_REE_SOL: { title: 'N° Operación' },
                MTO_PRIM_PAG_PENS_AFP1: { title: 'N° Operación' },
                MTO_PRIM_PAG_PENS_AFP2: { title: 'N° Operación' },
                MTO_PRIM_PAG_PENS_AFP3: { title: 'N° Operación' },
                MTO_PRIM_PAG_PENS_AFP4: { title: 'N° Operación' },
                MTO_PRIM_PAG_PENS_AFP5: { title: 'N° Operación' },
                MTO_PRIM_PAG_PENS_AFP6: { title: 'N° Operación' },
                MTO_PRIM_PAG_PENS_AFP7: { title: 'N° Operación' },
                MTO_PRIM_PAG_PENS_AFP8: { title: 'N° Operación' },
                MTO_DSCT_PENS_PAG_AFP1: { title: 'N° Operación' },
                MTO_DSCT_PENS_PAG_AFP2: { title: 'N° Operación' },
                MTO_DSCT_PENS_PAG_AFP3: { title: 'N° Operación' },
                MTO_DSCT_PENS_PAG_AFP4: { title: 'N° Operación' },
                MTO_DSCT_PENS_PAG_AFP5: { title: 'N° Operación' },
                MTO_DSCT_PENS_PAG_AFP6: { title: 'N° Operación' },
                MTO_DSCT_PENS_PAG_AFP7: { title: 'N° Operación' },
                MTO_DSCT_PENS_PAG_AFP8: { title: 'N° Operación' },
                MTO_SOLE_APO_ADI_AFP1: { title: 'N° Operación' },
                MTO_SOLE_APO_ADI_AFP2: { title: 'N° Operación' },
                MTO_SOLE_APO_ADI_AFP3: { title: 'N° Operación' },
                MTO_SOLE_APO_ADI_AFP4: { title: 'N° Operación' },
                MTO_SOLE_APO_ADI_AFP5: { title: 'N° Operación' },
                MTO_SOLE_APO_ADI_AFP6: { title: 'N° Operación' },
                MTO_SOLE_APO_ADI_AFP7: { title: 'N° Operación' },
                MTO_SOLE_APO_ADI_AFP8: { title: 'N° Operación' },
                MTO_SOLE_REE_PAG_AFP1: { title: 'N° Operación' },
                MTO_SOLE_REE_PAG_AFP2: { title: 'N° Operación' },
                MTO_SOLE_REE_PAG_AFP3: { title: 'N° Operación' },
                MTO_SOLE_REE_PAG_AFP4: { title: 'N° Operación' },
                MTO_SOLE_REE_PAG_AFP5: { title: 'N° Operación' },
                MTO_SOLE_REE_PAG_AFP6: { title: 'N° Operación' },
                MTO_SOLE_REE_PAG_AFP7: { title: 'N° Operación' },
                MTO_SOLE_REE_PAG_AFP8: { title: 'N° Operación' },
                NRO_CSV: { title: 'N° Operación' },
                NUM_DOCU_SOL: { title: 'N° Operación' },
                NUM_SINI: { title: 'N° Operación' },
                NUM_SOLI: { title: 'N° Operación' },
                NÚM_SOLI_PEN: { title: 'N° Operación' },
                NÚM_DOCU_PEN: { title: 'N° Operación' },
                PEN_PAGA_MON: { title: 'N° Operación' },
                PEN_BASE_MON: { title: 'N° Operación' },
                REM_PROM_ACT: { title: 'N° Operación' },
                NUM_APOR_ACT: { title: 'N° Operación' },
                SAL_CIC_MN: { title: 'N° Operación' },
                TIP_CAMB_COM: { title: 'N° Operación' },
                TIP_MONE: { title: 'N° Operación' },
                TOT_CAPI_REQ_MN: { title: 'N° Operación' },
                TOT_CAPI_REQ_ORI: { title: 'N° Operación' },
                COD_CUSP: { title: 'N° Operación' },
                COD_BENE_MN: { title: 'N° Operación' },
                APE_MATE_PEN: { title: 'N° Operación' },
                APE_MATE_SOLI: { title: 'N° Operación' },
                APE_PATE_PEN: { title: 'N° Operación' },
                APE_PATE_SOL: { title: 'N° Operación' },
                PRI_NOMB_PEN: { title: 'N° Operación' },
                PRI_NOMB_SOL: { title: 'N° Operación' },
                SEG_NOMB_PEN: { title: 'N° Operación' },
                SEG_NOMB_SOL: { title: 'N° Operación' },
                SUC_INTE: { title: 'N° Operación' },
                CumpleValidacion: { title: 'N° Operación' }
            }
        });
        $('#frmSeqConsulta.jtable-main-container').css({ "width": sizetable });
        $('#frmSeqConsulta').jtable('load', { 'cabecera': cabecera, 'historiaLinDet': historiaLinDet, 'filterParam': filterParam });
    }
});