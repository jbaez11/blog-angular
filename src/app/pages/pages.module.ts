import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntryComponent } from '../entry/entry.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    EntryComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PagesModule { }
