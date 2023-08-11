import React, { useMemo } from 'react';
// @ts-ignore
import LineBreaker from 'linebreak';
import type { ViewStyle, TextStyle } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';

export type MultiWordHighlighterProps = {
  /**
   * Array of words to higlight/replace/style
   */
  searchWords: SearchWordConfig[];
  /**
   * The text in which to search for words
   */
  textToHighlight: string;
  /**
   * Match case while searching for words
   */
  caseSensitive?: boolean;
  /**
   * Custom styling for the container view
   */
  viewContainerStyle?: ViewStyle;
  /**
   * Default style applied for all matched words which doesn't contain textStyle
   * If textStyle is supplied, defaultHighlightTextStyle will be ignored
   */
  defaultHighlightTextStyle?: TextStyle;
  /**
   * Style applied for all non matching text
   */
  nonMatchedStringTextStyle?: TextStyle;
  /**
   * If replace is not supplied for a word, this value will be used as default replacing value
   */
  replaceAllMatchedTextWith?: string;
};

export type SearchWordConfig = {
  /**
   *  word to search for
   */
  word: string;
  /**
   * replace matched word with this value
   */
  replace?: string;
  /**
   * style for matched text
   */
  textStyle?: TextStyle;
};

type WordToSearcWordConfigMap = {
  [key: string]: SearchWordConfig;
};

export default function MultiWordHighlighter(props: MultiWordHighlighterProps) {
  const {
    searchWords,
    textToHighlight,
    caseSensitive = false,
    viewContainerStyle = null,
    defaultHighlightTextStyle = null,
    nonMatchedStringTextStyle,
    replaceAllMatchedTextWith,
  } = props;

  const words = useMemo(() => {
    let arr = [];
    const breaker = new LineBreaker(textToHighlight);
    let last = 0;
    let bk;

    while ((bk = breaker.nextBreak())) {
      var word = textToHighlight.slice(last, bk.position);
      arr.push(word);
      last = bk.position;
    }
    return arr;
  }, [textToHighlight]);

  const wordToConfigMap = useMemo(() => {
    let map: WordToSearcWordConfigMap = {};
    searchWords.forEach((searchWord) => {
      let key = searchWord.word;
      if (!caseSensitive) {
        key = key.toLowerCase();
      }
      map[key] = searchWord;
    });
    return map;
  }, [searchWords, caseSensitive]);

  return (
    <View style={[styles.viewContainerStyle, viewContainerStyle]}>
      {words.map((w, idx) => {
        const text = w;
        let key = text.replace(/[^a-zA-Z0-9]/, '');
        if (!caseSensitive) {
          key = key.toLowerCase();
        }
        if (wordToConfigMap[key]) {
          return (
            <Text
              key={idx}
              style={[
                wordToConfigMap[key]?.textStyle
                  ? wordToConfigMap[key]?.textStyle
                  : defaultHighlightTextStyle,
              ]}
            >
              {wordToConfigMap[key]?.replace
                ? text.replace(key, wordToConfigMap[key]?.replace!)
                : replaceAllMatchedTextWith
                ? text.replace(key, replaceAllMatchedTextWith)
                : text}
            </Text>
          );
        } else {
          return (
            <Text
              key={idx}
              style={
                nonMatchedStringTextStyle ? nonMatchedStringTextStyle : null
              }
            >
              {text}
            </Text>
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
