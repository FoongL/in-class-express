const express = require('express')

const router = express.Router()


// ----> Functional Router (what was taught in class)
// module.exports = (controller) => {
//     router.get('/', controller.getMethod.bind(controller));
//     router.post('/', controller.postMethod.bind(controller));
//     router.put('/', controller.putMethod.bind(controller));
//     return router;
//   };

// --> CLASS BASED ROUTER
class TaskRouter{
  constructor(controller){
    this.controller = controller
  }

  router() {
    router.get('/', this.controller.getMethod.bind(this.controller))
    router.post('/', this.controller.postMethod.bind(this.controller))
    router.put('/', this.controller.putMethod.bind(this.controller))
    return router
  }
}

module.exports = TaskRouter