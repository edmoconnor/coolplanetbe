import express, { Request, Response, NextFunction} from 'express';
import path from 'path';
import cors from "cors";

const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users/:id', usersRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.render('error');
});

module.exports = app;
