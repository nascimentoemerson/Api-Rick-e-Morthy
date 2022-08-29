export class UserRoutes {
  constructor(controller, router) {
    this.userControler = controller;
    this.router = router;
  }

  route() {
    this.router.get("/", (req, res) => this.userControler.find(req, res));
    this.router.post("/create", (req, res) =>
    this.userControler.create(req, res)
    );
    this.router.patch("/update/:id", (req, res) =>
      this.userControler.update(req, res)
    );
    this.router.delete("/delete/:id", (req, res) =>
      this.userControler.delete(req, res)
    );
    this.router.get("/:id", (req, res) =>
      this.userControler.findById(req, res)
    );
    return this.router;
  }
}
