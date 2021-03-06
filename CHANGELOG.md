# Changelog

## v1.1.0
Released July 20, 2017

### Changed
- New dictionary! You can only use noun.
- Disable the use of the compound word.

## v1.0.1
Released July 16, 2017

### Fixed
- Fix a critical bug.

## v1.0.0
Released July 16, 2017

Hello World!

### Changed
- Ignore case on the command; `GG`, `Gg`, `gg`, etc.
- More easier bot!

## v0.4.1
Released July 14, 2017

### Fixed
- Fix initial rule bug.

## v0.4.0
Released July 13, 2017

### Changed
- ES6 syntax with Babel!
- Change some API on none-babel code:
```javascript
const chainer = require('word-chainer');

const bot = new chainer.WordChainer(chainer.EasyLevel);
```
- Change the command; `npm run test-helper`

## v0.3.1
Released July 11, 2017

### Fixed
- Fix a starting word bug.

## v0.3.0
Released July 10, 2017

### Added
- Add `Dictionary.getWordScore` method.
- Add `helper.js` for test.

### Changed
- Change the algorithm of the rule. Remove the classes and add an enum.

## v0.2.0
Released July 7, 2017

### Added
- Add LearningAI function to improve a bot intelligence. The AI will analyse your word pattern.

## v0.1.1
Released July 4, 2017

### Fixed
- Fix critical bug on finding a word dictionary path.

## v0.1.0
Released July 3, 2017

First Release