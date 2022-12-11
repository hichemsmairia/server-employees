const express = require("express");
const EmployeeRouter = express.Router();
const Employee = require("../models/employeeModel");

// route pour creer un employé
//localhost:5000/employees/add_employee (methode POST)
EmployeeRouter.post("/add_employee", (req, res) => {
  let new_employee = new Employee(req.body);
  new_employee
    .save()
    .then(() => res.status(200).json("employé creé avec succés!"))
    .catch((error) => {
      res.status(400).json({ error });
    });
});
// route pour afficher la liste de TOUS les employés
//localhost:5000/employees/get__all_employees (methode GET)
EmployeeRouter.get("/get_all_employees", (req, res) => {
  Employee.find({}).then((result) => res.status(200).json(result));
});
// route pour afficher un employé SPECEFIQUE
//localhost:5000/employees/get_employee/:id (methode GET)
EmployeeRouter.get("/get_employee/:id", (req, res) => {
  Employee.find({ _id: req.params.id })
    .then((result) => res.status(200).json(result))
    .catch(() => res.status(404).json("il n'ya pas un employé avec ce id"));
});

// route pour supprimé un employé SPECEFIQUE
//localhost:5000/employees/delete_employee/:id (methode DELETE)
EmployeeRouter.delete("/delete_employee/:id", (req, res) => {
  Employee.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json("supprimé avec succés"))
    .catch(() => res.status(404).json("il n'ya pas un employé avec ce id"));
});

// route pour mise a jour d'un employé SPECEFIQUE
//localhost:5000/employees/update_employee/:id (methode PUT)
EmployeeRouter.put("/update_employee/:id", (req, res) => {
  Employee.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() => res.status(200).json("mis a jour avec succés"))
    .catch(() => res.status(404).json("il n'ya pas un employé avec ce id"));
});

module.exports = EmployeeRouter;
