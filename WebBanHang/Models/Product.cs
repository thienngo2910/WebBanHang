using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebBanHang.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Storage { get; set; }
        public decimal Price { get; set; }
    }
}