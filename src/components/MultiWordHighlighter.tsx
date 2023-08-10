import React from 'react';
import { findAll } from 'highlight-words-core';
import type { ViewStyle } from 'react-native';
import type { TextStyle } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

export type MultiWordHighlighterProps = {
  searchWords: SearchWordConfig[];
  textToHighlight: string;
  autoEscape?: boolean;
  caseSensitive?: boolean;
  sanitize?: boolean;
  viewContainerStyle?: ViewStyle;
  defaultHighlightTextStyle: TextStyle;
  replaceAllMatchedTextWith?: string;
};

export type SearchWordConfig = {
  word: string;
  replace?: string;
  textStyle?: TextStyle;
};

type WordToSearcWordConfigMap = {
  [key: string]: SearchWordConfig;
};

export default function MultiWordHighlighter(props: MultiWordHighlighterProps) {
  const {
    autoEscape = false,
    searchWords,
    textToHighlight,
    caseSensitive = false,
    viewContainerStyle = {},
    defaultHighlightTextStyle = {},
    replaceAllMatchedTextWith,
  } = props;

  const searchWordsArray = searchWords.map((searchWord) => searchWord.word);
  const wordToConfigMap: WordToSearcWordConfigMap = {};
  searchWords.forEach((searchWord) => {
    wordToConfigMap[searchWord.word] = searchWord;
  });

  const chunks = findAll({
    autoEscape,
    searchWords: searchWordsArray,
    textToHighlight,
    caseSensitive,
  });
  return (
    <View style={[styles.containerStyle, viewContainerStyle]}>
      {chunks.map((chunk, idx) => {
        const { end, highlight, start } = chunk;
        const text = textToHighlight.substr(start, end - start);
        if (highlight) {
          return (
            <Text
              key={idx}
              style={[
                wordToConfigMap[text]?.textStyle
                  ? wordToConfigMap[text]?.textStyle
                  : defaultHighlightTextStyle,
              ]}
            >
              {wordToConfigMap[text]?.replace
                ? wordToConfigMap[text]?.replace
                : replaceAllMatchedTextWith
                ? replaceAllMatchedTextWith
                : text}
            </Text>
          );
        } else {
          return <Text key={idx}>{text}</Text>;
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
