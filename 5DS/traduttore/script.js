const fromLangButtons = document.querySelectorAll('.from-lang-button');
const langButtons = document.querySelectorAll('.lang-button');
const textInput = document.querySelector('.text-input');
const translationText = document.querySelector('.translation-text');
const translationFlag = document.querySelector('.translation-flag');
const resetButton = document.querySelector('.reset-button');
const translationBox = document.querySelector('.translation');
const controlsBox = document.querySelector('.controls');
var from = 'it';

translationBox.style.display = 'none';
controlsBox.style.display = 'none';

async function translation(text, lang, flag){
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${lang}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    translationText.innerText = jsonData.responseData.translatedText;
    translationFlag.innerText = flag;
}

langButtons.forEach(function(langButton){
    langButton.addEventListener('click', function(){ 
        const text = textInput.value;
        const lang = langButton.dataset.lang;
        const flag = langButton.innerText;
        translation(text,lang,flag);
    });
});

fromLangButtons.forEach(function(fromLangButton){
    fromLangButton.addEventListener('click', function(){
        from = fromLangButton.dataset.fromLang;
        translationBox.style.display = 'flex';
        controlsBox.style.display = 'flex';
    })
})

resetButton.addEventListener('click', function(){
    textInput.value = '';
    translationText.innerText = 'Traduzione';
    translationFlag.innerText = '';
})