
class BookList{
    constructor(read,unread,nextBook,currenBook,lastBook,lists){
        this.read = read,
        this.unread =unread,
        this.nextBook = nextBook,
        this.currenBook = currenBook,
        this.lastBook =lastBook
        this.lists = lists
    }
    add(book){
     return this.lists.push('book6','book7', 'book8');

    }
    finishedCurrentBook(){

    }
}

const booklist1 = new BookList(5, 10, 'book3', 'book4', 'book5', ['js beginners', 'js Inter', 'Js Advance']);
console.log(booklist1);
console.log(booklist1.add())

class Book{
    constructor(title,genre,author,read,date){
        this.title = title,
        this.genre = genre,
        this.author = author,
        this.read = read,
        this.date = date

    }
}

const book1 = new Book('Js Fundamentals', 'programming', 'john doe', false, 'july 7')
console.log(book1);
