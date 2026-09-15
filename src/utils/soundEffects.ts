// Native Web Audio Synthesizer for Mystical Persian Ambience & Anomalies
class AudioSynthManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private droneGain: GainNode | null = null;
  private isDronePlaying: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.initContext();
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopDrone();
    } else {
      this.playChime(528); // 528 Hz Solfeggio Love & Miracles frequency
      this.startAmbientDrone();
    }
    return !this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // Play a mystical chime (harmonic bell)
  public playChime(freq = 440) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      // Exponential glissando up
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 1.8);
    } catch {
      // Graceful fallback
    }
  }

  // Play strange portal / time distortion anomaly sound
  public playAnomalyWarp() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(120, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.6);
      osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 1.4);
    } catch {
      // Graceful fallback
    }
  }

  // Ambient Persian Tanbur / Ney drone
  public startAmbientDrone() {
    if (this.isMuted || this.isDronePlaying) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      // Base fundamental D (146.83 Hz) + Fifth A (220 Hz)
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      this.droneGain = this.ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(146.83, this.ctx.currentTime);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(220, this.ctx.currentTime);

      this.droneGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.droneGain.gain.exponentialRampToValueAtTime(0.06, this.ctx.currentTime + 3);

      osc1.connect(this.droneGain);
      osc2.connect(this.droneGain);
      this.droneGain.connect(this.ctx.destination);

      osc1.start();
      osc2.start();
      this.isDronePlaying = true;
    } catch {
      // Graceful fallback
    }
  }

  public stopDrone() {
    if (this.droneGain && this.ctx) {
      try {
        this.droneGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      } catch {
        // ignore
      }
      this.isDronePlaying = false;
    }
  }
}

export const audioSynth = new AudioSynthManager();
