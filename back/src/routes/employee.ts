import { Router, Response } from "express";
import { body, check, validationResult } from "express-validator";
import HttpStatusCodes from "http-status-codes";

import auth from "../../middleware/auth";
import Employee, { TEmployee, IEmployee } from "../models/Employees";
import Request from "../types/Request";
import { checkAllProps, cleanNullProps } from "../utils";

const router: Router = Router();

// @route   GET /
// @desc    Get all employees
// @access  Private
router.get("/", auth, async (req: Request, res: Response) => {
  const { page, limit } = req.query

  try {
    const employee: IEmployee = await Employee.find({}) as any;
    if (!employee) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({
        errors: [
          {
            msg: "There is no employee for this user",
          },
        ],
      });
    }

    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

// @route   POST /employee
// @desc    Create or update user's employee
// @access  Private
router.post(
  "/",
  [
    auth,
    check("name", "Name is required").not().isEmpty(),
    check("department", "Department is required").not().isEmpty(),
    check("role", "Role is required").not().isEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() });
    }

    const { name, department, role } = req.body;

    // Build employee object based on TEmployee
    const employeeFields: TEmployee = {
      name,
      department,
      role,
    };

    try {
      console.log('/post create|update')
      let employee: IEmployee = await Employee.findOne(employeeFields);
      if (!employee) {
        // Create
        employee = new Employee(employeeFields);
        await employee.save();
        return res.status(HttpStatusCodes.CREATED).json(employee);
      }

      res.status(HttpStatusCodes.NOT_MODIFIED).json(employee);
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
);

router.put(
  "/:employeeId",
  auth,
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() });
    }

    // Build employee object based on TEmployee
    const employeeFields: TEmployee = cleanNullProps(req.body);
    if (Object.keys(employeeFields).length === 0) {
      return res.status(HttpStatusCodes.NOT_MODIFIED).end(JSON.stringify({
        message: 'Nothing to do.',
        bodyRequest: req.body
      }))
    }

    try {
      let employee: IEmployee = await Employee.findById(req.params.employeeId);
      if (!employee) {
        return res.status(HttpStatusCodes.NOT_FOUND).json({
          message: `Employee id "${req.params.employeeId}" not found.`,
          bodyRequest: {
            params: req.params,
            ...req.body
          }
        })
      }
      if (checkAllProps({
        name: employee.name,
        department: employee.department,
        role: employee.role
      }, employeeFields)) {
        return res.status(HttpStatusCodes.NOT_MODIFIED).end()
      }

      // Update
      employee.name = employeeFields.name || employee.name;
      employee.department = employeeFields.department || employee.department
      employee.role = employeeFields.role || employee.role
      employee.modified_at = new Date();
      await employee.save();
      res.json(employee)
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
);

// @route   GET /:employeeId
// @desc    Get employee by employeeId
// @access  Public
router.get("/:employeeId", async (req: Request, res: Response) => {
  try {
    const employee: IEmployee = await Employee.findOne({
      _id: req.params.employeeId,
    })

    if (!employee)
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: "Employee not found" });

    res.json(employee);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: "Employee not found" });
    }
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

// @route   DELETE /employee
// @desc    Delete employee and user
// @access  Private
router.delete("/:employeeId", auth, async (req: Request, res: Response) => {
  try {
    // Remove employee
    await Employee.findByIdAndDelete({ _id: req.params.employeeId });


    res.json({ msg: "Employee removed" });
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;
