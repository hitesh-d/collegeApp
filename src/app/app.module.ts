import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpModule } from '@angular/http';

import {AppComponent} from "./app.component";
import {MaterialModule} from "./material/material.module";
import {RoutingModule} from "./routing/routing.module";
import { StudentsService } from './shared/students.service';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentComponent } from './students/students-list/student/student.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    StudentsListComponent,
    StudentComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
