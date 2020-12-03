import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { AddCatsComponent } from './components/add-cats/add-cats.component';


const routes: Routes = [
  { path: '', redirectTo: 'cats', pathMatch: 'full' },
  { path: 'cats', component: CatListComponent},
  { path: 'cats/:id', component: CatDetailsComponent},
  { path: 'add', component: AddCatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
