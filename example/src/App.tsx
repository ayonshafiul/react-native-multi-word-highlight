import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { MultiWordHighlighter } from 'react-native-multi-word-highlight';

export default function App() {
  const [text, _] = React.useState<string>('React native multi word highlight');

  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Original Text: {text}</Text>
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
