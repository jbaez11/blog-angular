import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntryComponent } from './entry/entry.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entry/:urlPost/:postId/:createdAt', component: EntryComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent}


  // Otras rutas si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
