import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationPeriods, Animations, FadeStates } from 'src/animations';
import { AuthService } from 'src/app/services/auth.service';
import { AppConfig, AppRoute, Section } from 'src/config';

/**
 * # HomeComponent
 * ## Description
 * ## Example Usage
 * ```html
 * ```
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    Animations.getFadeTrigger()
  ]
})
export class HomeComponent {

  public username : string;
  public selected: Section = AppConfig.sections[0];
  public sections: Section[] = AppConfig.sections;
  public appRoutes: AppRoute[] = AppConfig.routes
  public sectionFadeState: FadeStates = FadeStates.in;

  /**
   * # Description
   * Constructs an instance of {@link HomeComponent}
   * @param auth instance of {@link AuthService} injected into component by Angular
   */
  constructor(private auth : AuthService) { this.username = this.auth.getUsername() }

  /**
   * # Description
   * Select a {@link Section} to view within the {@link HomeComponent}
   * @param input 
   */
  public onSelect(input: Section): void {
    this.sectionFadeState = FadeStates.out;
    console.log(`sectionFadeState: ${this.sectionFadeState}`)
    setTimeout(()=>{
      this.selected = input; 
      this.sectionFadeState = FadeStates.in;
      console.log(`sectionFadeState: ${this.sectionFadeState}`)
    }, AnimationPeriods.medium)
  }

  /**
   * # Description
   * Determines if the input section key is the currently selected {@link Section}
   * @param section 
   * @returns 
   */
  public isSelected(section: Section): boolean{ return section == this.selected; }

}
