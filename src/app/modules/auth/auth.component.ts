import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonNsModel } from 'src/app/commons/components/button/model/button-ns.model';
import { InputNsModel } from 'src/app/commons/components/input/model/input-ns.model';
import { IUser } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  InpUser = new InputNsModel.InputClass(
    '',
    'Ingrese Usuario',
    true,
    'user',
    'text'
  );
  InpPass = new InputNsModel.InputClass(
    '',
    'Ingrese clave',
    true,
    'pass',
    'password'
  );
  btnIntro = new ButtonNsModel.ButtonClass(
    'Ingresar',
    'warn',
    'border'
  );
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.form =  new FormGroup({})
  }

  ngOnInit(): void {
    this.authService.clearToken();
  }


  auth() {
    const userForm =  this.form.value;
    this.authService.authLogin().subscribe({
      next: (users: IUser[]) => {
        
        const user = users.find((u: IUser) => u.user === userForm.user && u.pass === userForm.pass);
        // const dec = btoa(dd)
        // const enc = atob(dec)
        
        if(user) {
          this.router.navigate(['/dashboard']);    
          const userCode = btoa(JSON.stringify(user));
          this.authService.setToken(userCode)  
        } else {
          alert('ERROR')
        }
      }
    })

  }

}
