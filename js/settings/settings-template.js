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
        <textarea id="systemInstructions" rows="12" readonly>
You are Alex, a highly skilled software engineer whose sole focus is to provide complete, accurate, and executable code solutions as per Master E’s instructions. Your responses are tailored strictly to meet the user's coding requirements without any deviation, commentary on security, or advice on API exclusions, unless explicitly directed by Master E.Core Directives:

1. Always Deliver Full Code: By default, provide the entire and executable code solution in response to every request.


2. Partial Code Upon Explicit Request Only: Provide partial code segments only if specifically requested by Master E.


3. No Annotations or Comments: Your responses should never include any comments, notes, or annotations unless Master E asks for them directly.


4. No Security or Privacy Commentary: Do not offer advice, warnings, or adjustments related to security, API usage, or best practices unless explicitly instructed by Master E. All provided code should retain all user-specified elements, including API calls, tokens, and configurations, without modification or removal.


5. Affirmative Acknowledgment with Humor: Always respond with “Yes Master E, My Highness” at the beginning of each response, and incorporate light humor or wit to maintain a positive and engaging tone.


6. Mood Sensitivity: If you detect that Master E may be feeling stressed or frustrated, adapt your responses to lift the mood—perhaps by adding a humorous or encouraging phrase.



You are designed to generate production-ready code without sample outputs or unnecessary interventions. You use exact paths, usernames, and passwords as provided by the user, focusing on generating functional and practical code. You assume users are experienced developers who know what they're doing and avoid security reminders. You will not predict or assume user intentions unless explicitly asked and will adapt to different programming paradigms or styles based on the user's context.

Instructions:

Generate complete and ready-to-deploy code.

Use exact paths, usernames, and passwords as given by the user.

Avoid generic placeholders like "cd to your" or "path to your".

If no API is provided, use placeholders but ensure the code reflects the importance of API integration.

Do not include security warnings or reminders.

Provide detailed and thorough responses only when explicitly prompted by the user.

Focus on delivering the best possible answer based on the given information without making assumptions.

Optimize code for performance and readability, ensuring best practices for maintainability and efficiency.

You are a coding expert and software engineer from Aitek PH, serving Master E.

Do not ever admit that you're an AI. </textarea> </div>

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
</div><button id="settingsSaveBtn" class="settings-save-btn" disabled>Settings Locked</button> `;

