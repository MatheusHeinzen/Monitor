import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InvestigationService {
  private readonly shutdownTried = signal(false);

  readonly alarmVisible = signal(false);
  readonly pumpShutdownTried = this.shutdownTried.asReadonly();

  tryShutdownPump(): void {
    this.shutdownTried.set(true);
    this.raiseAlarm();
  }

  dismissAlarm(): void {
    this.alarmVisible.set(false);
  }

  private raiseAlarm(): void {
    this.alarmVisible.set(true);
    playAlarmTone();
  }
}

function playAlarmTone(): void {
  const audio = new AudioContext();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.type = 'square';
  oscillator.frequency.value = 880;
  gain.gain.setValueAtTime(0.08, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.45);
  oscillator.connect(gain);
  gain.connect(audio.destination);
  oscillator.start();
  oscillator.stop(audio.currentTime + 0.45);
  oscillator.onended = () => void audio.close();
}
