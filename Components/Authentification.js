import React from 'react'
import { View, TextInput, StyleSheet, Image, Text } from 'react-native'
import { Button, FormInput } from 'react-native-elements'

class Authentification extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pseudo: '',
            email: '',
            password: '',
            layoutLogin: true,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(text) {
        this.setState({email: text});
    }

    handleSubmit = () => {
        this.props.navigation.navigate("Pays")
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
                    <FormInput placeholder="Saisissez votre adresse mail" inputStyle={styles.styleInput} onChangeText={ (email) => this.setState({email})} />
                    <FormInput placeholder="Saisissez votre mot de passe" inputStyle={styles.styleInput} onChangeText={ (password) => this.setState({password})} />
                    <Button iconRight={{name: 'check'}} buttonStyle={styles.styleButton} title="Se connecter" onPress={this.handleSubmit}/>
                </View>
                <Text onPress={ () => {this.handleTextLink(false)}} style={styles.styleLink}>Pas encore inscrit ?</Text>
            </View>
        ) : (
            <View style={styles.wrapperView}>
                <View style={styles.wrapperForm}>
                    <Text style={styles.styleH2}>Inscription</Text>   
                    <FormInput placeholder="Saisissez votre pseudo" inputStyle={styles.styleInput} onChangeText={ (pseudo) => this.setState({pseudo})} />
                    <FormInput placeholder="Saisissez votre adresse mail" inputStyle={styles.styleInput} onChangeText={ (email) => this.setState({email})} />
                    <FormInput placeholder="Saisissez votre mot de passe" inputStyle={styles.styleInput} onChangeText={ (password) => this.setState({password})} />
                    <Button iconRight={{name: 'check'}} buttonStyle={styles.styleButton} title="Valider" onPress={this.handleSubmit}/>
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
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: 30,        
        height: 280,
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
        marginBottom: 30
    },
    styleH2: {
        fontSize: 18,
        color: '#333333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoStyle: {
        width: 230,
        height: 230
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