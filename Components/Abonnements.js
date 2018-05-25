import React from 'react'
import { StyleSheet, ScrollView, View, TouchableHighlight, Text, Image, AsyncStorage, TextInput } from 'react-native'
import { Button } from 'react-native-elements'

class Abonnements extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            abonnements: ''
        }
    }

    handleSubmit = () => {
        AsyncStorage.setItem('abonnement', this.state.abonnements);

        var params = '';

        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
              stores.map((result, i, store) => {
                // get at each store's key/value so you can work with it
                let key = store[i][0];
                let value = store[i][1];
                /* console.log('Key : ' + key);
                console.log('Value : ' + value); */


                if (i == 0) {
                    params = params + key + '=' + value;
                } else {
                    params = params + '&' + key + '=' + value;
                }                
                
              });
                let uri = 'https://api-playlist-veille-ecv.herokuapp.com/api/inscription?' + params;
                console.log('#### URI : ' + uri);

                return fetch(uri, { method: 'POST', headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'}})
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.error) {
                        console.log('Inscription echouée');
                    } else {
                        console.log('Inscription OK !');
                        this.props.navigation.navigate("Accueil");
                    }
                })
                .catch((error) => {
                console.error(error);
                });
            });
        });

        

        
    }

    render () {

        return (
            <ScrollView style={ styles.container }>
                <View style={ styles.wrapper_block }>
                    <Text style={styles.styleText}>Liste de vos abonnements (placer une virgule entre chaque abonnement)</Text>
                    <TextInput onChangeText={(text) => this.setState({abonnements:text})} value={this.state.abonnements} placeholder='Entrez vos abonnements...' style={styles.styleInputText} />
                </View>
                <Button large iconRight={{name: 'check'}} title='Valider' buttonStyle={styles.styleButton} onPress={this.handleSubmit} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#034f84',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 25
    },
    wrapper_block: {
        
    },
    styleInputText: {
        marginTop: 15,
        marginBottom: 15,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        color: 'white',
        borderColor: 'white'
    },
    styleText: {
        marginTop: 10,
        marginLeft: 10,
        color: 'white'
    },
    styleButton: {
        backgroundColor: '#3D9970',
        marginTop: 10
    }
  });

export default Abonnements