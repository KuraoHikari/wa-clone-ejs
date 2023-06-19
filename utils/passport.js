const passport = require("passport");
const LocalStrategy =
 require("passport-local").Strategy;
const {
 PrismaClient,
} = require("@prisma/client");
const {
 compareHash,
} = require("./bcrypt");

const prisma = new PrismaClient();

async function authenticate(
 username,
 password,
 done
) {
 try {
  const user =
   await prisma.user.findUnique({
    where: {
     email: username,
    },
   });

  console.log(user);

  const isPasswordValid =
   await compareHash(
    password,
    user.password
   );

  if (!isPasswordValid)
   throw new Error(
    "just create a new fuking account"
   );

  /*
      done adalah callback, parameter pertamanya adalah error,
      jika tidak ada error, maka kita beri null saja.
      Parameter keduanya adalah data yang nantinya dapat
      kita akses di dalam req.user
    */
  return done(null, user);
 } catch (err) {
  /* Parameter ketiga akan dilempar ke dalam flash */
  return done(null, false, {
   message: err.message,
  });
 }
}

passport.use(
 new LocalStrategy(
  {
   usernameField: "email",
   passwordField: "password",
  },
  authenticate
 )
);

/* Serialize dan Deserialize
    Cara untuk membuat sesi dan menghapus sesi
 */
passport.serializeUser((user, done) => {
 console.group(user);
 return done(null, user.id);
});
passport.deserializeUser(
 async (id, done) =>
  done(
   null,
   await prisma.user.findUnique({
    where: { id },
   })
  )
);

// Kita exports karena akan kita gunakan sebagai middleware
module.exports = passport;
