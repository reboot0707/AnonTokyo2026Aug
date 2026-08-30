import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  form = new FormGroup({
    account: new FormControl('1'),
    password: new FormControl('2'),
    info: new FormGroup({
      age: new FormControl(3),
      tall: new FormControl(4)
    }),
    address: new FormArray([
      new FormControl('5'),
      new FormControl('Anon'),
      new FormControl('Tokyo')
    ])
  })

  getAddress() {
    return (this.form.get('address') as FormArray).controls
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.form);
  }

  submit() {
    console.log(this.form);
    console.log(this.form.value);
  }
}
