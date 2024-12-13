import express, { Request, Response } from 'express';
const router = express.Router();
const data = require('../users.json')

/* GET users listing. */
router.get('/', (req: Request, res: Response) => {
  console.log('id')
  res.json(data);
});

router.get('/:id', (req: Request, res: Response) => {
  console.log('dfsvserdbvsredf')
  const id  = req.params.id;
  console.log(id)
  var user;
  for(var i = 0; i<data.length; i++){
    if(data[i].id == id){
      user = data[i];
      console.log('data' + JSON.stringify(user.first_name))
    }
  }
  
  res.json(user);
});

module.exports = router;
