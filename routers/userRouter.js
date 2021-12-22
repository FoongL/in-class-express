const express = require('express')

const router = express.Router()

module.exports = (controller, auth) => {
    router.get('/', controller.getMethod.bind(controller));
    router.post('/', controller.signup.bind(controller));
    router.post('/login', controller.login.bind(controller));
    // ONLY AUTH-ED ROUTE
    router.put('/', auth,controller.putMethod.bind(controller));
    return router;
  };