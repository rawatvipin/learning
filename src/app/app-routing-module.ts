import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { FeatureShellModule } from './feature-shell/feature-shell.module';
import { TestModule } from './test/test.module';
import { TestRoutingModule } from './test/test-routing.module';
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    { path: '**', redirectTo: 'login' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: false });