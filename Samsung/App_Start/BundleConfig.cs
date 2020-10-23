using System.Web;
using System.Web.Optimization;

namespace Samsung
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/samsung").Include(
                        "~/Scripts/SamsungScript/jquery.min.js",
                        "~/Scripts/SamsungScript/libs.js",
                        "~/Scripts/SamsungScript/addons_responsive.js",
                        "~/Scripts/SamsungScript/all_responsive.js",
                        "~/Scripts/SamsungScript/vn_responsive.js",
                        "~/Scripts/SamsungScript/override-vn.js",
                        "~/Scripts/SamsungScript/sqs.js",
                        "~/Scripts/SamsungScript/sqs_s.js",
                        "~/Scripts/SamsungScript/satelliteLib-770518545ab6f770742983802aa7e9610b54692b.js"));

            bundles.Add(new ScriptBundle("~/bundles/myJs").Include(
                      "~/Content/demo3/dist/assets/plugins/global/plugins.bundle1ff3.js",
                      "~/Content/demo3/dist/assets/js/scripts.bundle1ff3.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/samsung").Include(
                      "~/Content/Samsung/google-font.css",
                      "~/Content/SamsungStyle/google-font.css",
                      "~/Content/SamsungStyle/clientlib-base.min.css",
                      "~/Content/SamsungStyle/svg.css",
                      "~/Content/SamsungStyle/style.css",
                      "~/Content/SamsungStyle/style-vn.css",
                      "~/Content/SamsungStyle/ringtone.css",
                      "~/Content/SamsungStyle/samsung.css",
                      "~/Content/SamsungStyle/svg.css",
                      "~/Content/SamsungStyle/assistedservicestorefront.css",
                      "~/Content/SamsungStyle/storeFinder.css",
                      "~/Content/SamsungStyle/customer360.css",
                      "~/Content/SamsungStyle/tokodpopaygatepayment.css",
                      "~/Content/SamsungStyle/tokoptsantanderpayment.css",
                      "~/Content/SamsungStyle/tokolaybuypaymentservices.css"));

            bundles.Add(new StyleBundle("~/Content/myStyle").Include(
                      "~/Content/demo3/dist/assets/plugins/global/plugins.bundle1ff3.css",
                      "~/Content/demo3/dist/assets/plugins/custom/prismjs/prismjs.bundle1ff3.css",
                      "~/Content/demo3/dist/assets/css/style.bundle1ff3.css"));
        }
    }
}
