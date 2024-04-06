import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntryComponent } from './entry/entry.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entry', component: EntryComponent}
  // Otras rutas si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
