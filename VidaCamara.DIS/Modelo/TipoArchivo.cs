//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace VidaCamara.DIS.Modelo
{
    using System;
    using System.Collections.Generic;
    
    public partial class TipoArchivo
    {
        public TipoArchivo()
        {
            this.Archivoes = new HashSet<Archivo>();
        }
    
        public int TipoArchivoId { get; set; }
        public string NombreTipoArchivo { get; set; }
        public string NombreClase { get; set; }
        public byte EsEntrada { get; set; }
        public int CabeceraLargo { get; set; }
        public int DetalleLargo { get; set; }
        public int TotalLargo { get; set; }
        public string ReglaPrevia { get; set; }
        public string ReglaPosterior { get; set; }
        public Nullable<int> TipoInformeId { get; set; }
        public Nullable<System.DateTime> FechaModificacion { get; set; }
        public string UsuarioModificacion { get; set; }
        public Nullable<bool> Vigente { get; set; }
    
        public virtual TipoInforme TipoInforme { get; set; }
        public virtual ICollection<Archivo> Archivoes { get; set; }
    }
}
