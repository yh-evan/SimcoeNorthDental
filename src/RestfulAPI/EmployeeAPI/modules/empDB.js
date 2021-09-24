const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  emp_id: String,
  empFN: String,
  empLN: String,
  emp_email: String,
  emp_cell: String,
  emp_position: String,
});
let customerSchema = new Schema({
  customer_id: String,
  first_name: String,
  last_name: String,
  email_address: String,
  cell_phone: String,
});

module.exports = employeeSchema;
module.exports = customerSchema;
