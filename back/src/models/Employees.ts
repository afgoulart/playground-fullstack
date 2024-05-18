import { Document, model, Schema } from "mongoose";

/**
 *
 * @param name:string
 * @param department:string
 * @param role:string
 */

export type TEmployee = {
  name: string;
  department: string;
  role: string;
  created_at?: Date;
  modified_at?: Date;
};

/**
 *
 * TEmployee
 * @param name:string
 * @param department:string
 * @param role:string
 */

export interface IEmployee extends TEmployee, Document { }

const EmployeeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,

  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
});

/**
 *
 * TEmployee
 * @param name:string
 * @param department:string
 * @param role:string
 * @param created_at:Date
 * @param modified_at:Date
 */

const Employee = model<IEmployee>("Employee", EmployeeSchema);
export default Employee;
