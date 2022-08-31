export class swaggerRoute {
    constructor(controller, router) {
      this.controller = controller;
      this.router = router;
    }
    
  
    route() {
      this.router.get("/api-docs", (req, res) =>
        this.controller.api(req, res)
      );
      return this.router;
    }
  }