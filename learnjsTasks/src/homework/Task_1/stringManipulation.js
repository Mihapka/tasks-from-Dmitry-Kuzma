
function customToUpperCase(word) {
    word.toLowerCase();
    return word[0].toUpperCase() + word.slice(1);
}
// TODO пробел после знака препинания
function properSpacing(str){
   return str = str.split(' ').filter(n => n).join(' ');
}

function WordCount(str) {
  return str.split(" ").length ;
}

function uniqueWordCount(text){
    let words = text.toLowerCase().replace(/[\s.,%]/g, ' ').split(" ");
    let wordsCount = words.reduce(function (acc, w) {
        if(acc[w]) {
            acc[w] += 1
        } else {
            acc[w] = 1;
        }

        return acc;
    }, {});
    let result = [];
    for (let w in wordsCount) {
        result.push(w + ' = ' + wordsCount[w] + ' ');
    };
    return result;
}

let word = 'qwerty';
let str = `Вот пример строки,в которой     используются знаки препинания.
    После знаков должны стоять пробелы , а перед знаками их быть не должно .
    Если есть лишние подряд идущие пробелы, они должны быть устранены
`;
let text = 'Текст, в котором слово текст несколько раз встречается и слово тоже';

alert( 'customToUpperCase: ' + customToUpperCase(word) );
alert( 'properSpacing: ' + properSpacing(str) );
alert( 'WordCount: ' + WordCount(str) );
alert( 'uniqueWordCount: ' + uniqueWordCount(text) );

