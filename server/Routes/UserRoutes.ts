import express from 'express';
import { Router } from 'express';

// import user from './Controllers/UserController';
const user = require('../Controllers/UserController');
const router: Router = express.Router();
console.log("we are in userroutes");
router.post('/register', user.registerUser);
router.post('/login', user.loginUser);

export default router;
// const express = require('express');
// const { Router } = require('express');

// const user = require('./Controllers/UserController');

// const router = Router();

// router.post('/register', user.registerUser);
// router.post('/login', user.loginUser);

// module.exports = router;
