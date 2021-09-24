const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const employeeSchema = require("../modules/empDB");
const customerSchema = require("../modules/empDB");

module.exports = function (connectionString) {
  let Employee;
  let Customer;

  const data = {
    connection: function () {
      return new Promise(function (resolve, reject) {
        let db = mongoose.createConnection(connectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        db.on("error", (err) => {
          reject(err);
        });
        db.once("open", () => {
          Employee = db.model("employees", employeeSchema);
          Customer = db.model("customer", customerSchema);
          resolve();
        });
      });
    },
    // to fetch all employee information
    getAllEmployee: function () {
      return new Promise((resolve, reject) => {
        Employee.find({})
          .sort()
          .exec()
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // to get employee by employee's id
    getEmployeeById: function (id) {
      return new Promise((resolve, reject) => {
        Employee.findOne({ _id: id })
          .exec()
          .then((employee) => {
            resolve(employee);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    //find customer by employee id
    getCustomer: function (id) {
      return new Promise((resolve, reject) => {
        Customer.find({ emp_id: id })
          .exec()
          .then((customer) => {
            resolve(customer);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // to add new employee
    addNewEmployee: function (data) {
      return new Promise((resolve, reject) => {
        let newEmployee = new Employee(data);

        newEmployee.save((err) => {
          if (err) reject(err);
          else resolve(`Employee ${newEmployee._id} added`);
        });
      });
    },
    // to update employee information
    updateEmployeeById: function (data, id) {
      return new Promise((resolve, reject) => {
        Employee.updateOne(
          { _id: id },
          {
            $set: data,
          }
        )
          .exec()
          .then(() => {
            resolve(`Employee ${id} updated`);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // to delete employee
    deleteEmployeeById: function (id) {
      return new Promise((resolve, reject) => {
        Employee.deleteOne({ _id: id })
          .exec()
          .then(() => {
            resolve(`Employee ${id} deleted`);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  };

  return data.connection().then(() => data);
};
