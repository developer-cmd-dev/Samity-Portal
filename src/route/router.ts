import {Router} from "express";

import type {Request,Response} from "express";
import {RaseedModel} from "../model/raseed.model.js";
import {addContent, updateContent} from "../controller/raseedController.js";
import {homeContent} from "../controller/homeController.js";

const router = Router();



router.get('/', homeContent)

router.post('/add-content',addContent)

router.put("/update/:id",updateContent)

export default router;