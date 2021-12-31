import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Erick Andrés Godínez Aguilera',
      controlnumber: '16400916',
      active: true
    });
    this.students.push({
      name: 'Lliana Elizabeth González Guzmán',
      controlnumber: '16400919',
      active: true
    });
    this.students.push({
      name: 'Eduardo Hernández García ',
      controlnumber: '16400928',
      active: false
    });
  }

  getStudents(): Student[]{
    return this.students;
  }

  changeStatus(position: number): void{
    this.students[position].active = !this.students[position].active;
  }

  deleteStudent(position: number): void{
    this.students.splice(position, 1);
  }

  newStudent(student): void{
    this.students.push(student);
  }

}
