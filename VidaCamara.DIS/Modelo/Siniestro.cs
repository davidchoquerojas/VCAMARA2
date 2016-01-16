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
    
    public partial class Siniestro
    {
        public Siniestro()
        {
            this.Pagos = new HashSet<Pago>();
        }
    
        public int SiniestroId { get; set; }
        public string CUSPP { get; set; }
        public int TipoMovimientoId { get; set; }
        public int AFPId { get; set; }
        public int ContratoId { get; set; }
        public int TipoSolicitudId { get; set; }
        public Nullable<System.DateTime> FechaModificacion { get; set; }
        public string UsuarioModificacion { get; set; }
        public string CodTransferencia { get; set; }
        public Nullable<bool> Vigente { get; set; }
    
        public virtual AFP AFP { get; set; }
        public virtual Contrato1 Contrato { get; set; }
        public virtual ICollection<Pago> Pagos { get; set; }
        public virtual TipoMovimiento TipoMovimiento { get; set; }
        public virtual TipoSolicitude TipoSolicitude { get; set; }
    }
}
