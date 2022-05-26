const userService = require("../../../services/userService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {JWT_SECRET_KEY = "Rahasia"} = process.env;

function createToken(user) {
  const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
  };

  return jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: "1h",
  });
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET || "Rahasia");
}

const login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  let user = await userService.findByEmail(email);
  if (!user) {
    return res.status(404).send({
      message: "Email salah",
    });
  }

  const status = await bcrypt.compare(password, user.encryptedPassword);
  if (!status) {
    return res.status(404).send({
      message: "Password salah",
    });
  }

  user = JSON.parse(JSON.stringify(user))
  delete user.encryptedPassword;

  const token = createToken(user);
  res.json({ user, token });
};

const whoAmI = async (req, res, next) => {
  try {
      const bearerToken = req.headers.authorization;
      const token = bearerToken.split("Bearer ")[1]; 
      const tokenPayload = verifyToken(token);

      const result = JSON.parse(JSON.stringify(await userService.findByEmail(tokenPayload.email)));
      delete result.encryptedPassword;

      // res.status(200).json({
      //     message: "User Found",
      //     data: result,
      // });
      res.json(result);
  } catch (error) {
      if (error.message.includes("jwt expired")) {
          res.status(401).json({message: "Token expired"});
          return;
      }

      res.status(401).json({
          message: "Unauthorized",
      });
  }
};

const register = async (req, res) => {
  const existedUser = await userService.findByEmail(req.body.email);
  if (existedUser) {
    return res.status(400).send({
      message: "Email telah digunakan",
    });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = {
    name: req.body.name,
    email: req.body.email,
    encryptedPassword: hashedPassword,
    registeredVia: "loginForm",
    type_user: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    await userService.create(user);
    delete user.encryptedPassword;

    res.status(201).json({
      message: "User Created",
      data: user,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { login, register, whoAmI };