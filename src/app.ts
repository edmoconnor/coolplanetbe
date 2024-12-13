import createError from 'http-errors';
// import morgan from 'morgan';
import express, { Request, Response, NextFunction} from 'express';
import path from 'path';
// import cookieParser from 'cookie-parser';
import logger from 'jet-logger';
import cors from "cors";


const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');

const app = express();
const port = process.env.PORT || 3000;


// view engine setup
const viewsDir = path.join(__dirname, 'views');
app.set('view engine', 'jade');
app.use(cors());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../../react/coolplanetfe/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users/:id', usersRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

//catch 404 and forward to error handler
// app.use(function(req: Request, res: Response) => {
//   next(createError(404));
// });

// // error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//   res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
