const router = require("express").Router();
const dataService = require("../controllers/main");
const conn = dataService(process.env.MONGODB_CONNECTING_STRING);

conn.then((data) => {
  //to get all employees
  router.get("/", (req, res) => {
    data
      .getAllEmployee()
      .then((data) => {
        res.json({
          employees: [...data],
        });
      })
      .catch((err) => {
        res.json({ message: `Error: ${err}` });
      });
  });

  //to get employee by employee's id
  router.get("/:id", (req, res) => {
    data
      .getEmployeeById(req.params.id)
      .then((data) => {
        res.json({
          Employees: data,
        });
      })
      .catch((err) => {
        res.json({ message: `Error: ${err}` });
      });
  });

  // to get employee's customers:
  router.get("/:id/cus", (req, res) => {
    data
      .getCustomer(req.params.id)
      .then((data) => {
        res.json({
          "Employee's customers": data,
        });
      })
      .catch((err) => {
        res.json({ message: `Error: ${err}` });
      });
  });

  //to add new employee
  router.post("/", (req, res) => {
    data
      .addNewEmployee(req.body)
      .then((msg) => {
        res.json({ message: msg });
      })
      .catch((err) => {
        res.json({ message: `Error: ${err}` });
      });
  });

  //to update employee by employee's id
  router.put("/:id", (req, res) => {
    data
      .updateEmployeeById(req.body, req.params.id)
      .then((msg) => {
        res.json({ message: msg });
      })
      .catch((err) => {
        res.json({ message: `Error: ${err}` });
      });
  });

  //to delete employee by unique id
  router.delete("/:id", (req, res) => {
    data
      .deleteEmployeeById(req.params.id)
      .then((msg) => {
        res.json({ message: msg });
      })
      .catch((err) => {
        res.json({ message: `Error: ${err}` });
      });
  });
});

module.exports = router;
