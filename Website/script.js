// تابع تغییر زبان
function toggleLanguage() {
    var languageBtn = document.querySelector('.switch-btn');
    var body = document.querySelector('body');

    if (languageBtn.textContent === 'فارسی') {
        languageBtn.textContent = 'English';
        body.dir = 'ltr'; // تغییر جهت متن به چپ به راست
    } else {
        languageBtn.textContent = 'فارسی';
        body.dir = 'rtl'; // تغییر جهت متن به راست به چپ
    }
}
