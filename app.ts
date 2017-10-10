class Test{
    constructor(public message: string){
        console.log('test')
    }
}
var hello = new Test('Testing')
console.log('testing')
function GetAllBooks(): Array<Object>{
    let books = [
        { title: 'Te45',  author: 'James Joyece', available: true},
        { title: 'Test02',  author: 'Thomas Kelvin', available: false},
        { title: 'Test03',  author: 'Tiger Wood', available: true}
    ];
    return books;
}
function LogFirstAvailable(books){
    let numberofBooks = books.length;
    let firstAvailable = '';
    for(let currentbook of books){
        if(currentbook.available){
            firstAvailable = currentbook.title;
            break;
        }
    }
    console.log('Total Books: '+numberofBooks);
    console.log('First Available: '+ firstAvailable);

}
const allBooks = GetAllBooks();
allBooks.push({ title: 'Test04',  author: 'Signi Sood', available: true});
LogFirstAvailable(allBooks);

enum Category {Proced, Fail, Success};

let setValue: Category = Category.Success;
console.log(Category[setValue]);
//Array Usages
let stringArray: Array<string> = ['top','bottom','corner'];
