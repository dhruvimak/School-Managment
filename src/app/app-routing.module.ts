import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeacherComponent } from "./teacher/teacher.component";
import { StudentComponent } from "./student/student.component";
import { LoginComponent } from "./login/login.component";
import { TeacherAuthGuard } from "./shared/teacher-auth.guard";
import { StudentAuthGuard } from "./shared/student-auth.guard";
import { LoginAuthGuard } from "./shared/login-auth.guard";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TimetableComponent } from "./shared/timetable/timetable.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "teacher",
    component: TeacherComponent,
    canActivate: [TeacherAuthGuard],
    children: [{ path: "", component: TimetableComponent }]
  },
  {
    path: "student",
    component: StudentComponent,
    canActivate: [StudentAuthGuard],
    children: [{ path: "", component: TimetableComponent }]
  },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "404" }

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
