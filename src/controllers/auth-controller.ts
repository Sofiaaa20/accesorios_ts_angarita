import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository';
const bcrypt = require("bcryptjs");
import { Request, Response } from "express";
import { generateToken } from '../helpers/jsonWebToken';


let auth = async (req: Request, res: Response) => {
      try {
        const {email, password} = req.body;
        const result:any = await UserRepository.login(req.body);
        const rows = result[0];
      
        
         if (rows.length > 0){
           const isPasswordValid = await bcrypt.compare(password, rows[0].password);
           console.log(isPasswordValid);
           
           if (!isPasswordValid){
            return res.status(201).json({ 
               status: 'incorrect username or password',password: rows[0].password

             });
           }
         }
         const token = generateToken(email);
        return res.status(200).json({ 
          status: 'Correct password',
          token

        });
      } catch (error) {
        console.log(error);
      }

}

export default auth;