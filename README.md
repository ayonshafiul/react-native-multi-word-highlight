# react-native-multi-word-highlight

A react native library for highlighting | filtering | custom styling | replacing a given set of words

## Installation

```sh
npm install react-native-multi-word-highlight
```

## Usage

```js
import { MultiWordHighlighter } from 'react-native-multi-word-highlight';

<MultiWordHighlighter
  searchWords={[
    {
      word: 'React',
      replace: 'HTML',
      textStyle: {
        backgroundColor: 'red',
        color: 'white',
        padding: 2,
        textDecorationLine: 'line-through',
      },
    },
    {
      word: 'native',
      textStyle: { backgroundColor: 'blue', color: 'white', padding: 2 },
    },
    { word: 'highlight' },
  ]}
  textToHighlight={text}
  defaultHighlightTextStyle={{ color: 'red' }}
/>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
