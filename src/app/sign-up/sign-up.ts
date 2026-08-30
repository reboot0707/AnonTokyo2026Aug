import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Article } from "../article/article";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, Article, JsonPipe],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  form = new FormGroup({
    account: new FormControl('1', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('2', [Validators.required, Validators.minLength(8)]),
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
    //console.log(this.form);
    //this.form.get('account')?.setValue('Anon Tokyo')

    // this.form.patchValue({
    //   account: 'Anon Tokyo',
    //   password: 'SoyorinLove'
    // })

    // this.form.get('account')?.valueChanges
    //   .pipe(debounceTime(500))  //rxjs
    //   .subscribe((input) => {
    //     console.log(`value changed to: ${input}`);
    //   })
  }

  submit() {
    // console.log(this.form);
    // console.log(this.form.value);
    if (this.form.invalid) {
      alert('check is required!');
      console.log(this.form.get('account')?.errors);
      return;
    }
    console.log('data is sent to api');
  }

  clear() {
    this.form.reset({
      account: '',
      password: '',
      address: ['']
    });
    console.log(this.form);
  }
}
