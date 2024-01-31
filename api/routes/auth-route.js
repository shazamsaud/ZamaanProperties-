import  express  from "express";
import { google, signin, signOut,signup } from "../controller/auth-controller.js";



const authRouter = express.Router();

authRouter.post('/signup',signup)
authRouter.post('/google',google)
authRouter.post("/signin", signin);
authRouter.get("/signout", signOut);


export default authRouter;