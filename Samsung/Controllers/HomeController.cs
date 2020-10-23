using Samsung.Areas.Admin.Data;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Samsung.Controllers
{
    public class HomeController : Controller
    {
        private BanHangEntities db = new BanHangEntities();
        public ActionResult Index(string categoryName = null)
        {
            var products = db.Products.Include(p => p.Category);
            if (categoryName != null) products = products.Where(x => x.Category.Name == categoryName);
            return View(products);
        }

        public ActionResult About()
        {

            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}