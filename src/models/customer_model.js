const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    // Datos personales
    firstName: {
      type: String,
      required: [true, "Por favor proporciona el nombre."],
      minLength: [3, "Por favor proporciona un nombre real."],
    },
    lastName: {
      type: String,
      required: [true, "Por favor proporciona el apellido."],
      minLength: [3, "Por favor proporciona un apellido real."],
    },
    dni: {
      type: String,
      required: [true, "Por favor proporciona su DNI."],
      minLength: [7, "Por favor proporciona un DNI real."],
    },

    // Contacto
    phone: {
      type: String,
      required: [true, "Por favor proporciona su número de teléfono."],
      minLength: [10, "Por favor proporciona un número de teléfono real."],
    },
    email: {
      type: String,
      required: [true, "Por favor proporciona un correo electrónico."],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Por favor proporciona un correo electrónico válido.",
      ],
      unique: true,
    },

    // Domicilio
    street: {
      type: String,
      required: [true, "Please provide the street."],
      minLength: [3, "Please provide a valid street."],
    },
    number: {
      type: String,
      required: [true, "Please provide the number."],
    },
    floor: {
      type: String,
      required: false, // opcional
    },
    apartment: {
      type: String,
      required: false, // opcional
    },

    // Credenciales e imagen
    password: {
      type: String,
      required: [true, "Por favor proporcione su contraseña"],
      minLength: [3, "Por favor proporciona una contraseña más segura"],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);
module.exports = { Customer, customerSchema };

