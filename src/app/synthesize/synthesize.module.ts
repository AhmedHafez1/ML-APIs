import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SynthesizeSpeechComponent } from './synthesize-speech/synthesize-speech.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SynthesizeSpeechComponent],
  imports: [CommonModule, SharedModule],
})
export class SynthesizeModule {}
