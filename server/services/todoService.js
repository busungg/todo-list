const createTodo = async (todo, model) => {
  try {
    const result = await model.create(todo);
    return result;
  } catch (e) {
    throw e;
  }
};

const selectTodo = async (param, model) => {
  try {
    const list = await model.findAll({
      where: {
        ...param,
      },
    });
  } catch (e) {
    throw e;
  }
};

const selectOneTodo = async (id, model) => {
  try {
    const todo = await model.findOne({ where: { id: id } });
    return todo;
  } catch (e) {
    throw e;
  }
};

const updateTodo = async (todo, model) => {
  try {
    const result = await model.update(
      { ...todo },
      {
        where: {
          id: todo.id,
        },
      },
    );

    return result;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  createTodo,
  selectTodo,
  selectOneTodo,
  updateTodo,
};
