const { Schema, model } = require("mongoose");

const Joi = require("joi");

const handleMongooseError = require("../helpers/handleMongooseError");

const contactsSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, collection: "contacts_modified" }
);

contactsSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .error((errors) => new Error("missing field favorite")),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

const ContactMongoose = model("contacts_modified", contactsSchema);

module.exports = {
  ContactMongoose,
  schemas,
};
