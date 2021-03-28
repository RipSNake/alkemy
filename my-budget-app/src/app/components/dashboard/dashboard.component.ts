import { Component, OnInit } from '@angular/core';
import { OperationService } from '../../services/operation.service';
import { Operation } from '../../models/operation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  balance: number = 0;

	lastOperations: Operation[] = [];

  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
  	this.getLastOperations();
  }

  getLastOperations() {
  	this.operationService.getOperations().subscribe(
  		operations => {
        this.operationService.operations = operations;
        this.lastOperations = operations.slice(-4);
        this.operationService.refreshBalance();
        this.getBalance();
      }
  		);
  }

  getBalance() {
    this.operationService.refreshBalance();
    this.balance = parseFloat(this.operationService.getBalance().toFixed(2));
  }
}
