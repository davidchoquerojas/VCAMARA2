﻿using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using VidaCamara.DIS.Modelo;
using VidaCamara.DIS.Negocio;
using VidaCamara.SBS.Entity;
using VidaCamara.SBS.Negocio;

namespace VidaCamara.Web.WebPage.ModuloDIS.Operaciones
{
    public partial class CargaDatos : System.Web.UI.Page
    {
        static int total;
        readonly bValidarAcceso _accesso = new bValidarAcceso();

        protected void Page_Load(object sender, EventArgs e)
        {
            Session["pagina"] = "OTROS";
            if (Session["username"] == null)
                Response.Redirect("Login?go=0");
            else
            {
                if (!_accesso.GetValidarAcceso(Request.QueryString["go"]))
                {
                    Response.Redirect("Error");
                }
            }
            if (!IsPostBack)
            {
                bTablaVC concepto = new bTablaVC();
                SetLLenadoContrato();
                concepto.SetEstablecerDataSourceConcepto(ddl_tipo_archivo, "17");
                concepto.SetEstablecerDataSourceConcepto(ddl_tipo_linea,"18");
            }
        }
        
        protected void btnGuardar_Click(object sender, ImageClickEventArgs e)
        {
            try
            {
                var entityCargaCabecera = new HistorialCargaArchivo_LinCab()
                {
                    IDE_CONTRATO = Convert.ToInt32(ddl_conrato1.SelectedItem.Value),
                    TIP_REGI = "C",
                    USU_REG = "AUTO"
                };
                if (!fileUpload.HasFile) return;

                var fileName = Server.MapPath(("~/Temp/Archivos/")) + fileUpload.FileName;
                fileUpload.SaveAs(fileName);
                var cargaLogica = new CargaLogica(fileName) { UsuarioModificacion = /*Session["usernameId"].ToString() */   "2"};
                cargaLogica.CargarArchivo(entityCargaCabecera);

                if ((cargaLogica.MensajeExcepcion != ""))
                {
                    ClientScript.RegisterStartupScript(this.GetType(), "myScript", ("<script>javascript: alert(\'" + ("Se produjo un error al cargar el archivo. Se termin� la carga. "
                                    + (cargaLogica.MensajeExcepcion + "\');</script>"))));
                }
                else if ((cargaLogica.Errores > 0))
                {
                    if ((cargaLogica.Errors != String.Empty))
                    {
                        ClientScript.RegisterStartupScript(this.GetType(), "myScript", ("<script>javascript: alert(\'"
                                        + (cargaLogica.Errors + "\');</script>")));
                    }
                    else if ((cargaLogica.Observacion != String.Empty))
                    {
                        ClientScript.RegisterStartupScript(this.GetType(), "myScript", ("<script>javascript: alert(\'"
                                        + (cargaLogica.Observacion + "\');</script>")));
                    }
                    else
                    {
                        this.GridView1.DataSource = cargaLogica.Resultado;
                        this.GridView1.DataBind();
                    }
                }
                else
                {
                    string nombre;
                    if ((cargaLogica.NombreArchivo.Split('_')[0] == "NOMINA"))
                    {
                        nombre = "Nomina procesada Ok.";
                        if ((cargaLogica.Errors != String.Empty))
                        {
                            nombre = (nombre + (", " + cargaLogica.Errors));
                            ClientScript.RegisterStartupScript(this.GetType(), "myScript", ("<script>javascript: alert(\'"
                                            + (nombre + "\');</script>")));
                        }
                        else
                        {
                            ClientScript.RegisterStartupScript(this.GetType(), "myScript", ("<script>javascript: alert(\'"
                                            + (nombre + "\');</script>")));
                        }
                    }
                    else if ((cargaLogica.NombreArchivo.Split('_')[0] == "INOMINA"))
                    {
                        nombre = "Nomina procesada Ok.";
                        if ((cargaLogica.Errors != String.Empty))
                        {
                            nombre = (nombre + (", " + cargaLogica.Errors));
                            ClientScript.RegisterStartupScript(this.GetType(), "myScript", ("<script>javascript: alert(\'"
                                            + (nombre + "\');</script>")));
                        }
                        else
                        {
                            ClientScript.RegisterStartupScript(this.GetType(), "myScript", ("<script>javascript: alert(\'"
                                            + (nombre + "\');</script>")));
                        }
                    }
                    else
                    {
                        nombre = "Archivo procesado Ok.";
                        if ((cargaLogica.Observacion != String.Empty))
                        {
                            nombre = (nombre + (", " + cargaLogica.Observacion));
                            ClientScript.RegisterStartupScript(this.GetType(), "myScript", ("<script>javascript: alert(\'"
                                            + (nombre + "\');</script>")));
                            if (cargaLogica.Observacion.Contains("alto"))
                            {
                                Correo c = new Correo();                              
                                string Para = cargaLogica.Correo;
                                string CC = "";
                                string CCO = "";
                                string Asunto = ("Monto alto a reembolsar: " + cargaLogica.NombreArchivo);
                                string Cuerpo = ("Estimado Usuario (a),</BR> liquidacion cargada contiene monto superior al establecido, el dia " + DateTime.Now);
                                Cuerpo = ((Cuerpo + "</BR> ")
                                            + cargaLogica.Observacion);
                                string FormatoCuerpo = "";
                                string Archivos = "";

                                string respuesta = cargaLogica.EnviarCorreo(Para, CC, CCO, Asunto, Cuerpo, FormatoCuerpo, Archivos);
                                
                            }
                        }
                        else if ((cargaLogica.Errors != String.Empty))
                        {
                            nombre = (nombre + (", " + cargaLogica.Errors));
                            ClientScript.RegisterStartupScript(this.GetType(), "myScript", ("<script>javascript: alert(\'"
                                            + (nombre + "\');</script>")));
                        }
                        else
                        {
                            ClientScript.RegisterStartupScript(this.GetType(), "myScript", ("<script>javascript: alert(\'"
                                            + (nombre + "\');</script>")));
                        }
                    }
                }

            }
            catch (Exception s)
            {
                MessageBox("ERROR =>" + s.Message.Replace("'", "-"));
            }
        }
        
        protected void btnExportError_Click(object sender, ImageClickEventArgs e)
        {
           
        }

        private void SetLLenadoContrato()
        {
            var list = new VidaCamara.SBS.Utils.Utility().getContratoSys(out total);
            ddl_conrato1.DataSource = list;
            ddl_conrato1.DataTextField = "_des_Contrato";
            ddl_conrato1.DataValueField = "_ide_Contrato";
            ddl_conrato1.DataBind();
            ddl_conrato1.Items.Insert(0, new ListItem("Seleccione ----", "0"));
        }

        private void MessageBox(string text)
        {
            Page.ClientScript.RegisterStartupScript(GetType(), "msgbox", "$('<div style=\"font-size:14px;text-align:center;\">"+ text +"</div>').dialog({title:'Confirmación',modal:true,width:400,height:240,buttons: [{id: 'aceptar',text: 'Aceptar',icons: { primary: 'ui-icon-circle-check' },click: function () {$(this).dialog('close');}}]})", true);
        }

        protected void ddl_tipo_archivo_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void ddl_conrato1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}