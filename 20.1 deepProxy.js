let father = {
  name: 'lisi',
  age: 40,
  children: {
    son1: {
      name: 'liming',
      age: 1,
    },
    son2: {
      name: 'lihong',
      age: 3,
    }
  }
};

function makeProxy() {
  return new Proxy(target, {
    get(target, propKey, propValue, proxyObj) {

    },
    set(target, propKey, propValue, proxyObj) {

    }
  })
}



let proxy = makeProxy(father);