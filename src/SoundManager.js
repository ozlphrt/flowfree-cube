export class SoundManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isInitialized = false;
    this.isMuted = false;
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (this.isMuted && this.ctx) {
        this.ctx.suspend();
    } else if (this.ctx) {
        this.ctx.resume();
    }
  }

  // Best Practice: Modern browsers block audio until user interaction
  setupUnlock() {
    const unlock = () => {
      this.init();
      this.resume();
      if (this.ctx) {
        window.removeEventListener('pointerdown', unlock);
        window.removeEventListener('touchstart', unlock);
        window.removeEventListener('keydown', unlock);
        console.log('Audio Context Unlocked');
      }
    };
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('touchstart', unlock);
    window.addEventListener('keydown', unlock);
  }

  init() {
    if (this.isInitialized) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.3; // MASTER VOLUME
      this.masterGain.connect(this.ctx.destination);
      this.isInitialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported', e);
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {
        // Silently fail if not allowed yet
      });
    }
  }

  // TACTILE TECH: Click (Plate Selected)
  playClick() {
    this.init();
    this.resume();
    if (!this.isInitialized || this.isMuted) return;

    // 1. Transient (Noise snap)
    const bufferSize = this.ctx.sampleRate * 0.01;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.8, this.ctx.currentTime); // BOOSTED SNAP
    noiseGain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.008);
    
    // 2. Body (Sine chirp)
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.03); // TIGHTER CHIRP
    oscGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.03);

    noise.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    noise.start();
    osc.start();
    osc.stop(this.ctx.currentTime + 0.03);
  }

  // TACTILE TECH: Tick (Pipe Drawing)
  playTick(count = 1) {
    this.init();
    this.resume();
    if (!this.isInitialized || this.isMuted) return;

    // 1. DYNAMIC PITCH CALCULATION
    // Base 220Hz (A3), Max 880Hz (A5)
    const baseFreq = 220; 
    const maxFreq = 880;
    const progress = Math.min((count - 1) / 15, 1);
    const targetFreq = baseFreq + (maxFreq - baseFreq) * progress;

    // 2. MECHANICAL SHELL (High-passed noise transient)
    const bufferSize = this.ctx.sampleRate * 0.02; // BOOTED TO 20ms
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(4000, this.ctx.currentTime);
    const nGain = this.ctx.createGain();
    
    // Add tiny fade-in to prevent pops
    nGain.gain.setValueAtTime(0, this.ctx.currentTime);
    nGain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.002);
    nGain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.015);

    // 3. TONAL CORE (Sine oscillator for audible pitch)
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(targetFreq, this.ctx.currentTime);
    const oGain = this.ctx.createGain();
    
    oGain.gain.setValueAtTime(0, this.ctx.currentTime);
    oGain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + 0.002);
    oGain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.02);

    // Patching
    noise.connect(noiseFilter);
    noiseFilter.connect(nGain);
    nGain.connect(this.masterGain);
    osc.connect(oGain);
    oGain.connect(this.masterGain);

    noise.start();
    osc.start();
    osc.stop(this.ctx.currentTime + 0.02);
  }

  // TACTILE TECH: Lock (Pipe Completed)
  playLock() {
    this.init();
    this.resume();
    if (!this.isInitialized || this.isMuted) return;

    // 1. Tonal Thud (Low-frequency body)
    const osc = this.ctx.createOscillator();
    const oGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, this.ctx.currentTime); // Low G
    
    oGain.gain.setValueAtTime(0, this.ctx.currentTime);
    oGain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + 0.005); // 5ms Attack
    oGain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.06); // 60ms decay

    // 2. Mechanical 'Knock' (Filtered noise transient)
    const bufferSize = this.ctx.sampleRate * 0.02;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(500, this.ctx.currentTime); // Heavy damping
    
    const nGain = this.ctx.createGain();
    nGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    nGain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.015);

    // Patching
    osc.connect(oGain);
    oGain.connect(this.masterGain);
    noise.connect(filter);
    filter.connect(nGain);
    nGain.connect(this.masterGain);

    osc.start();
    noise.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }

  // TACTILE TECH: Vent (Pipe Broken)
  playVent() {
    this.init();
    this.resume();
    if (!this.isInitialized || this.isMuted) return;

    // Short noise sweep
    const bufferSize = this.ctx.sampleRate * 0.1;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, this.ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(100, this.ctx.currentTime + 0.1);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.1);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start();
    noise.stop(this.ctx.currentTime + 0.1);
  }

  // TACTILE TECH: Victory (Level Complete)
  playVictory() {
    this.init();
    this.resume();
    if (!this.isInitialized || this.isMuted) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + i * 0.1;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);
        
        gain.gain.setValueAtTime(0.04, startTime); // SUBDUED VOLUME
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(startTime);
        osc.stop(startTime + 0.4);
    });
  }
}

export const soundManager = new SoundManager();
soundManager.setupUnlock();
