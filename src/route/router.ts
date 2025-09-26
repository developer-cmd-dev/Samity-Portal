import {Router} from "express";

import {addContent, deleteContent, updateContent} from "../controller/raseedController.js";
import {homeContent} from "../controller/homeController.js";

const router = Router();



router.get('/', homeContent)

router.post('/add-content',addContent)
router.put("/update/:id",updateContent)
router.delete("/delete/:id",deleteContent)

export default router;