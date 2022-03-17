const express = require('express');
const categoryService = require('../services/categoryService');
const models = require('../models');
const categoryModel = models['Category'];

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const category = req.body;
    console.log(res.body);
    console.log(category);
    const result = await categoryService.createCategory(
      category,
      categoryModel,
    );

    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(
      JSON.stringify({
        status: 201,
        result,
      }),
    );
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const param = req.query;
    const result = await categoryService.selectCategories(param, categoryModel);

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

router.patch('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = req.body;
    category.id = id;

    await categoryService.updateCategory(category, categoryModel);

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

    await categoryService.deleteCategory(id, categoryModel);

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
