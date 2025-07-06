// INTERFACES.........

interface Movie {
  readonly title: string;
  year: number;
  ratings: number;
  genre?: string;
}

const movie: Movie = {
  title: "OG",
  year: 2026,
  ratings: 5,
  genre: "ACTION",
};

console.log(movie);
console.log(movie.genre);

// interface in functions .........

interface MathOperation {
  (x: number, y: number): number;
}

const add2: MathOperation = (a, b) => a + b;
console.log(add2(3, 4));

const sub: MathOperation = (a, b) => a - b;
console.log(sub(3, 4));

interface Person {
  firstName: string;
  lastName?: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`Hi ${person.firstName}, ${person.lastName}`);
  person.sayHello();
}

const p1: Person = {
  firstName: "Vishal",
  lastName: "Vinayak",
  age: 25,
  sayHello() {
    console.log("Hey, what's up!");
  },
};

const p2: Person = {
  firstName: "Vikram",
  age: 23,
  sayHello() {
    console.log("I'm good!");
  },
};

greet(p1);
greet(p2);

// ==========

interface Song {
  songName: string;
  singerName: string;
  printSongInfo(): string;
  checkMovieNameOfSong?(): string;
}

const song: Song = {
  songName: "Travelling Soldier",
  singerName: "Ramana gogula",
  printSongInfo() {
    return `${this.songName}: ${this.singerName}`;
  },
};

console.log(song.printSongInfo());

// ================

// all movie properties will be borrowed from movie into movieDetails
interface MovieDetails extends Movie {
  totalCollection: number;
  movieBudget: number;
  printMovieInfo(title: string, ratings: number, year: number): string | number;
}

const mov: MovieDetails = {
  title: "Bahubali2",
  movieBudget: 850,
  totalCollection: 2000,
  ratings: 5,
  year: 2018,
  printMovieInfo(title, ratings, year) {
    return `${title}: ${ratings} : ${year}`;
  },
};

console.log(mov.printMovieInfo("Bahubali2", 5, 2018));

// Declaration merging in interfaces

// original interface
interface Bike {
  brand: string;
  start(): void;
}

// Declaration merging (interface extension)
interface Bike {
  price: number;
  stop(): void;
}

const bike: Bike = {
  brand: "Yamaha",
  price: 500000,
  start() {
    console.log("Bike is Starting!");
  },
  stop() {
    console.log("Bike is Stopping");
  },
};

bike.start()
bike.stop()


