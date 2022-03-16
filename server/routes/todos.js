const express = require('express');
const todoService = require('../services/todoService');
const models = require('../models');
const todoModel = models['Todo'];

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const param = req.query;
    const result = await todoService.selectTodo(param, todoModel);

    const resResult = {
      status: 200,
      result,
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(resResult));
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const todo = req.body;
    const result = await todoService.createTodo(todo, todoModel);
    const resResult = {
      status: 201,
      result: `${result.id} created success`,
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(JSON.stringify(resResult));
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const todo = req.body;
    todo.id = id;

    await todoService.updateTodo(todo, todoModel);

    const resResult = {
      status: 200,
      result: `update success`,
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(resResult));
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;

    await todoService.deleteTodo(id, todoModel);

    const resResult = {
      status: 200,
      result: `delete success`,
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(resResult));
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
