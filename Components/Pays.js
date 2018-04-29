import React from 'react'
import { StyleSheet, ScrollView, View, TouchableHighlight, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'

class Pays extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            pays: {
                'fr': false,
                'us': false,
                'uk': false,
                'ar': false
            }
        }
        this.isChecked = this.isChecked.bind(this);
    }

    pressOnCountry(pays) {
        const keysPays = Object.keys(this.state.pays);
        const newState = {  
                            'fr': false,
                            'us': false,
                            'uk': false,
                            'ar': false
                        }

        for (var i in keysPays) {
            if ( keysPays[i] == pays ) { 
                newState[pays] = true;
             }
        }

        this.setState({
            pays: newState
        })
    }

    isChecked(pays) {
        return (
            pays ? <Image
                    source={require('../src/images/checked.png')}
                    style={ styles.styleCheckIcon }
                    />
                 :
                    <View style={ styles.circle}>
                    </View>
        )
    }

    handleSubmit = () => {
        this.props.navigation.navigate("Categories")
    }

    render () {
        const { fr, us, uk, ar } = this.state.pays

        return (
            <ScrollView style={ styles.container }>
                <TouchableHighlight style={ styles.wrapper_block } onPress={ () => {this.pressOnCountry('fr')}} >
                    <View style={ styles.container_pays }>
                        {this.isChecked(fr)}
                        <Image 
                            source={require('../src/images/fr.png')}
                            style={ styles.styleImage } />
                        <Text style={ styles.label} >Français</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={ styles.wrapper_block } onPress={ () => {this.pressOnCountry('us')}}>
                    <View style={ styles.container_pays }>
                        {this.isChecked(us)}
                        <Image 
                            source={require('../src/images/us.png')}
                            style={ styles.styleImage } />
                        <Text style={ styles.label} > Anglais (États-Unis)</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={ styles.wrapper_block } onPress={ () => {this.pressOnCountry('uk')}}>
                    <View style={ styles.container_pays }>
                        {this.isChecked(uk)}
                        <Image 
                            source={require('../src/images/uk.png')}
                            style={ styles.styleImage } />
                        <Text style={ styles.label} >Anglais (Angleterre)</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={ styles.wrapper_block } onPress={ () => {this.pressOnCountry('ar')}}>
                    <View style={ styles.container_pays }>
                        {this.isChecked(ar)}
                        <Image 
                            source={require('../src/images/ar.png')}
                            style={ styles.styleImage } />
                        <Text style={ styles.label} >Espagnol (Argentine)</Text>
                    </View>
                </TouchableHighlight>

                <Button large iconRight={{name: 'check'}} title='Valider' buttonStyle={styles.styleButton} onPress={this.handleSubmit} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#034f84',
    },
    wrapper_block: {
        marginTop: 10,
        width: '94%',
        marginLeft: '3%',
        borderRadius: 5
    },
    container_pays: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        padding: 15,
        borderRadius: 5,
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#3db39e',
        marginRight: 24
    },
    styleImage: {
        width: 50,
        height: 50,
    },
    styleCheckIcon: {
        width: 24,
        height: 24,
        marginRight: 24
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 24
    },
    styleButton: {
        backgroundColor: '#3D9970',
        marginTop: 10
    }
  });

export default Pays