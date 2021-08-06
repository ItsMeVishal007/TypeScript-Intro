let apple: number = 5;
let speed: String = "100km/hr";
let hasName: boolean = true;
let nullVar: null = null;
let undefinedVar: undefined = undefined;
let date: Date = new Date();
let color: string[] = ["red", "blue", "green"];
let numArray: number[] = [1, 2, 3];
let booleanArr: boolean[] = [true, false, true];

class fruit {}
let orange: fruit = new fruit();

// objects literals

let points: { x: number; y: number } = {
  x: 20,
  y: 10,
};

// Functions

const addNum: (a: number, b: number) => number = (a: number, b: number) => {
  return a + b;
};
