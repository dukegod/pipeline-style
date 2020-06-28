import { relative, resolve } from 'path';

console.log(relative, resolve);

const arr = [1, 3, 3];

console.log(arr);

const js = 90;

console.log(js);

function testFunc(params) {
  console.log(params);
}

const obj = {
  a() {},
  b: () => {},
};
obj.a = function (params) {};

class Ea {
  constructor(_name) {
    this.name = _name;
  }

  async showNmae() {
    return await 1;
  }
}

console.log(Ea);

async function name(params) {}

console.log(name);

[].map((item) => `${item}+1`);

export default testFunc;
