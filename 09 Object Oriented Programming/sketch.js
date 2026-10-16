// Objects Demo
// Mason Wick
// 10/14/26

let myBook;
let jacksBook;
let bestBook;
let randomBook;
let badBook;

let books;

async function setup() {
  createCanvas(windowWidth, windowHeight);
   books = [myBook, jacksBook, bestBook, randomBook, badBook];
  myBook = new Book("The Great Gatsby", "F. Scott Fitzgeral", "978-0-7432-7356-5", "leatherbound", 1000, width * 0.4);
  jacksBook = new Book("Jack's Life", "Jack Breckon", "7", "hardcover", 1, width * 0.2);
  bestBook = new Book("The Best Book Ever", "The best person ever", 1, "softcover", 100, width * 0.3);
  randomBook = new Book("Book of Random", "Mr.Randoms", random(0, 100000), "leatherbound", random(0, 1000), width / 0.5);
  badBook = new Book("Bad", "Mr.Mean", 666, "softcover", 666, width / 0.6);
}

function draw() {
  background(220);
  for (let i = 0; i < books.length; i++) {
    books[i].display;
  }
}


// Classes are organized into the bottom of our file or their own file.

class Book {
  // 1. Constructer
  constructor(title, author, isbn, cover, pages, x) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }

  // 2. Class Functitions
  // Inside a class, we omit the "function" keyword
  display() {
    // render our book object on the canvas
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(20);

    // Set fill color based on coverType (H, S, L)
    switch(this.cover) {
      case "softcover":
        fill(220, 220, 0); 
        break;
      case "hardcover":
        fill(100, 255, 255);
        break;
      case "leatherbound":
        fill(150, 0, 150);
        break;
    }

    // Finaly draw the book spine

    rect(this.x, height/2, this.pages/10, 150);
    fill(255);
    text(this.title[0], this.x, height / 2 + 50);

  }
}