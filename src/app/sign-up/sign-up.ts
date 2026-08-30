import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

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
    //console.log(this.form);
    //this.form.get('account')?.setValue('Anon Tokyo')

    this.form.patchValue({
      account: 'Anon Tokyo',
      password: 'SoyorinLove'
    })

    this.form.get('account')?.valueChanges
      .pipe(debounceTime(500))  //rxjs
      .subscribe((input) => {
        console.log(`value changed to: ${input}`);
      })
  }

  submit() {
    console.log(this.form);
    console.log(this.form.value);
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
