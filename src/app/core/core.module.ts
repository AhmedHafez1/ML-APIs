import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ErrorDialogComponent, ToolbarComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild([])],
  exports: [ToolbarComponent],
})
export class CoreModule {}
