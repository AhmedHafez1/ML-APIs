import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthesizeSpeechComponent } from './synthesize-speech.component';

describe('SynthesizeSpeechComponent', () => {
  let component: SynthesizeSpeechComponent;
  let fixture: ComponentFixture<SynthesizeSpeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynthesizeSpeechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynthesizeSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
