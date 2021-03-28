import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Operation } from '../../models/operation';
import { OperationService } from '../../services/operation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css']
})
export class OperationFormComponent implements OnInit {

  private isEditable = false;

	@Input() operation: Operation = {
    id: 0,
		concept: '',
		amount: 0,
		type: ''
	}

  constructor(
  	private operationService: OperationService,
  	private location: Location,
  	private route: ActivatedRoute
  ) { 
  	if(this.route.snapshot.queryParamMap.get('edit')){
      this.isEditable = true;
    }; 
  }

  ngOnInit(): void {
    this.getOperation();
  }

  getOperation(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id === null) {
      console.log('Operation does not exists');
    } else {
      this.operationService.getOperation(parseInt(id)).subscribe(
        operation => this.operation = operation[0]
      );  
    }  
  }

	resetForm(form: NgForm) {
	  form.reset();
	}

	getBack(): void {
    this.location.back();
  }

  createOperation(form: NgForm) {
    if(form.value.id != 0) {
      this.operationService.editOperation(form.value).subscribe(
        res => {console.log(res); 
        this.getBack();}
      );
    } else {
      this.operationService.createOperation(form.value).subscribe(
        res => {
          this.resetForm(form);
          this.getBack();
        },
        err => console.log(err)
      );  
    }
  }

  getEditable() {
    return this.isEditable;
  }
}
