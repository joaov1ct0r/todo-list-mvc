let Joi = require('@hapi/joi');

let validateInsertToDo = data => {
    let schema = Joi.object({
        title: Joi.string().required().min(2).max(50)
    });

    return schema.validate(data);
};

let validateEditToDo = data => {
    let schema = Joi.object({
        title: Joi.string().required().min(2).max(50)
    });

    return schema.validate(data);
};
