export {};

const number: number = 1;
const string: string = '1';
const array: Array<string> = ['1', '2'];
const bool: boolean = true;

const variable1 = 5;

const variable2: {
  id: string;
  name: string;
} = {
  id: '1',
  name: '2',
}

function plus(number1: number, number2: number) {
  return number1 + number2;
}

const result = plus(1, 2);

class Test {
  public bake() {

  }

  private bake2() {

  }

  protected bake3() {

  }

  #bake4() {

  }
}

new Test().bake()

function returnSomething<T>(input: T) {
  return input;
}

const result1 = returnSomething(2);

const result3 = returnSomething({
  id: 1,
  name: "Sven"
} as const);

class TestClass<T> {
  public type: T;
}

const cls = new TestClass<string>();
const type = cls.type;


type Måltid = 'Middag' | 'Frokost';

const mat: Måltid = 'Frokost';

interface IPerson extends IAlive {
  id: string;

}

interface IAlive {
  pulse: boolean;
}

class Person implements IPerson {
  pulse: boolean;
  id: string;

}

abstract class Rock {
  
  abstract size: number;
  
  throw() {

  }
}

class Mountain extends Rock {
  size: number;

  override throw() {
    
  }
}