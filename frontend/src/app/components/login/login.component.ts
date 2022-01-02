import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Animations, HighlightStates, ScaleStates } from 'src/animations';
import { UserLogin } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

/**
 * # LoginComponent
 * 
 * ## Description
 * 
 * ## Example Usage
 * 
 * ```javascript
 * ```
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    Animations.getScaleTrigger(1.25),
    Animations.getHighlightTrigger(1.5)
  ]
})
export class LoginComponent {

  public hidePassword: boolean = true;
  public loading: boolean = false;

  public loginFormGroup: FormGroup;
  public loginBtnScaleControl : ScaleStates = ScaleStates.null;
  public loginBtnHighlightControl : HighlightStates = HighlightStates.null;
  
  /**
   * # Description
   * 
   * @param auth 
   * @param router 
   * @param formBuilder 
   */
  constructor(private auth: AuthService, 
              private router: Router,
              private formBuilder : FormBuilder) {
    this.loginFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required])
    })
  }

  /**
   * # Description
   * Converts {@link loginFormGroup} into an instance of {@link UserLogin}
   * @returns {@link UserLogin} with the user credentials from the login form.
   */
  private formToUserLogin(): UserLogin{
    return {
      username: this.loginFormGroup.controls.email.value,
      password: this.loginFormGroup.controls.password.value,
    }
  }

  /**
   * # Description
   * @returns void 
   */
  public login() : void{
    if(this.loginFormGroup.valid){
      this.loading = true;
      this.auth.login(this.formToUserLogin()).subscribe((data)=>{
        if(data){ this.router.navigateByUrl('/'); }
      });
    }
    else{ this.loginFormGroup.markAsDirty() }
  }

  public animateLoginButton(): void{ 
    if(this.loginFormGroup.valid){ 
      this.loginBtnScaleControl = ScaleStates.scale; 
      this.loginBtnHighlightControl = HighlightStates.highlight;
    }
  }

  public normalizeLoginButton(): void { 
    if(this.loginFormGroup.valid){ 
      this.loginBtnScaleControl = ScaleStates.null; 
      this.loginBtnHighlightControl = HighlightStates.null;
    }
  }

}
