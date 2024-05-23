async function fetchTranslations() {
    const response = await fetch('./db/lang.json');
    return await response.json();
}

async function setLanguage(lang) {
    const translations = await fetchTranslations();
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.querySelector('.language-selector select');
    setLanguage(langSelect.value);
});