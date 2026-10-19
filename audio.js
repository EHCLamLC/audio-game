/**
 * Audio Synthesizer (Web Audio API)
 * Flappy Bird 20-10 sound effects + sweet melody
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.bgmPlaying = false;
    this.bgmTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled) {
      this.stopBgm();
    } else {
      this.startBgm();
    }
    return this.enabled;
  }

  playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.1, delay = 0) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const start = this.ctx.currentTime + delay;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(gainVal, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(start);
      osc.stop(start + duration);
    } catch (e) {}
  }

  // Flappy Bird Wing Flap sound (gentle airy rise)
  playFlap() {
    if (!this.enabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const start = this.ctx.currentTime;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, start);
      osc.frequency.exponentialRampToValueAtTime(480, start + 0.12);

      gain.gain.setValueAtTime(0.08, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(start);
      osc.stop(start + 0.13);
    } catch (e) {}
  }

  // Mystery Box Open (Surprise chime!)
  playBoxOpen() {
    if (!this.enabled) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((f, i) => {
      this.playTone(f, 'sine', 0.18, 0.12, i * 0.05);
    });
  }

  // Skill acquired
  playSkillActivate() {
    if (!this.enabled) return;
    this.init();
    const notes = [440, 554, 659, 880];
    notes.forEach((f, i) => {
      this.playTone(f, 'triangle', 0.12, 0.1, i * 0.06);
    });
  }

  // Obstacle hit (gentle bump)
  playHit() {
    if (!this.enabled) return;
    this.init();
    this.playTone(180, 'sawtooth', 0.18, 0.1, 0);
  }

  // Victory fanfare
  playVictory() {
    if (!this.enabled) return;
    this.init();
    const fanfare = [
      { f: 523.25, d: 0.15, t: 0 },
      { f: 659.25, d: 0.15, t: 0.15 },
      { f: 783.99, d: 0.2, t: 0.3 },
      { f: 1046.50, d: 0.45, t: 0.48 },
      { f: 880.00, d: 0.25, t: 0.85 },
      { f: 1046.50, d: 0.7, t: 1.1 }
    ];
    fanfare.forEach(n => {
      this.playTone(n.f, 'triangle', n.d, 0.15, n.t);
    });
  }

  // Gentle upbeat BGM
  startBgm() {
    if (!this.enabled || this.bgmPlaying) return;
    this.init();
    this.bgmPlaying = true;

    const melody = [
      329.63, 392.00, 523.25, 392.00,
      349.23, 440.00, 523.25, 440.00,
      293.66, 392.00, 493.88, 392.00,
      329.63, 392.00, 523.25, 659.25
    ];

    let step = 0;
    this.bgmTimer = setInterval(() => {
      if (!this.bgmPlaying || !this.enabled) return;
      const freq = melody[step % melody.length];
      this.playTone(freq, 'sine', 0.18, 0.03, 0);
      step++;
    }, 320);
  }

  stopBgm() {
    this.bgmPlaying = false;
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
}

window.soundEngine = new SoundEngine();
