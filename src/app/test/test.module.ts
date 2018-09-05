import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive/directive.component';
import { PracticeComponent } from './practice/practice.component';
import { TestRoutingModule } from './test-routing.module';
import { TestDirective } from './test.directive';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestRoutingModule
  ],
  declarations: [DirectiveComponent, PracticeComponent, TestDirective]
})
export class TestModule { }
