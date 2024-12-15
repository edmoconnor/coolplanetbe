import express, { Request, Response } from 'express';
const router = express.Router();
const data = require('../users.json')

/* GET users listing. */
router.get('/', (req: Request, res: Response) => {
  res.json(data);
});

router.get('/:id', (req: Request, res: Response) => {
  const id  = req.params.id;
  let userDetails: any = {};
  for(var i = 0; i<data.length; i++){
    if(data[i].id == id){
      userDetails = data[i];
    }
  }
  res.json(userDetails);
});

module.exports = router;
