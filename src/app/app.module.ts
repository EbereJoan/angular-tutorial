import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './pages/todo/todo.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoServices } from './services/todos.service';
import { ApiService } from './services/api.service';
import { Sports } from './providers/sports';
import { SportsUIComponent } from './pages/sports-ui/sports-ui.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SportsUIComponent,
    TodoComponent,
    TodosComponent
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,  
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    Sports,
    TodoServices
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
