import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConnectComponent } from './connect/connect.component';
import { JoinComponent } from './join/join.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    ConnectComponent,
    JoinComponent,
    SignupComponent,
    AppComponent,
  ],
  exports: [AppComponent],
})
export class AppModule {}
