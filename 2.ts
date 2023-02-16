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
