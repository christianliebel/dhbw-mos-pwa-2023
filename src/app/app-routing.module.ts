import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "todos", component: TodosComponent },
  { path: "", pathMatch: "full", redirectTo: "todos" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
