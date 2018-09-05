import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { AuthenticationModule } from './authentication/authentication.module';
import { FormsModule } from '@angular/forms';
import { StorageService } from './shared/storage.service';
import { FeatureShellModule } from './feature-shell/feature-shell.module';
import { TestRoutingModule } from './test/test-routing.module';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    FeatureShellModule,
    TestModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }