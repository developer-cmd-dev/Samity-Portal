import {Router} from "express";

import {addContent, deleteContent, updateContent,searchContent} from "../controller/raseedController.js";
import {homeContent} from "../controller/homeController.js";

const router = Router();



router.get('/', homeContent)
router.post('/add-content',addContent)
router.put("/update/:id",updateContent)
router.delete("/delete/:id",deleteContent)
router.get("/search",searchContent)

export default router;