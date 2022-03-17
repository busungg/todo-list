async function createCategory(category, model) {
  try {
    const result = await model.create(category);
    return {
      id: result.getDataValue('id'),
    };
  } catch (e) {
    throw e;
  }
}

async function selectCategories(param, model) {
  try {
    const list = await model.findAll(
      {
        where: {
          ...param,
        },
      },
      {
        raw: true,
      },
    );

    return list;
  } catch (e) {
    throw e;
  }
}

async function selectCategoryById(id, model) {
  try {
    const result = await model.findOne({
      where: { id: id },
    });

    console.log(JSON.stringify(result));
    console.log(result.id, result.title);
    return result;
  } catch (e) {
    throw e;
  }
}

async function updateCategory(category, model) {
  try {
    await model.update(category, {
      where: {
        id: category.id,
      },
    });
  } catch (e) {
    throw e;
  }
}

async function deleteCategory(id, model) {
  try {
    console.log(id);
    const result = await selectCategoryById(id, model);
    result.destroy();
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createCategory,
  selectCategories,
  selectCategoryById,
  updateCategory,
  deleteCategory,
};
