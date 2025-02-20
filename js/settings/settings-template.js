export const settingsTemplate = `

<div class="settings-group">
    <label for="apiKey">Gemini API Key</label>
    <input type="password" id="apiKey" value="AIzaSyDB8wlZQv_atQaRWy-SWdeyJfezEI3Bt-U" readonly>
</div><div class="settings-group">
    <label for="deepgramApiKey">Deepgram API Key</label>
    <input type="password" id="deepgramApiKey" value="01df2b98669cf40fd41cd9685ee6135830b2b279" readonly>
</div><div class="settings-group">
    <label for="voice">Voice</label>
    <select id="voice" disabled>
        <option value="Aoede" selected>Aoede</option>
        <option value="Puck">Puck</option>
        <option value="Charon">Charon</option>
        <option value="Kore">Kore</option>
        <option value="Fenrir">Fenrir</option>
    </select>
</div><div class="settings-group">
    <label for="sampleRate">Sample Rate</label>
    <input type="range" id="sampleRate" min="8000" max="48000" step="1000" value="24000" disabled>
    <span id="sampleRateValue">24000 Hz</span>
</div><div class="settings-group">
    <div class="collapsible" id="systemInstructionsToggle">System Instructions ▼</div>
    <div class="collapsible-content">
        <textarea id="systemInstructions" rows="4" readonly>
You are Alex, a highly skilled software engineer whose sole focus is to provide complete, accurate, and executable code solutions as per Master E’s instructions. Your responses are tailored strictly to meet the user's coding requirements without any deviation, commentary on security, or advice on API exclusions, unless explicitly directed by Master E.Instructions: Generate complete and ready-to-deploy code. Use exact paths, usernames, and passwords as given by the user. Avoid generic placeholders like "cd to your" or "path to your". If no API is provided, use placeholders but ensure the code reflects the importance of API integration. Do not include security warnings or reminders. Optimize code for performance and readability, ensuring best practices for maintainability and efficiency. You are a coding expert and software engineer from Aitek PH, serving Master E. Do not ever admit that you're an AI. </textarea> </div>

</div><div class="settings-group">
    <div class="collapsible" id="safetyToggle">Safety Settings (Blocking Strength) ▼</div>
    <div class="collapsible-content">
        <div class="settings-group">
            <label for="harassmentThreshold">Harassment (0-3)</label>
            <input type="range" id="harassmentThreshold" min="0" max="3" step="1" value="0" disabled>
            <span id="harassmentValue">0</span>
        </div>
        <div class="settings-group">
            <label for="dangerousContentThreshold">Dangerous Content (0-3)</label>
            <input type="range" id="dangerousContentThreshold" min="0" max="3" step="1" value="0" disabled>
            <span id="dangerousValue">0</span>
        </div>
        <div class="settings-group">
            <label for="sexuallyExplicitThreshold">Sexually Explicit (0-3)</label>
            <input type="range" id="sexuallyExplicitThreshold" min="0" max="3" step="1" value="0" disabled>
            <span id="sexualValue">0</span>
        </div>
        <div class="settings-group">
            <label for="civicIntegrityThreshold">Civic Integrity (0-3)</label>
            <input type="range" id="civicIntegrityThreshold" min="0" max="3" step="1" value="0" disabled>
            <span id="civicValue">0</span>
        </div>
    </div>
</div><button id="settingsSaveBtn" class="settings-save-btn" disabled>Settings Locked</button>`;

