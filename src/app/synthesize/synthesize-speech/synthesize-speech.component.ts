import { LANGUAGE_NAME_MAP } from './../../languages.constants';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SynthesizeService } from '../synthesize.service';
import { LANGUAGES } from 'src/app/languages.constants';
import { Voice } from '../models/voice';
import { Observable, filter, map, tap } from 'rxjs';
import { Speech } from '../models/speech';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-synthesize-speech',
  templateUrl: './synthesize-speech.component.html',
  styleUrls: ['./synthesize-speech.component.scss'],
})
export class SynthesizeSpeechComponent {
  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;
  audioUrl: string = '';
  audioBlob!: Blob;
  text: string = '';
  language: string = 'ar';
  languages = LANGUAGES;
  LANGUAGE_NAME_MAP = LANGUAGE_NAME_MAP;
  voiceList$!: Observable<Voice[]>;
  voice!: string;
  gettingVoices = false;
  speed = 1.0;
  pitch = 0;

  constructor(
    private matSnackBar: MatSnackBar,
    private synthesizeService: SynthesizeService,
    private spinnerService: NgxSpinnerService,
    private router: Router
  ) {
    this.getLanguagesVoiceList();
  }

  synthesizeSpeech() {
    this.spinnerService.show();
    this.synthesizeService
      .convertTextToSpeech(
        this.text,
        this.language,
        this.voice,
        this.speed,
        this.pitch
      )
      .subscribe((response: Blob) => {
        this.matSnackBar.open(
          'Your speech has been generated successfully!',
          '',
          {
            panelClass: 'snack-success',
            duration: 3000,
          }
        );
        this.audioBlob = new Blob([response], { type: 'audio/mp3' });
        this.spinnerService.hide();
        this.audioUrl = URL.createObjectURL(this.audioBlob);
        this.audioElement.nativeElement.src = this.audioUrl;
        this.audioElement.nativeElement.play();
      });
  }

  saveSpeech() {
    this.spinnerService.show();
    const speech: Speech = {
      audio: this.audioBlob,
      language: LANGUAGE_NAME_MAP[this.language],
      voice: this.voice,
    };

    this.synthesizeService.saveSpeech(speech).subscribe();
  }

  getLanguagesVoiceList() {
    this.gettingVoices = true;
    this.voice = '';
    this.voiceList$ = this.synthesizeService
      .getLanguageVoices(this.language)
      .pipe(tap(() => (this.gettingVoices = false)))
      .pipe(
        map((voiceList) => {
          const newList: Voice[] = [];

          for (const voice of voiceList) {
            if (!newList.some((element) => element.name === voice.name)) {
              newList.push(voice);
            }
          }

          return newList.filter((voice) => !voice.name.includes('Neural'));
        })
      );
  }

  get firstStepCompleted(): boolean {
    return !!this.voice;
  }

  get secondStepCompleted(): boolean {
    return !!this.text;
  }
}
