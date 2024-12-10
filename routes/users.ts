import express, { Request, Response } from 'express';
const router = express.Router();
const data = require('../users.json')

/* GET users listing. */
router.get('/', (req: Request, res: Response) => {
  res.json(data);
   console.log(data)
});

module.exports = router;
