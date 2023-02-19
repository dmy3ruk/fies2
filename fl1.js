//читання файлу і виведення його контенту
const fs = require('fs');
function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data)=>{
        if (err) throw err;
       console.log(data);
    });
}
//створення файлу на диску з певним контентом
function createFile(filePath, content){
    fs.writeFile(filePath, content, (err)=>{
        if (err) throw err;
        console.log('The file has been created');})
        return true;
}

//додавання вмісту до раніше створеного файлу
function appendToFile (filePath, content){
    fs.appendFile(filePath, content, (err)=>{
        if (err) throw err;
        console.log('Content has been added to the file');})
}

//видалення файлу з диску
 function deleteFile(filePath){
    try {
       fs.unlinkSync(filePath);
        console.log('file has been deleted')
    } catch (err){
 console.log('file does not exist')
    }
}
//перенесення файлу з одної папки в іншу
function moveFile (sourcePath, destinationPath){
    fs.rename(sourcePath, destinationPath, (err)=>{
        if (err) throw err
     console.log('The file has been moved');
    });
}
createFile('acotar.txt', 'Rhysand is the most handsome High Lord')
readFile('acotar.txt')
appendToFile('acotar.txt', 'Rhysand is the most delightful High Lord')
createFile('TOG.txt', '')
appendToFile('TOG.txt', 'Let`s go rattle the stars')
readFile('TOG.txt')
createFile('fbaa.txt', 'Casteel Da`Neer, the second son of king Valin Da`Neer, brother of Malic Da`Neer')
createFile('multiverse.txt', ' ')
deleteFile('multiunivrse.txt')
moveFile('fbaa.txt', './cde.txt')