const chainer = require('../lib/WordChainer');

const bot = new chainer.WordChainer(chainer.EasyLevel, 'testA');
const bot2 = new chainer.WordChainer(chainer.NormalLevel, 'testB');

const history = [];

let word = '과일';
console.log(`Start:${word}`);
history.push(`Start:${word}`);

try {
  while (true) {
    word = bot.next(word);
    if (word === null) {
      break;
    }
    console.log(`A:${word}`);
    history.push(`A:${word}`);

    word = bot2.next(word);
    if (word === null) {
      break;
    }
    console.log(`B:${word}`);
    history.push(`B:${word}`);
  }
} catch (e) {
  console.log(e.toString());
}
