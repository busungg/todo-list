const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1',
  database: 'todolist',
  dialect: 'mysql',
});

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return 'OK';
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return error;
  }
}

authenticate();

class Todo extends Model {}
Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: 'Todo', paranoid: true },
);

async function sync() {
  await sequelize.sync({ alter: true });
}

sync();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
