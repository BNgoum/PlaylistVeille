import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableHighlight, Image } from 'react-native'
import { Button, FormInput } from 'react-native-elements'

class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomPlaylist: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = () => {
        this.props.navigation.navigate("Pays")
    }

    handleChange(event) {
    }

    render() {
        console.log('Nom : ', this.state.nomPlaylist)
        return (
            <View style={ styles.container } >
                <View style={ styles.wrapper_input} >
                    <Text style={styles.styleH2}>Nom de la Playlist</Text> 
                    <FormInput placeholder="Saisissez votre adresse mail" inputStyle={styles.styleInput} onChangeText={this.handleChange} />
                </View>
                <Button large iconRight={{name: 'check'}} title='Suivant' buttonStyle={styles.styleButton} onPress={this.handleSubmit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#034f84'
    },
    wrapper_input: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 20,
        borderRadius: 5
    },
    styleH2: {
        fontSize: 16
    },
    styleButton: {
        backgroundColor: '#3D9970',
        marginBottom: 30,
    },
    styleInput: {
        padding: 10,
        fontSize: 14
    },
})

export default CreatePlaylist