import { Component, OnInit } from '@angular/core';
import { OperationService } from '../../services/operation.service';
import { Operation } from '../../models/operation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor(public operationService: OperationService) { }

  ngOnInit(): void {
  	this.getOperations();
  }
  // GET all the Operations
  getOperations(): void {
  	this.operationService.getOperations().subscribe(
  		res => {
  			this.operationService.operations = res;
  		},
  		err => console.log(err)
  		)
  }
  // Deletes an operation using it's id
  deleteOperation(id: number): void {
    if(confirm('Are you sure that you want to delete this operation?')){
  	  this.operationService.deleteOperation(id).subscribe(
        res => {
          console.log(res);
          this.getOperations();
        },
        err => console.log(err)
      );
    }    
  };
}
