const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register process
const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res.json({
          message: "Usuario registrado!",
        });
      })
      .catch((error) => {
        res.json({
          message: "Error al registrar",
        });
      });
  });
};

//login process

const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({ $or: [{ email: username }, { phone: username }] }).then(
    (user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign({ name: user.name }, "secretValue", {
              expiresIn: "1h",
            });
            res.json({
              message: "Login Correcto",
              token,
            });
          } else {
            res.json({
              message: "Clave incorrecta",
            });
          }
        });
      } else {
        res.json({
          message: "Usuario no encontrado",
        });
      }
    }
  );
};

const deletedd = (req, res) => {
  var email = req.body.email;
  try {
    const deleted = User.deleteOne({
      email: `${email}`,
    });
    if (deleted.deleteddCount > 0) {
      res.json({ message: "Usuario borrado " });
      res.status(200);
    } else {
      res.json({ message: "Usuario no encontrado" });
      res.status(404);
    }
  } catch (error) {
    res.status(400);
    res.json({ error: error });
  }
};

module.exports = {
  register,
  login,
  deletedd,
};
