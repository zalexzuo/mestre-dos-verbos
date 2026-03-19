body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    background-color: #f0f4f8;
    display: flex;
    justify-content: center;
    padding: 20px;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
    width: 100%;
    max-width: 550px;
}

.app-title {
    color: #1a202c;
    text-align: center;
    margin: 0;
    font-size: 1.8rem;
}

.app-subtitle {
    text-align: center;
    color: #718096;
    margin-bottom: 25px;
    font-size: 0.85rem;
    letter-spacing: 1px;
}

.input-section {
    margin-bottom: 1.5rem;
}

.input-section label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 5px;
}

#verb-input {
    width: 100%;
    padding: 12px;
    border: 2px solid #edf2f7;
    border-radius: 12px;
    font-size: 1rem;
    box-sizing: border-box;
}

#display-area {
    background: #ebf8ff;
    padding: 1.5rem;
    border-radius: 15px;
    margin-bottom: 1.5rem;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #bee3f8;
}

#display-text {
    font-size: 1.3rem;
    font-weight: bold;
    color: #2b6cb0;
    text-align: center;
    line-height: 1.5;
}

.btn-generate {
    background: #38a169;
    color: white;
    border: none;
    padding: 16px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.2s;
    width: 100%;
    margin-bottom: 2rem;
}

.btn-generate:hover {
    background: #2f855a;
    transform: translateY(-1px);
}

.settings-section h3 {
    font-size: 1rem;
    color: #2d3748;
    border-left: 4px solid #38a169;
    padding-left: 10px;
    margin-bottom: 15px;
}

.mode-container {
    background: #f7fafc;
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 15px;
    border: 1px solid #edf2f7;
}

.mode-container h4 {
    margin: 0 0 10px 0;
    font-size: 0.9rem;
    color: #4a5568;
    text-transform: uppercase;
}

.checkbox-group {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
}

.person-group {
    grid-template-columns: 1fr 1fr;
}

label {
    font-size: 0.9rem;
    color: #4a5568;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
}

hr {
    border: 0;
    border-top: 1px solid #e2e8f0;
    margin: 8px 0;
}

.compound {
    color: #718096;
    font-style: italic;
}