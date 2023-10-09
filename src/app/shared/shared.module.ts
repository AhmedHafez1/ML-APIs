import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TextLimitPipe } from './pipes/text-limit.pipe';
import { StepperComponent } from './components/stepper/stepper.component';
import { HideMissingImageDirective } from './directives/hide-missing-image.directive';
import { AutoResizeTextAreaDirective } from './directives/auto-resize-text-area.directive';

@NgModule({
  declarations: [
    TimeFormatPipe,
    TextLimitPipe,
    StepperComponent,
    HideMissingImageDirective,
    AutoResizeTextAreaDirective,
  ],
  imports: [CommonModule, AngularMaterialModule],
  exports: [
    TimeFormatPipe,
    TextLimitPipe,
    StepperComponent,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HideMissingImageDirective,
    AutoResizeTextAreaDirective,
  ],
})
export class SharedModule {}
