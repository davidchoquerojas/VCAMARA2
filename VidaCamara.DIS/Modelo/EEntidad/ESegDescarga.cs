﻿using System;

namespace VidaCamara.DIS.Modelo.EEntidad
{
    public class ESegDescarga
    {
        public string nombreArchivo { get; set; }
        public DateTime FechaCarga { get; set; }
        public string Usuario { get; set; }
        public int NroLineas { get; set; }
        public string Estado { get; set; }
        public string Moneda { get; set; }
        public string Importe { get; set; }
    }
}