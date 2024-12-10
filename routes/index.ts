import express, { Request, Response } from 'express';
const router = express.Router();
// import data from '../users.json'
const data = require('../users.json')

/* GET home page. */
router.get('/', (req: Request, res: Response) => {
   res.json(data);
   console.log(data)
});

module.exports = router;
