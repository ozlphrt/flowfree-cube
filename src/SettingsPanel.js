export class SettingsPanel {
  constructor(onChange) {
    this.onChange = onChange;
    this.sensitivity = parseFloat(localStorage.getItem('flowfree_sensitivity')) || 1.0;
    
    this.initUI();
    // Notify initial value
    this.onChange(this.sensitivity);
  }

  initUI() {
    // Create settings button
    const container = document.createElement('div');
    container.id = 'settings-container';
    document.body.appendChild(container);

    const btn = document.createElement('button');
    btn.id = 'settings-btn';
    btn.innerHTML = '⚙️';
    container.appendChild(btn);

    // Create panel
    const panel = document.createElement('div');
    panel.id = 'settings-panel';
    panel.className = 'hidden';
    panel.innerHTML = `
      <h3>Settings</h3>
      <div class="setting-item">
        <label>Rotation Sensitivity</label>
        <span id="sensitivity-val">${this.sensitivity.toFixed(1)}x</span>
        <input type="range" id="sensitivity-slider" min="0.5" max="3.0" step="0.1" value="${this.sensitivity}">
      </div>
      <button id="close-settings">Close</button>
    `;
    container.appendChild(panel);

    const slider = panel.querySelector('#sensitivity-slider');
    const valDisplay = panel.querySelector('#sensitivity-val');

    btn.onclick = () => panel.classList.toggle('hidden');
    panel.querySelector('#close-settings').onclick = () => panel.classList.add('hidden');

    slider.oninput = (e) => {
      this.sensitivity = parseFloat(e.target.value);
      valDisplay.innerText = this.sensitivity.toFixed(1) + 'x';
      localStorage.setItem('flowfree_sensitivity', this.sensitivity);
      this.onChange(this.sensitivity);
    };
  }
}
