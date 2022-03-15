const express = require('express');
const todoService = require('../services/todoService');
const models = require('../models');
const todoModel = models['Todo'];

const router = express.Router();

router.post('/', (req, res, next) => {
  try {
    console.log(req.body);

    const todo = req.body;
    const result = todoService.createTodo(todo, todoModel);

    const resResult = {
      status: 201,
      result: `${result.id}, title: ${result.title} 생성 되었습니다.`,
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(resResult);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
