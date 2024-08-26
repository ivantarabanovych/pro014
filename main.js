function replacePlace(text, oldPhrase, newPhrase) {
    const phrase = new RegExp(oldPhrase, 'g'); 
    return text.replace(phrase, newPhrase);    
}

const originalText = "Це тестовий рядок. Тестовий рядок повинен бути змінений.";
const modifiedText = replacePlace(originalText, "тестовий", "змінений");

console.log(modifiedText);