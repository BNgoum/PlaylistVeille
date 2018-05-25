import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Search from './Components/Search';
import Categories from './Components/Categories';
import Authentification from './Components/Authentification';
import Pays from './Components/Pays';
import Navigation from './Navigation/Navigation';
import Playlists from './Components/Playlists';
import Abonnements from './Components/Abonnements';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    const viewToDisplay = isLoggedIn ? (
      <Navigation />
    ) : (
      <Authentification />
    )
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034f84',
  },
});