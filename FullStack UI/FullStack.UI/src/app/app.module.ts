import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PersonsListComponent } from "./components/persons/persons-list/persons-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { PersonsService } from "./services/persons.service";
import { FormsModule } from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClient
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
