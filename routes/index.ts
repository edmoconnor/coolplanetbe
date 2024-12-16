import express, { Request, Response } from 'express';
const router = express.Router();
const data = require('../users.json')

/* GET home page. */
router.get('/', (req: Request, res: Response) => {
   res.send('coolplanet');
   
});

module.exports = router;
