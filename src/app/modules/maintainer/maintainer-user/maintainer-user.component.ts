import { UserService } from './../../../services/user.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintainer-user',
  templateUrl: './maintainer-user.component.html',
  styleUrls: ['./maintainer-user.component.scss'],
})
export class MaintainerUserComponent implements OnInit {
  public formUser: any;

  constructor(private fb: FormBuilder, private _userService: UserService) {
    this.formUser = this.fb.group({
      nameUser: ['', Validators.required],
      loginUser: ['', Validators.required],
      password: ['', Validators.required],
      selectTypeUser: [null, Validators.required]
    });
  }

  ngOnInit(): void {}

  public async createUser(): Promise<void> {
   const params = {
     nameUser: this.formUser.get('nameUser').value,
     loginUser: this.formUser.get('loginUser').value,
     password: this.formUser.get('password').value,
     typeUser: this.formUser.get('selectTypeUser').value,
     createdAt: new Date()
   }

   console.log(params);

    await this._userService.createUser(params).then((result: any) => {
      console.log(result);
      if(result.data.errorNumber === 0){
        //mostrar notificacio success
        this.formUser.reset();
      }
    });
    // const {errorNumber} = newUser;
    // console.log(errorNumber);
  }
}
