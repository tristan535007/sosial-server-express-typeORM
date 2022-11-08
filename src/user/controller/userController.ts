class UserController {
  async reg(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    res.json({ message: "All is ok!" });
  }
}

export default new UserController();
