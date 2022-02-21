const express = require('express')

const router = express.Router()


// -----> FUNCTION BASED ROUTER  (The way that was taught in class)
// module.exports = (controller, auth) => {
//     router.get('/', controller.getMethod.bind(controller));
//     router.post('/', controller.signup.bind(controller));
//     router.post('/login', controller.login.bind(controller));
//     // ONLY AUTH-ED ROUTE
//     router.put('/', auth,controller.putMethod.bind(controller));
//     return router;
//   };


// -----> Class based router

class UserRouter{
  constructor(controller, auth){
    this.controller = controller
    this.auth = auth
  }

  router() {
    router.get('/', this.controller.getMethod.bind(this.controller))
    router.post('/findOne', this.controller.findOne.bind(this.controller))
    router.post('/', this.controller.postMethod.bind(this.controller))
    router.post('/login', this.controller.login.bind(this.controller))
    router.put('/', this.auth, this.controller.putMethod.bind(this.controller))
    return router
  }
}

module.exports = UserRouter