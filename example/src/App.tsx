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
