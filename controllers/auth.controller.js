class AuthController {
 static loginPage(req, res) {
  res.render("pages/auth/login");
 }
 static registerPage(req, res) {
  res.render("pages/auth/register");
 }
}
module.exports = AuthController;
