using Samsung.Areas.Admin.Data;
using Samsung.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Samsung.Controllers
{
    public class ShoppingCartController : Controller
    {
        private BanHangEntities db = new BanHangEntities();
        // GET: ShoppingCart
        public ActionResult Index()
        {
            return View();
        }
        private int isExist(int id)
        {
            List<ItemCart> cart = (List<ItemCart>)Session["cart"];
            for (int i = 0; i < cart.Count; i++)
                if (cart[i].Product.Product_Id == id)
                    return i;
            return -1;
        }
        public ActionResult AddToCart(int id)
        {
            ItemCart itemCart = new ItemCart();
            if (Session["cart"] == null)
            {
                List<ItemCart> cart = new List<ItemCart>();
                cart.Add(new ItemCart { Product = db.Products.Find(id), Quantity = 1 });
                Session["cart"] = cart;
            }
            else
            {
                List<ItemCart> cart = (List<ItemCart>)Session["cart"];
                int index = isExist(id);
                if (index != -1)
                {
                    cart[index].Quantity++;
                }
                else
                {
                    cart.Add(new ItemCart { Product = db.Products.Find(id), Quantity = 1 });
                }
                Session["cart"] = cart;
            }
            return RedirectToAction("Index", "Home", null);
        }
        public ActionResult RemoveProduct(int cartIndex)
        {

            List<ItemCart> cart = (List<ItemCart>)Session["cart"];
            cart.Remove(cart[cartIndex]);
            return View("Index");
        }
        [HttpPost]
        public ActionResult AddToCart(FormCollection values)
        {
            int cidx = Int32.Parse(values["cartIndex"]);
            int qty = Int32.Parse(values["quantity["+ cidx+"]"]);
            List<ItemCart> cart = (List<ItemCart>)Session["cart"];
            cart[cidx].Quantity = qty;
            return View("Index");
        }
        [HttpPost]
        public ActionResult Payment([Bind(Include = "Order_Id,FullName,Company,Phone,Address")] Order order)
        {
            if (ModelState.IsValid)
            {
                db.Orders.Add(order);

                List<ItemCart> cart = (List<ItemCart>)Session["cart"];
                foreach (ItemCart itemCart in cart)
                {
                    OrderDetail odetail = new OrderDetail();
                    odetail.Price = itemCart.Product.SalePrice;
                    odetail.Quantity = itemCart.Quantity;
                    odetail.Product_Id = itemCart.Product.Product_Id;
                    odetail.Order_Id = order.Order_Id;
                    db.OrderDetails.Add(odetail);

                }
                db.SaveChanges();
            }
            return RedirectToAction("Index", "Home");
        }
    }
}