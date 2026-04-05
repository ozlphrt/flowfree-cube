export class SettingsPanel {
  constructor(onChange) {
    this.onChange = onChange;
    
    // Load persisted settings
    this.sensitivity = parseFloat(localStorage.getItem('flowfree_sensitivity')) || 1.0;
    this.audioEnabled = localStorage.getItem('flowfree_audio') !== 'false';
    this.darkMode = localStorage.getItem('flowfree_dark_mode') === 'true';
    
    this.initUI();
    
    // Notify initial state
    this.triggerChange();
  }

  initUI() {
    this.btn = document.getElementById('settings-btn');
    this.panel = document.getElementById('settings-panel');
    
    this.audioBtn = document.getElementById('audio-icon-btn');
    this.themeBtn = document.getElementById('theme-icon-btn');
    this.lvlBtn = document.getElementById('lvl-btn');
    this.versionBtn = document.getElementById('version-btn');

    if (!this.btn || !this.panel) return;

    // Apply values to UI
    this.updateIconState();

    this.btn.onclick = (e) => {
      e.stopPropagation();
      this.panel.classList.toggle('hidden');
    };

    if (this.audioBtn) {
      this.audioBtn.onclick = (e) => {
        e.stopPropagation();
        this.audioEnabled = !this.audioEnabled;
        localStorage.setItem('flowfree_audio', this.audioEnabled);
        this.updateIconState();
        this.triggerChange();
      };
    }

    if (this.themeBtn) {
      this.themeBtn.onclick = (e) => {
        e.stopPropagation();
        this.darkMode = !this.darkMode;
        localStorage.setItem('flowfree_dark_mode', this.darkMode);
        this.updateIconState();
        this.triggerChange();
      };
    }

    if (this.lvlBtn) {
      this.lvlBtn.onclick = (e) => {
        e.stopPropagation();
        if (window.showLevelModal) window.showLevelModal();
        this.panel.classList.add('hidden'); // Close settings
      };
    }

    if (this.versionBtn) {
      const vIcon = this.versionBtn.querySelector('.version-icon');
      if (vIcon) vIcon.innerText = "VER";

      this.versionBtn.onclick = (e) => {
          e.stopPropagation();
          if (window.showVersionModal) window.showVersionModal();
          this.panel.classList.add('hidden'); // Close settings
      };
    }

    this.refillBtn = document.getElementById('refill-btn');
    if (this.refillBtn) {
        this.refillBtn.onclick = (e) => {
            e.stopPropagation();
            if (this.onRefill) this.onRefill();
            this.panel.classList.add('hidden'); // Close settings
        };
    }

    // Close on click outside
    window.addEventListener('pointerdown', (e) => {
      if (!this.panel.contains(e.target) && e.target !== this.btn) {
        this.panel.classList.add('hidden');
      }
    });
  }

  updateIconState() {
    if (this.audioBtn) {
      const onItems = this.audioBtn.querySelectorAll('.audio-on');
      const offItems = this.audioBtn.querySelectorAll('.audio-off');
      onItems.forEach(el => el.classList.toggle('hidden', !this.audioEnabled));
      offItems.forEach(el => el.classList.toggle('hidden', this.audioEnabled));
      this.audioBtn.querySelector('.settings-icon').classList.toggle('active', this.audioEnabled);
    }

    if (this.themeBtn) {
      const sunItems = this.themeBtn.querySelectorAll('.theme-sun');
      const moonItems = this.themeBtn.querySelectorAll('.theme-moon');
      sunItems.forEach(el => el.classList.toggle('hidden', !this.darkMode));
      moonItems.forEach(el => el.classList.toggle('hidden', this.darkMode));
      this.themeBtn.querySelector('.settings-icon').classList.toggle('active', this.darkMode);
    }
  }

  triggerChange(extra = {}) {
    if (this.onChange) {
      this.onChange({
        audioEnabled: this.audioEnabled,
        darkMode: this.darkMode,
        ...extra
      });
    }
  }
}
