import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ButtonNsModel } from 'src/app/commons/components/button/model/button-ns.model';
import { InputNsModel } from 'src/app/commons/components/input/model/input-ns.model';
import { IUser } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  InpUser = new InputNsModel.InputClass(
    '',
    'Usuario',
    true,
    'usuario',
    'text'
  );
  InpPass = new InputNsModel.InputClass(
    '',
    'Clave',
    true,
    'clave',
    'password'
  );
  btnIntro = new ButtonNsModel.ButtonClass('Ingresar', 'warn', 'border');
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    // this.authService.clearToken();
  }

  auth() {
    const userForm = this.form.value;
    this.authService.authLogin().subscribe({
      next: (users: IUser[]) => {
        const user = users.find(
          (u: IUser) => u.user === userForm.usuario && u.pass === userForm.clave
        );
        // const dec = btoa(dd)
        // const enc = atob(dec)

        if (user) {
          this.router.navigate(['/dashboard']);
          const userCode = btoa(JSON.stringify(user));
          this.setSession(userCode);
          this.authService.setToken(userCode);
        } else {
          // alert('ERROR')
          this.toastr.error('Hello world!', 'Usuario o clave errada');
        }
      },
    });
  }

  private setSession(u: any) {
    const dataUser = {
      // id: 1,
      user: JSON.parse(atob(u)).user,
      dia : new Date().toLocaleDateString(),
      hora : new Date().toLocaleTimeString(),
    }
    this.authService.sesion(dataUser).subscribe()
  }

  // keySend(btn: any) {
  //   let key = btn.keyCode;
  //   console.log(key);
  //   if (key === 13) {
  //     this.auth();
  //   }
  // }
}
