import express from "express";
import registerController from '../controllers/register-controller';
import validatorRegister = require ('../middleware/validator-register')
const router = express.Router();


router.post('/register', validatorRegister.validatorParams, validatorRegister.validator, registerController);


export default router;