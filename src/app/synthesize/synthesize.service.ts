import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voice } from './models/voice';
import { Speech } from './models/speech';

@Injectable({
  providedIn: 'root',
})
export class SynthesizeService {
  private readonly apiUrl = '/api/synthesize';
  private speechesSubject = new BehaviorSubject<Speech[]>([]);
  public speeches$ = this.speechesSubject.asObservable();

  constructor(private http: HttpClient) {}

  convertTextToSpeech(
    text: string,
    languageCode: string,
    voiceName: string,
    speed: number,
    pitch: number
  ): Observable<Blob> {
    return this.http.post(
      this.apiUrl,
      { text, languageCode, voiceName, speed, pitch },
      { responseType: 'blob' }
    );
  }

  getLanguageVoices(languageCode: string): Observable<Voice[]> {
    const params = new HttpParams().append('languageCode', languageCode);
    return this.http.get<Voice[]>(`${this.apiUrl}/voice-list`, { params });
  }

  public saveSpeech(speech: Speech): Observable<Speech> {
    const formData = new FormData();

    formData.append('speechAudio', speech.audio!, speech.language);
    formData.append('language', speech.language);
    formData.append('voice', speech.voice);

    return this.http
      .post<{ speech: Speech }>(this.apiUrl + '/speech', formData)
      .pipe(map((res) => res.speech));
  }

  getSavedSpeeches(): void {
    this.http
      .get<{ data: Speech[] }>(this.apiUrl + '/speech')
      .pipe(tap((res) => this.speechesSubject.next(res.data)))
      .subscribe();
  }

  deleteSpeech(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/speech/${id}`).pipe(
      tap(() => {
        this.speechesSubject.next(this.speechList.filter((t) => t._id !== id));
      })
    );
  }

  get speechList(): Speech[] {
    return this.speechesSubject.value;
  }
}
