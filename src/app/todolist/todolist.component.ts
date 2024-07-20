import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{
 taskArray=[{
  taskname:'',
  iscompleted:false
 }];
  constructor(){}
  ngOnInit(){
      
  }
  onSubmit(form:NgForm){
    console.log(form);
    this.taskArray.push({
      taskname:form.controls['task'].value,
      iscompleted:false
    })
    form.reset();
  }
  onDelete(index:number){
    console.log(index)
    this.taskArray.splice(index,1)
  }

  oncheck(index:number){
    console.log(this.taskArray);
    this.taskArray[index].iscompleted=!this.taskArray[index].iscompleted
  }
}
