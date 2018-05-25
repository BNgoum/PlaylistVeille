import React from 'react'
import axios from 'axios'
import { View, TextInput, StyleSheet, Image, Text, AsyncStorage } from 'react-native'
import { Button, FormInput } from 'react-native-elements'

class Authentification extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            pseudo: '',
            email: '',
            password: '',
            layoutLogin: true,
            jsonUser: ''
        }
    }

    handleSubmitSignIn(email, password) {
        let uri = 'https://api-playlist-veille-ecv.herokuapp.com/api/connexion?email=' + this.state.email + '&password=' + this.state.password;

        return fetch(uri)
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.error) {
                console.log('Connexion echouée');
            } else {
                console.log('Connexion OK !');
                this.setState({jsonUser: responseJson})
                console.log('State jsonUser : ', this.state.jsonUser);
                this.props.navigation.navigate("Accueil");
            }
        })
        .catch((error) => {
        console.error(error);
        });
    }

    handleSubmitSignUp(pseudo, email, password) {
        let keys = ['pseudo', 'email', 'password'];
        AsyncStorage.multiRemove(keys, (err) => {
            ('Local storage user info removed!');
        });

        AsyncStorage.multiSet([['nom', this.state.nom], ['prenom', this.state.prenom], ['pseudo', this.state.pseudo], ['email', this.state.email], ['password', this.state.password]]);
        this.props.navigation.navigate("Pays");
    }

    handleTextLink(bool) {
        this.setState({layoutLogin: bool})
    }

    render () {
        const layoutLogin = this.state.layoutLogin
        const layout = layoutLogin ? (
            <View style={styles.wrapperView}>
                <View style={styles.wrapperForm}>
                    <Text style={styles.styleH2}>Connexion</Text> 
                    <FormInput placeholder="Saisissez votre adresse mail" inputStyle={styles.styleInput} value={this.state.email} onChangeText={ (email) => this.setState({email})} />
                    <FormInput placeholder="Saisissez votre mot de passe" inputStyle={styles.styleInput} value={this.state.password} secureTextEntry={true} onChangeText={ (password) => this.setState({password})} />
                    <Button iconRight={{name: 'check'}} buttonStyle={styles.styleButton} title="Se connecter" onPress={ () => {this.handleSubmitSignIn(this.state.email, this.state.password)}}/>
                </View>
                <Text onPress={ () => {this.handleTextLink(false)}} style={styles.styleLink}>Pas encore inscrit ?</Text>
            </View>
        ) : (
            <View style={styles.wrapperView}>
                <View style={styles.wrapperFormInscription}>
                    <Text style={styles.styleH2}>Inscription</Text>   
                    <FormInput placeholder="Saisissez votre nom" inputStyle={styles.styleInput} value={this.state.nom} onChangeText={ (nom) => this.setState({nom})} />
                    <FormInput placeholder="Saisissez votre prénom" inputStyle={styles.styleInput} value={this.state.prenom} onChangeText={ (prenom) => this.setState({prenom})} />
                    <FormInput placeholder="Saisissez votre pseudo" inputStyle={styles.styleInput} value={this.state.pseudo} onChangeText={ (pseudo) => this.setState({pseudo})} />
                    <FormInput placeholder="Saisissez votre adresse mail" inputStyle={styles.styleInput} value={this.state.email} onChangeText={ (email) => this.setState({email})} />
                    <FormInput placeholder="Saisissez votre mot de passe" inputStyle={styles.styleInput} value={this.state.password} secureTextEntry={true} onChangeText={ (password) => this.setState({password})} />
                    <Button iconRight={{name: 'check'}} buttonStyle={styles.styleButton} title="Valider" onPress={ () => {this.handleSubmitSignUp(this.state.pseudo, this.state.email, this.state.password)}}/>
                </View>
                <Text onPress={ () => {this.handleTextLink(true)}} style={styles.styleLink}>Déjà inscrit ?</Text>
            </View>
        )

        return (
            <View style={styles.wrapperAuthentification}>
                <Text style={styles.styleH1}>Playlist Veille</Text>
                <Image source={require('../src/images/logo.png')} style={styles.logoStyle} />
                {layout}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    wrapperAuthentification: {
        flex: 1,
        backgroundColor: '#034f84',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperView: {
        alignItems: 'center',
        width: '100%'
    },
    wrapperForm: {
        justifyContent: 'space-evenly',
        backgroundColor: '#ffffff',
        padding: 15,        
        height: 350,
        width: '80%',
        borderRadius: 15,
    },
    wrapperFormInscription: {
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: 15,        
        height: 350,
        width: '80%',
        borderRadius: 15,
    },
    styleButton: {
        backgroundColor: '#4682B4',
        marginTop: 15
    },
    styleH1: {
        fontSize: 32,
        color: '#ffffff',
        marginBottom: 10,
    },
    styleH2: {
        fontSize: 18,
        color: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    logoStyle: {
        width: 200,
        height: 200
    },
    styleInput: {
        padding: 10,
        fontSize: 14
    },
    styleLink: {
        marginTop: 10,
        color: '#ffffff',
        textDecorationLine: 'underline'
    }
})

export default Authentification