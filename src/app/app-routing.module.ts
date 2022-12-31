import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BoardComponent } from './components/board/board.component';
import { FastComponent } from './components/fast/fast.component';

const routes: Routes = [
  {path:'tabla',component:BoardComponent},
  {path:'fast',component:FastComponent},
  {path:'', component:MainComponent}

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
