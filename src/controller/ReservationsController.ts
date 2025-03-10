import { Contorller } from "../abstract/Contorller";
import { Request, Response } from "express";
import { logger } from "../middlewares/log";
import { Service } from "../abstract/Service";
import { PageService } from "../Service/PageService";
import { DB } from "../app";
require('dotenv').config()

export class ReservationsController extends Contorller {
    protected service: Service;

    constructor() {
        super();
        this.service = new PageService();
    }

    public async test(req: Request, res: Response) {
        try {
            await DB.connection?.query("USE lab_b310;");
            const result = await DB.connection?.query("SELECT * FROM Reservations;");
            res.json(result);
        } catch (error) {
            res.status(500).send("Database query failed");
        }
    }
    
    }
