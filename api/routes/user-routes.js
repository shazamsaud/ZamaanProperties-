import  express  from "express";
import { deleteUser, updateUser,getUserListings, getUser } from "../controller/user-controller.js";
import { verifyToken } from "../utils/verifyUser.js";



const userRouter = express.Router();


userRouter.post('/update/:id',verifyToken,updateUser);
userRouter.delete('/delete/:id',verifyToken,deleteUser);
userRouter.get('/listings/:id',verifyToken,getUserListings);
userRouter.get('/:id', verifyToken, getUser)

export default userRouter;