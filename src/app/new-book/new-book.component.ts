import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-book',
  imports: [FormsModule, MatFormFieldModule,MatInputModule, MatButtonModule,CommonModule],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.css'
})

export class NewBookComponent {
  onCancel(form: NgForm): void{
    if(confirm('Are you sure you want to cancel? All changes will be lost.')){
      form.resetForm();
    }
  }
  onSave(form: NgForm): void {
    if (form.valid) {
      const formData = form.value;
      console.log('Book data:', formData);
      alert('Book added successfully!');
      form.resetForm();
    } else {
      alert('Please fill out all required fields!');
    }
  }





}
