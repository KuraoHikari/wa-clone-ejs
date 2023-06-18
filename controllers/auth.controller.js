const {
 PrismaClient,
 Prisma,
} = require("@prisma/client");
const prisma = new PrismaClient();
const {
 generateHash,
} = require("../utils/bcrypt");
const passport = require("../utils/passport");

class AuthController {
 static loginPage(req, res) {
  if (req.isAuthenticated())
   return res.redirect("/message");

  res.render("pages/auth/login");
 }
 static registerPage(req, res) {
  res.render("pages/auth/register");
 }

 static async register(req, res) {
  try {
   const { email, password } = req.body;

   await prisma.user.create({
    data: {
     email: email,
     password: await generateHash(
      password
     ),
    },
   });

   res.redirect("/login");
  } catch (error) {
   if (
    err instanceof
    Prisma.PrismaClientKnownRequestError
   ) {
    if (err.code === "P2002") {
     req.flash(
      "error",
      "A category with this name is already in use"
     );
    }
   }
   res.reder("/register");
  }
 }
 static login(req, res) {
  passport.authenticate("local", {
   successRedirect: "/message",
   failureRedirect: "/login",
   failureFlash: true,
  })(req, res, next);
 }
 static async logout(req, res, next) {
  req.logout((err) => {
   if (err) {
    return next(err);
   }

   res.redirect("/login");
  });
 }
}
module.exports = AuthController;
