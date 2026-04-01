export class SettingsPanel {
  constructor(onChange) {
    this.onChange = onChange;
    this.sensitivity = parseFloat(localStorage.getItem('flowfree_sensitivity')) || 1.0;
    
    this.initUI();
    // Notify initial value
    this.onChange(this.sensitivity);
  }

  initUI() {
    this.btn = document.getElementById('settings-btn');
    this.panel = document.getElementById('settings-panel');
    this.slider = document.getElementById('sensitivity-slider');
    this.valDisplay = document.getElementById('sensitivity-val');
    this.closeBtn = document.getElementById('close-settings');

    if (!this.btn || !this.panel || !this.slider) return;

    this.slider.value = this.sensitivity;
    this.valDisplay.innerText = this.sensitivity.toFixed(1);

    this.btn.onclick = (e) => {
      e.stopPropagation();
      this.panel.classList.toggle('hidden');
    };

    if (this.closeBtn) {
      this.closeBtn.onclick = (e) => {
        e.stopPropagation();
        this.panel.classList.add('hidden');
      };
    }

    this.slider.oninput = (e) => {
      this.sensitivity = parseFloat(e.target.value);
      this.valDisplay.innerText = this.sensitivity.toFixed(1);
      localStorage.setItem('flowfree_sensitivity', this.sensitivity);
      this.onChange(this.sensitivity);
    };

    // Close on click outside
    window.addEventListener('pointerdown', (e) => {
      if (!this.panel.contains(e.target) && e.target !== this.btn) {
        this.panel.classList.add('hidden');
      }
    });
  }
}
