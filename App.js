import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search';
import Categories from './Components/Categories';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Categories />
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
