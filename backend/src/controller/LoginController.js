const LoginService = require("../service/LoginService");

module.exports = class LoginController {
  static async save(req, res) {
    try {
      await LoginService.save(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async update(req, res) {
    try {
      await LoginService.update(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async delete(req, res) {
    try {
      await LoginService.delete(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async findOne(req, res) {
    try {
      await LoginService.findOne(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async findAll(req, res) {
    try {
      await LoginService.findAll(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
