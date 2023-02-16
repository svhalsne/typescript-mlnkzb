export {};

type Column = {
  width: number;
  name: string;
  position: number;
  visible: boolean;
};

type PublicColumn = Pick<Column, 'width' | 'position'>;

type NonPublicColumn = Omit<Column, 'name'>;

const object: Record<string, number> = {};

object['test'] = 5;

const decorator1 = () => {
  return (base: new () => any) => {
    return class extends base {
      name: string | undefined;
    } as any;
  };
};

const methodDecorator = () => {
  return (target: any, prop: any) => {
    const original = target[prop];

    target[prop] = function (v: string) {
      original.call(this);
      target.logHistory.push(v);
    };
  };
};

@decorator1()
class DecClass {
  logHistory: string[] = [];
  @methodDecorator()
  public log(v: string) {
    console.log(v);
    this.logHistory.push(v);
  }
}
