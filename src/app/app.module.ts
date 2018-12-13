import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServerService } from './shared/server.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AuthService } from './shared/auth.service';
import { TeacherAuthGuard } from './shared/teacher-auth.guard';
import { StudentAuthGuard } from './shared/student-auth.guard';
import { LoginAuthGuard } from './shared/login-auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimetableComponent } from './shared/timetable/timetable.component';
import { TokenInterceptorService } from './shared/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TeacherComponent,
    StudentComponent,
    PageNotFoundComponent,
    TimetableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServerService,AuthService,TeacherAuthGuard,StudentAuthGuard,LoginAuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
