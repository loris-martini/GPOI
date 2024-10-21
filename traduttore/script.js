
const langButtons = document.querySelectorAll('.lang-button');
const textInput = document.querySelector('.text-input');
const translationText = document.querySelector('.translation-text');
const translationFlag = document.querySelector('.translation-flag');
const resetButton = document.querySelector('.reset-button');

async function translation(text, lang, flag){
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=it|${lang}`;
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

resetButton.addEventListener('click', function(){
    textInput.value = '';
    translationText.innerText = 'Traduzione';
    translationFlag.innerText = '';
})