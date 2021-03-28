import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Operation } from '../models/operation';


@Injectable({
  providedIn: 'root'
})
export class OperationService {

	private URL_API = 'http://localhost:3000/operations';

	operations: Operation[] = [];

  balance: number = 0;

  constructor(private http: HttpClient) { }

  getOperations() {
  	return this.http.get<Operation[]>(this.URL_API);
  }

  createOperation(op: Operation) {
  	return this.http.post(this.URL_API, op);
  }

  getOperation(id: number) {
    return this.http.get<Operation[]>(this.URL_API+'/'+id);
  }

  editOperation(op: Operation) {
  	return this.http.put(this.URL_API + '/' + op.id, op);
  }

  deleteOperation(id: number) {
  	return this.http.delete(this.URL_API + '/' + id);
  }

  refreshBalance() {
    let income = 0, outcome = 0;
    for(let op of this.operations) {
      if(op.type == 'income') {
        income += op.amount;
      }
      if(op.type == 'outcome') {
        outcome += op.amount;
      }
    }
    this.balance = (income - outcome);
  }

  getBalance(): number {  
    return this.balance;
  }
}
