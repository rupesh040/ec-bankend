import express from "express"
import { addProduct, listProduct , removeProduct} from "../controller/productController.js"
// import multer from "multer"

const productRouter = express.Router();

// image storage engine

// const storage = multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//         return cb(null,`${Date.now()}${file.originalname}`)
//     }
// })

// const upload = multer({storage:storage})

productRouter.post("/add",addProduct)
productRouter.get("/list",listProduct)
productRouter.post("/remove",removeProduct)



export default productRouter;

// with image upload
// productRouter.post("/add",upload.single("image"),addProduct)
