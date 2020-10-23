using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ExcelDataReader;
using OfficeOpenXml;
using Samsung.Areas.Admin.Data;

namespace Samsung.Areas.Admin.Controllers
{
    public class ProductsController : Controller
    {
        private BanHangEntities db = new BanHangEntities();

        // GET: Products
        public ActionResult Index()
        {
            var products = db.Products.Include(p => p.Category);

            List<SelectListItem> listStatus = new List<SelectListItem>();
            listStatus.Add(new SelectListItem { Text = "Hiển thị", Value = "true" });
            listStatus.Add(new SelectListItem { Text = "Không hiển thị", Value = "false" });
            IEnumerable<SelectListItem> myCollection = listStatus.AsEnumerable();
            ViewBag.statusSearch = new SelectList(myCollection, "Value", "Text");

            ViewBag.categorySearch = new SelectList(db.Categories, "Category_Id", "Name");

            return View(products.ToList());
        }
        public ActionResult Search(int? categorySearch = null, string statusSearch = null, string key = null)
        {

            var products = db.Products.Include(p => p.Category);

            ViewBag.categorySearch = new SelectList(db.Categories, "Category_Id", "Name", categorySearch);
            List<SelectListItem> listStatus = new List<SelectListItem>();
            listStatus.Add(new SelectListItem { Text = "Hiển thị", Value = "true" });
            listStatus.Add(new SelectListItem { Text = "Không hiển thị", Value = "false" });
            IEnumerable<SelectListItem> myCollection = listStatus.AsEnumerable();
            ViewBag.statusSearch = new SelectList(myCollection, "Value", "Text", statusSearch);


            if (categorySearch != null) products = products.Where(x => x.Category_Id == categorySearch);
            else ViewBag.categorySearch = new SelectList(db.Categories, "Category_Id", "Name");
            if (!String.IsNullOrEmpty(statusSearch))
            {
                bool status = Convert.ToBoolean(statusSearch);
                products = products.Where(x => x.Status == status);
            }
            else
            {

                listStatus = new List<SelectListItem>();
                listStatus.Add(new SelectListItem { Text = "Hiển thị", Value = "true" });
                listStatus.Add(new SelectListItem { Text = "Không hiển thị", Value = "false" });
                myCollection = listStatus.AsEnumerable();
                ViewBag.statusSearch = new SelectList(myCollection, "Value", "Text");

            }


            if (!String.IsNullOrEmpty(key))
            {
                products = products.Where(x => x.Name.Contains(key));
                ViewBag.key = key;
            }
            return View("Index", products.ToList());
        }
        public ActionResult SearchByCategory(int? categoryId)
        {
            if (categoryId == null) return RedirectToAction("Index");
            var products = db.Products.Include(p => p.Category).Where(x => x.Category_Id == categoryId);
            ViewBag.Category_Id = new SelectList(db.Categories, "Category_Id", "Name", categoryId);

            return View("Index", products.ToList());
        }
        public ActionResult SearchByStatus(string Status)
        {
            if (Status == null) return RedirectToAction("Index");
            bool status = Convert.ToBoolean(Status);
            var products = db.Products.Include(p => p.Category).Where(x => x.Status == status);

            List<SelectListItem> listStatus = new List<SelectListItem>();
            listStatus.Add(new SelectListItem { Text = "Hiển thị", Value = "true" });
            listStatus.Add(new SelectListItem { Text = "Không hiển thị", Value = "false" });
            IEnumerable<SelectListItem> myCollection = listStatus.AsEnumerable();
            ViewBag.Status = new SelectList(myCollection, "Value", "Text", Status);
            return View("Index", products.ToList());
        }

