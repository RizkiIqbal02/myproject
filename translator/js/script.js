const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchageIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),

// catatan ternary condition
// kondisi ? ekspresiJikaTrue : ekspresiJikaFalse


selectTag.forEach((tag, id) => {
    for (let country_code in countries) { // mengambil object dari countries.js dan menampung-nya pada variable country_code
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "id-ID" ? "selected" : ""; // Ternary perkondisian mengambil country_code
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`; // mengubah option value nya yang diambil langsung dari variable selected hasil ternary
        tag.insertAdjacentHTML("beforeend", option); // mengappend isi variable option ke last child dari parameter tag
    }
});

exchageIcon.addEventListener("click", () => { // menambahkan event
    let tempText = fromText.value, // menampung apapun value dari yang diketikkan pada text area
    tempLang = selectTag[0].value; // menampung apapun value dari tag select pada index 0
    fromText.value = toText.value; // menimpa value text area sesudahnya ke text area sebelumnya
    toText.value = tempText; // menimpa text sesudahnya dengan value text sementara
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => { // counter untuk bug tyduck ada text/value
    if(!fromText.value) {
        toText.value = "";
    }
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(),
    translateFrom = selectTag[0].value, // menampung value select index 0
    translateTo = selectTag[1].value; // menampung value select index 1
    if(!text) return; // counter untuk bug tyduck ada text/value
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`; // format : text idFrom idTo
    fetch(apiUrl).then(res => res.json()).then(data => { //AJAXXXXX
        toText.value = data.responseData.translatedText; // mengambil response ajax dan memasukkan ke dalam value to text
        data.matches.forEach(data => {
            if(data.id === 0) {
                toText.value = data.translation;
            }
        });
        toText.setAttribute("placeholder", "Translation"); // menimpa placeholder dengan text yang telah di terjemahkan
    });
});

icons.forEach(icon => { // menentukan fungsi setiap icon
    icon.addEventListener("click", ({target}) => {
        if(!fromText.value || !toText.value) return; 
        if(target.classList.contains("fa-copy")) {
            if(target.id == "from") { // fungsi salin ke clipboard
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            let utterance;
            if(target.id == "from") { // menambahkan speech menggunakan speech synthesis utterance
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});