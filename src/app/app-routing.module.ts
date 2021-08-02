import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'faq', component: FaqComponent},
  {path: '*', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }