using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Samsung.Areas.Admin.Data;

namespace Samsung.Areas.Admin.Controllers
{
    public class CategoriesController : Controller
    {
        private BanHangEntities db = new BanHangEntities();

        // GET: Categories
        public ActionResult Index()
        {
            var categories = db.Categories.Include(c => c.Category2);
            return View(categories.ToList());
        }

        // GET: Categories/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return HttpNotFound();
            }
            return View(category);
        }

        // GET: Categories/Create
        public ActionResult Create()
        {
            var statusList = new[] { new { name = "Hiển thị", val = true }, new { name = "Không hiển thị", val = false } };
            ViewBag.Parent_Id = new SelectList(db.Categories, "Category_Id", "Name");
            ViewBag.Status = new SelectList(statusList, "val", "name");
            return View();
        }

        // POST: Categories/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Category_Id,Parent_Id,Name,Status")] Category category)
        {
            category.View = 0;
            category.Updated = null; 
            category.Created = DateTime.Now.ToLocalTime();
            if (ModelState.IsValid)
            {
                db.Categories.Add(category);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.Parent_Id = new SelectList(db.Categories, "Category_Id", "Name", category.Parent_Id);
            return View(category);
        }

        // GET: Categories/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return HttpNotFound();
            }
            var statusList = new[] { new { name = "Hiển thị", val = true }, new { name = "Không hiển thị", val = false } };
            ViewBag.Status = new SelectList(statusList, "val", "name", category.Status);
            ViewBag.Parent_Id = new SelectList(db.Categories, "Category_Id", "Name", category.Parent_Id);
            return View(category);
        }

        // POST: Categories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Category_Id,Parent_Id,Name,MetaSale,DescriptionSale,Status,Priority")] Category category)
        {
            category.Updated = DateTime.Now.ToLocalTime();
            if (ModelState.IsValid)
            {
                db.Entry(category).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            var statusList = new[] { new { name = "Hiển thị", val = true }, new { name = "Không hiển thị", val = false } };
            ViewBag.Status = new SelectList(statusList, "val", "name", category.Status);
            ViewBag.Parent_Id = new SelectList(db.Categories, "Category_Id", "Name", category.Parent_Id);
            return View(category);
        }

        // GET: Categories/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            if (db.Products.Any(x => x.Category_Id == id))
            {

                TempData["msg"] = new ResponseMessage()
                {
                    Type = "callout-danger",
                    Message = "Error. Some product still exsist in this Category"
                };
                return RedirectToAction("Index");
            }

            Category category = db.Categories.Find(id);

            db.Categories.Remove(category);
            db.SaveChanges();
            TempData["msg"] = new ResponseMessage()
            {
                Type = "callout-success",
                Message = "Delete Success"
            };

            return RedirectToAction("Index");
            /*if (category == null)
            {
                return HttpNotFound();
            }
            //return View(category);
            db.SaveChanges();
            return RedirectToAction("Index");*/
        }

        // POST: Categories/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            if (db.Products.Any(x => x.Category_Id == id))
            {

                TempData["msg"] = new ResponseMessage()
                {
                    Type = "callout-danger",
                    Message = "Error. Some product still exsist in this Category"
                };
                return RedirectToAction("Index");
            }

            Category category = db.Categories.Find(id);
            db.Categories.Remove(category);
            db.SaveChanges();
            TempData["msg"] = new ResponseMessage()
            {
                Type = "callout-success",
                Message = "Delete Success"
            };

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
    }
}
