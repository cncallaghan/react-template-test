import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling'; 

import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxWebstorageModule, SessionStorageService } from 'ngx-webstorage';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'; 
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AdminComponent } from './components/admin/admin.component';
import { EditorComponent } from './components/admin/editor/editor.component';
import { ArchiveComponent } from './components/admin/archive/archive.component';
import { StoryComponent } from './components/story/story.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { RegisterComponent } from './components/register/register.component';

/**
 * # AppModule
 * 
 * ## Description
 *  
 *  Controls module imports and dependency injection for the Angular application. An {@link AuthInterceptor} is injected into the HTTP middleware so that all outgoing requests have a JWT Bearer token appended to their authorization header.
 */
@NgModule({
  declarations: [
    // COMPONENTS
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    EditorComponent,
    ArchiveComponent,
    DialogComponent,
    StoryComponent,
    ToolbarComponent,

    // PIPES
    SanitizePipe,
      RegisterComponent,
  ],
  imports: [
    // ANGULAR CORE
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule,

    // ANGULAR MATERIAL
    MatSidenavModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatGridListModule,
    MatListModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    

    // OTHER
      // NGX WEBSTORAGE
    NgxWebstorageModule.forRoot(),
      // ANGULAR EDITOR
    AngularEditorModule

  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useFactory: function(session: SessionStorageService) {
        return new AuthInterceptor(session);
      },
      multi: true,
      deps: [SessionStorageService] 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
