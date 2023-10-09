import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SynthesizeSpeechComponent } from './synthesize/synthesize-speech/synthesize-speech.component';

const routes: Routes = [
  {
    path: 'synthesize',
    component: SynthesizeSpeechComponent,
  },
  {
    path: '',
    redirectTo: '/synthesize',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
