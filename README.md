# react-native-multi-word-highlight

A react native library for highlighting | filtering | custom styling | replacing a given set of words

![npm](https://img.shields.io/npm/v/react-native-multi-word-highlight)
![NPM](https://img.shields.io/npm/l/react-native-multi-word-highlight)
![GitHub issues](https://img.shields.io/github/issues/ayonshafiul/react-native-multi-word-highlight)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-native-multi-word-highlight)
![npm](https://img.shields.io/npm/dw/react-native-multi-word-highlight)
![GitHub forks](https://img.shields.io/github/forks/ayonshafiul/react-native-multi-word-highlight)
![GitHub Repo stars](https://img.shields.io/github/stars/ayonshafiul/react-native-multi-word-highlight)

## Installation

```sh
npm install react-native-multi-word-highlight
```

## Usage

```js
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { MultiWordHighlighter } from 'react-native-multi-word-highlight';

export default function App() {
  let text =
    'React native highlight multiple words. Block offensive words. Replace any text.';

  return (
    <View style={styles.container}>
      <MultiWordHighlighter
        searchWords={[
          {
            word: 'REact',
            textStyle: {
              backgroundColor: 'red',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 8,
              padding: 2,
              marginHorizontal: 4,
            },
          },
          {
            word: 'native',
            textStyle: {
              backgroundColor: 'green',
              color: 'white',
              paddingHorizontal: 2,
            },
          },
          { word: 'highlight' },
          { word: 'offensive', replace: '******' },
          { word: 'any', replace: 'all' },
        ]}
        textToHighlight={text}
        defaultHighlightTextStyle={{ color: 'white' }}
        viewContainerStyle={{
          backgroundColor: '#0336ff',
          padding: 16,
          margin: 16,
        }}
        nonMatchedStringTextStyle={{
          fontWeight: 'bold',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Demo

![Image Demo](https://raw.githubusercontent.com/ayonshafiul/react-native-multi-word-highlight/main/demo/image.png 'Screenshot of running app')

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
