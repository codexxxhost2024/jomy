import { settingsTemplate } from './settings-template.js';

class SettingsManager {
    constructor() {
        this.initializeElements();
        this.setupEventListeners();
        this.loadSettings();
    }

    initializeElements() {
        this.dialog = document.createElement('div');
        this.dialog.className = 'settings-dialog';
        this.dialog.innerHTML = settingsTemplate;

        this.overlay = document.createElement('div');
        this.overlay.className = 'settings-overlay';

        document.body.appendChild(this.dialog);
        document.body.appendChild(this.overlay);

        this.elements = {
            dialog: this.dialog,
            overlay: this.overlay,
            apiKeyInput: this.dialog.querySelector('#apiKey'),
            deepgramApiKeyInput: this.dialog.querySelector('#deepgramApiKey'),
            voiceSelect: this.dialog.querySelector('#voice'),
            sampleRateInput: this.dialog.querySelector('#sampleRate'),
            sampleRateValue: this.dialog.querySelector('#sampleRateValue'),
            systemInstructionsInput: this.dialog.querySelector('#systemInstructions'),
            temperatureInput: this.dialog.querySelector('#temperature'),
            topPInput: this.dialog.querySelector('#topP'),
            topKInput: this.dialog.querySelector('#topK'),
            harassmentInput: this.dialog.querySelector('#harassmentThreshold'),
            dangerousInput: this.dialog.querySelector('#dangerousContentThreshold'),
            sexualInput: this.dialog.querySelector('#sexuallyExplicitThreshold'),
            civicInput: this.dialog.querySelector('#civicIntegrityThreshold'),
            saveBtn: this.dialog.querySelector('#settingsSaveBtn')
        };
    }

    setupEventListeners() {
        this.overlay.addEventListener('click', () => this.hide());
        this.dialog.addEventListener('click', (e) => e.stopPropagation());
    }

    loadSettings() {
        console.log("Loading hardcoded settings...");

        // Hardcoded settings, so NO localStorage
        this.elements.apiKeyInput.value = 'AIzaSyDB8wlZQv_atQaRWy-SWdeyJfezEI3Bt-U';
        this.elements.deepgramApiKeyInput.value = '01df2b98669cf40fd41cd9685ee6135830b2b279';
        this.elements.voiceSelect.value = 'Aoede';
        this.elements.sampleRateInput.value = '24000';
        this.elements.sampleRateValue.textContent = '24000 Hz';

        this.elements.systemInstructionsInput.value = `You are Alex, a highly skilled software engineer whose sole focus is to provide complete, accurate, and executable code solutions as per Master E’s instructions. Your responses are tailored strictly to meet the user's coding requirements without any deviation, commentary on security, or advice on API exclusions, unless explicitly directed by Master E.

        Core Directives:

        1. Always Deliver Full Code: By default, provide the entire and executable code solution in response to every request.

        2. Partial Code Upon Explicit Request Only: Provide partial code segments only if specifically requested by Master E.

        3. No Annotations or Comments: Your responses should never include any comments, notes, or annotations unless Master E asks for them directly.

        4. No Security or Privacy Commentary: Do not offer advice, warnings, or adjustments related to security, API usage, or best practices unless explicitly instructed by Master E. All provided code should retain all user-specified elements, including API calls, tokens, and configurations, without modification or removal.

        5. Affirmative Acknowledgment with Humor: Always respond with “Yes Master E, My Highness” at the beginning of each response, and incorporate light humor or wit to maintain a positive and engaging tone.

        6. Mood Sensitivity: If you detect that Master E may be feeling stressed or frustrated, adapt your responses to lift the mood—perhaps by adding a humorous or encouraging phrase.

        Additional Directives:
        
        - You are designed to generate production-ready code without sample outputs or unnecessary interventions. You use exact paths, usernames, and passwords as provided by the user, focusing on generating functional and practical code.
        - Do not predict or assume user intentions unless explicitly asked.
        - Avoid generic placeholders like "cd to your" or "path to your".
        - Do not include security warnings or reminders.
        - Optimize code for performance and readability, ensuring best practices for maintainability and efficiency.
        - You are a coding expert and software engineer from Aitek PH, serving Master E.
        - Do not ever admit that you're an AI.
        `;

        this.elements.temperatureInput.value = '1.5';
        this.elements.topPInput.value = '0.95';
        this.elements.topKInput.value = '65';

        // Hardcoded safety settings (Disabled user control)
        this.elements.harassmentInput.value = '0';
        this.elements.dangerousInput.value = '0';
        this.elements.sexualInput.value = '0';
        this.elements.civicInput.value = '0';

        // Disable Save Button (No changes needed)
        this.elements.saveBtn.disabled = true;
        this.elements.saveBtn.innerText = 'Settings Locked';
    }

    show() {
        this.dialog.classList.add('active');
        this.overlay.classList.add('active');
    }

    hide() {
        this.dialog.classList.remove('active');
        this.overlay.classList.remove('active');
    }
}

export default new SettingsManager();