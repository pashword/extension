import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
<div class="flex background-image relative flex-col gap-2 w-72 items-center p-10">
  <h2 class="font-bold text-slate-50 text-5xl mb-5">Pashword</h2>
  <div class="flex flex-col gap-3 w-full">
    <div class="flex flex-col gap-1 w-full">
      <label for="secret-key" class="input-label">Secret Key</label>
      <input type="text" id="secret-key" placeholder="j1mmyneutr0n#00" class="input-text">
    </div>
    <div class="flex flex-col gap-1 w-full">
      <label for="password-length" class="input-label">Pashword Length</label>
      <input type="number" max="99" min="11" default-value="20" id="password-length" placeholder="11 to 99" class="input-text">
    </div>
    <button id="save-settings" class="submit-button">Save Settings</button>
  </div>
</div>
`;