        // GET: Products/Details/5
        public ActionResult Details(int? id, string partialName = "_Overview")
        {
            ViewBag.partialName = partialName;
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        // GET: Products/Create
        public ActionResult Create()
        {
            var statusList = new[] { new { name = "Hiển thị", val = true }, new { name = "Không hiển thị", val = false } };
            ViewBag.Status = new SelectList(statusList, "val", "name");
            ViewBag.Category_Id = new SelectList(db.Categories, "Category_Id", "Name");
            return View();
        }

        // POST: Products/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Product_Id,Category_Id,Name,Status,Price,SalePrice,Summary")] Product product, HttpPostedFileBase file)
        {
            byte[] img = null;
            using (Stream inputStream = file.InputStream)
            {
                MemoryStream memoryStream = inputStream as MemoryStream;
                if (memoryStream == null)
                {
                    memoryStream = new MemoryStream();
                    inputStream.CopyTo(memoryStream);
                }
                img = memoryStream.ToArray();
                product.ProductImage = img;
            }
            product.View = 0;
            product.Updated = null;
            product.Created = DateTime.Now.ToLocalTime();
            if (ModelState.IsValid)
            {
                db.Products.Add(product);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.Category_Id = new SelectList(db.Categories, "Category_Id", "Name", product.Category_Id);
            return View(product);
        }

        // GET: Products/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            var statusList = new[] { new { name = "Hiển thị", val = true }, new { name = "Không hiển thị", val = false } };
            ViewBag.Status = new SelectList(statusList, "val", "name", product.Status);
            ViewBag.Category_Id = new SelectList(db.Categories, "Category_Id", "Name", product.Category_Id);
            return View(product);
        }

        // POST: Products/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Product_Id,Category_Id,Name,MetaSale,DescriptionSale,Created,Status,IsActive,Priority,Price,SalePrice,Description,Summary")] Product product, HttpPostedFileBase file)
        {
            byte[] img = null;
            using (Stream inputStream = file.InputStream)
            {
                MemoryStream memoryStream = inputStream as MemoryStream;
                if (memoryStream == null)
                {
                    memoryStream = new MemoryStream();
                    inputStream.CopyTo(memoryStream);
                }
                img = memoryStream.ToArray();
                product.ProductImage = img;
            }
            product.Updated = DateTime.Now.ToLocalTime();
            if (ModelState.IsValid)
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            var statusList = new[] { new { name = "Hiển thị", val = true }, new { name = "Không hiển thị", val = false } };
            ViewBag.Status = new SelectList(statusList, "val", "name", product.Status);
            ViewBag.Category_Id = new SelectList(db.Categories, "Category_Id", "Name", product.Category_Id);
            return View(product);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult UploadImage([Bind(Include = "Product_Id,Category_Id,Name,MetaSale,DescriptionSale,Created,Status,IsActive,Priority,Price,SalePrice,Description,Summary")] Product product)
        {
            product.Updated = DateTime.Now.ToLocalTime();
            if (ModelState.IsValid)
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            var statusList = new[] { new { name = "Hiển thị", val = true }, new { name = "Không hiển thị", val = false } };
            ViewBag.Status = new SelectList(statusList, "val", "name", product.Status);
            ViewBag.Category_Id = new SelectList(db.Categories, "Category_Id", "Name", product.Category_Id);
            return View(product);
        }

        // GET: Products/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            db.Products.Remove(product);
            db.SaveChanges();
            return RedirectToAction("Index");
            //return View(product);
        }

        // POST: Products/Delete/5
        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            Product product = db.Products.Find(id);
            db.Products.Remove(product);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ChangeStatus(int productId, string Status)
        {
            Product product = db.Products.Find(productId);
            product.Status = Convert.ToBoolean(Status);
            if (ModelState.IsValid)
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
            }
            return RedirectToAction("Index");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ChangeActive(int productId, string IsActive)
        {
            Product product = db.Products.Find(productId);
            product.IsActive = Convert.ToBoolean(IsActive);
            if (ModelState.IsValid)
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
            }
            return RedirectToAction("Index");
        }

        public ActionResult DeleteSelected(string lstApps)
        {
            if (lstApps == null || lstApps == "") return RedirectToAction("Index");
            List<int> listId = new List<int>(Array.ConvertAll(lstApps.Split(','), int.Parse));
            string tmp = "";
            foreach (int i in listId)
            {
                tmp += "-" + i.ToString();
            }
            TempData["msg"] = new ResponseMessage()
            {
                Type = "callout-danger",
                Message = tmp
            };

            db.Products.RemoveRange(db.Products.Where(x => listId.Contains(x.Product_Id)));
            db.SaveChanges();
            return RedirectToAction("Index");
        }
        public ActionResult RenderPartialDetails(string partialName, int productId)
        {
            Product product = db.Products.Find(productId);
            return PartialView(partialName, product);
        }
        public void DownloadExcel()
        {
            IEnumerable<Product> products = db.Products;
            ExcelPackage Ep = new ExcelPackage();
            ExcelWorksheet Sheet = Ep.Workbook.Worksheets.Add("Report");
            Sheet.Cells["A1"].Value = "Stt";
            Sheet.Cells["B1"].Value = "Khóa chính";
            Sheet.Cells["C1"].Value = "Tên sản phẩm";
            Sheet.Cells["D1"].Value = "Mã sản phẩm";
            Sheet.Cells["E1"].Value = "Giá niêm yết";
            Sheet.Cells["F1"].Value = "Giá ưu đãi";
            int row = 2;
            foreach (var item in products)
            {

                Sheet.Cells[string.Format("A{0}", row)].Value = row - 1;
                Sheet.Cells[string.Format("B{0}", row)].Value = item.Product_Id;
                Sheet.Cells[string.Format("C{0}", row)].Value = item.Name;
                Sheet.Cells[string.Format("D{0}", row)].Value = item.Summary;
                Sheet.Cells[string.Format("E{0}", row)].Value = item.Price;
                Sheet.Cells[string.Format("F{0}", row)].Value = item.SalePrice;
                row++;
            }


            Sheet.Cells["A:AZ"].AutoFitColumns();
            Response.Clear();
            Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            Response.AddHeader("content-disposition", "attachment: filename=" + "Report.xlsx");
            Response.BinaryWrite(Ep.GetAsByteArray());
            Response.End();
        }
        [HttpPost]
        public ActionResult ImportFromExcel(HttpPostedFileBase file)
        {
            using (var stream = file.InputStream)
            {
                using (IExcelDataReader reader = ExcelReaderFactory.CreateReader(stream))
                {
                    DataSet result = reader.AsDataSet(new ExcelDataSetConfiguration()
                    {
                        ConfigureDataTable = (_) => new ExcelDataTableConfiguration()
                        {
                            UseHeaderRow = true
                        }
                    });
                    foreach (DataTable table in result.Tables)
                    {

                    }
                }
            }
            using (var transaction = db.Database.BeginTransaction())
            {

            }



            return RedirectToAction("Index");
        }

    }
}
