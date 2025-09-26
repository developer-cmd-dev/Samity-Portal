import {Router} from "express";

import type {Request,Response} from "express";
import {RaseedModel} from "../model/raseed.model.js";
import {addContent} from "../controller/raseedController.js";
import {homeContent} from "../controller/homeController.js";

const router = Router();



router.get('/', homeContent)

router.post('/add-content',addContent)

export default router;