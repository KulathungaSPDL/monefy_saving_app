import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './components/insert-data/form-page/form-page.component';
import { IncomeWapperComponent } from './components/income/income-wapper/income-wapper.component';
import { ExpensiveWapperComponent } from './components/insert-data/expensive-wapper/expensive-wapper.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'form-page', component: FormPageComponent},
  {path: 'income-body', component: IncomeWapperComponent},
  {path: 'expensive', component: ExpensiveWapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
