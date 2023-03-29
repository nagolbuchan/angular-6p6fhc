import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-restaurant-profile-form',
//   templateUrl: './restaurant-profile-form.component.html',
//   styleUrls: ['./restaurant-profile-form.component.css']
// })
// export class RestaurantProfileFormComponent {
//   profileForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) {
//     this.profileForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       description: ['', Validators.required],
//       menu: this.formBuilder.array([
//         this.formBuilder.group({
//           item: ['', Validators.required],
//           price: ['', Validators.required]
//         })
//       ]),
//       photos: this.formBuilder.array([
//         this.formBuilder.group({
//           url: ['', Validators.required],
//           caption: ['']
//         })
//       ])
//     });
//   }

//   onSubmit() {
//     console.log(this.profileForm.value);
//   }

//   addMenuItem() {
//     this.menu.push(this.formBuilder.group({
//       item: ['', Validators.required],
//       price: ['', Validators.required]
//     }));
//   }

//   addPhoto() {
//     this.photos.push(this.formBuilder.group({
//       url: ['', Validators.required],
//       caption: ['']
//     }));
//   }

//   get menu() {
//     return this.profileForm.get('menu') as FormArray;
//   }

//   get photos() {
//     return this.profileForm.get('photos') as FormArray;
//   }
// }

// <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
//   <label>
//     Name:
//     <input type="text" formControlName="name">
//   </label>

//   <label>
//     Description:
//     <textarea formControlName="description"></textarea>
//   </label>

//   <fieldset formArrayName="menu">
//     <legend>Menu</legend>
//     <div *ngFor="let item of menu.controls; let i=index">
//       <div [formGroupName]="i">
//         <label>
//           Item:
//           <input type="text" formControlName="item">
//         </label>

//         <label>
//           Price:
//           <input type="text" formControlName="price">
//         </label>
//       </div>
//     </div>
//     <button type="button" (click)="addMenuItem()">Add item</button>
//   </fieldset>

//   <fieldset formArrayName="photos">
//     <legend>Photos</legend>
//     <div *ngFor="let photo of photos.controls; let i=index">
//       <div [formGroupName]="i">
//         <label>
//           URL:
//           <input type="text" formControlName="url">
//         </label>

//         <label>
//           Caption:
//           <input type="text" formControlName
