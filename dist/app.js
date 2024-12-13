"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import morgan from 'morgan';
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// view engine setup
const viewsDir = path_1.default.join(__dirname, 'views');
app.set('view engine', 'jade');
app.use((0, cors_1.default)());
// app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//catch 404 and forward to error handler
// app.use(function(req: Request, res: Response) => {
//   next(createError(404));
// });
// // error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    //   res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
