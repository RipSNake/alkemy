import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OperationComponent } from './components/operation/operation.component';
import { OperationFormComponent } from './components/operation-form/operation-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [

	{path: '', redirectTo: 'dashboard', pathMatch: 'full'}, // First View
	{path: 'dashboard', component: DashboardComponent}, 
	{path: 'operations', component: OperationComponent}, // View all Operations
	{path: 'operations/new', component: OperationFormComponent}, // Create Operation
	{path: 'operations/:id', component: OperationFormComponent}, // View/Edit operation
	{path: '**', component: PageNotFoundComponent}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
