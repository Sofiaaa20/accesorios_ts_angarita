// routes/auth.ts
import { Request, Response } from "express";
import authMiddleware  from "../middleware/authMiddleware";
import { generateToken } from "../helpers/jsonWebToken";
import Auth from "../Dto/authDto";

const auth = async (req: Request, res: Response) => {
    authMiddleware(req, res)
};

export default auth;