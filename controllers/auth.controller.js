class AuthController {
 static loginPage(req, res) {
  res.render("pages/auth/login");
 }
 static registerPage(req, res) {
  res.render("pages/auth/register");
 }

 static register(req, res) {
  res.redirect("/login");
 }
 static login(req, res) {
  res.render("pages/auth/register");
 }
}
module.exports = AuthController;
