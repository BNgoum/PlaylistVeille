import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView, TouchableHighlight, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            categories: {
                'business': false,
                'entertainment': false,
                'General': false,
                'health': false,
                'science': false,
                'sports': false,
                'technology': false
            },
        }
    }

    handleSubmit = () => {

        var categoriesTrue = '';
        var first_iteration = true;

        for(var key in this.state.categories) {
            if (this.state.categories[key]) {
                if (first_iteration) {
                    categoriesTrue += key;
                    first_iteration = false;
                } else {
                    categoriesTrue += ',' + key;
                }
            }
        }

        AsyncStorage.setItem('fil_actu', categoriesTrue);
        this.props.navigation.navigate("Abonnements");
    }

    render () {

        const { business, entertainment, General, health, science, sports, technology } = this.state.categories;
        return (
            <ScrollView style={styles.viewGeneral}>
                <TouchableHighlight
                    onPress={() => business ? (this.setState(prevState => ({categories : { ...prevState.categories, 'business': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'business': true}}))) }
                    style={styles.styleCategorie}>
                        <View style={[styles.styleImage, business ? styles.actif : styles.inactif]}>
                            <Image source={require('../src/images/business.png')} style={styles.styleImage}/>
                            <Text style={styles.styleSousTitre}>Business</Text>
                        </View>
                </TouchableHighlight>
                
                <TouchableHighlight 
                    onPress={() => entertainment ? (this.setState(prevState => ({categories : { ...prevState.categories, 'entertainment': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'entertainment': true}}))) }
                    style={styles.styleCategorie}>
                        <View style={[styles.styleImage, entertainment ? styles.actif : styles.inactif]}>
                            <Image source={require('../src/images/divertissement.png')} style={styles.styleImage} />
                            <Text style={styles.styleSousTitre}>Divertissement</Text>
                        </View>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={() => science ? (this.setState(prevState => ({categories : { ...prevState.categories, 'science': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'science': true}}))) }
                    style={styles.styleCategorie}>
                    
                    <View style={[styles.styleImage, science ? styles.actif : styles.inactif]}>
                        <Image source={require('../src/images/science.jpg')} style={styles.styleImage}/>
                        <Text style={styles.styleSousTitre}>Sciences</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={() => General ? (this.setState(prevState => ({categories : { ...prevState.categories, 'General': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'General': true}}))) }
                    style={styles.styleCategorie}>
                    <View style={[styles.styleImage, General ? styles.actif : styles.inactif]}>
                        <Image source={require('../src/images/general.jpg')} style={styles.styleImage}/>
                        <Text style={styles.styleSousTitre}>Général</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={() => health ? (this.setState(prevState => ({categories : { ...prevState.categories, 'health': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'health': true}}))) }
                    style={styles.styleCategorie}>
                    <View style={[styles.styleImage, health ? styles.actif : styles.inactif]}>
                        <Image source={require('../src/images/sante.jpg')} style={styles.styleImage}/>
                        <Text style={styles.styleSousTitre}>Santé</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={() => sports ? (this.setState(prevState => ({categories : { ...prevState.categories, 'sports': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'sports': true}}))) }
                    style={styles.styleCategorie}>
                    <View style={[styles.styleImage, sports ? styles.actif : styles.inactif]}>
                        <Image source={require('../src/images/sport.jpg')} style={styles.styleImage}/>
                        <Text style={styles.styleSousTitre}>Sports</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={() => technology ? (this.setState(prevState => ({categories : { ...prevState.categories, 'technology': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'technology': true}}))) }
                    style={styles.styleCategorie}>
                    <View style={[styles.styleImage, technology ? styles.actif : styles.inactif]}>
                        <Image source={require('../src/images/technologie.jpg')} style={styles.styleImage}/>
                        <Text style={styles.styleSousTitre}>Technologie</Text>
                    </View>
                </TouchableHighlight>

                <Button large iconRight={{name: 'check'}} title='Valider' buttonStyle={styles.styleButton} onPress={this.handleSubmit} />
            </ScrollView>
        )
        
    }
}

const styles = StyleSheet.create({
    viewGeneral: {
        flex: 1,
        padding: 10,
        backgroundColor: '#034f84',
    },
    styleTitre: {
        fontSize: 28,
        color: "#fff",
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    styleSousTitre: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#fff',
        padding: 6,
        borderTopWidth: 2,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    styleCategorie: {
        width: '100%',
        height: 200,        
        marginBottom: 20,
        borderRadius: 5,
    },
    styleImage: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
    },
    inactif: {
        flex: 1,
        borderColor: '#333',
        borderRadius: 5,
        borderWidth: 4
    },
    actif: {
        flex: 1,
        borderColor: '#01FF70',
        borderRadius: 5,
        borderWidth: 5
    },
    styleButton: {
        backgroundColor: '#3D9970',
        marginBottom: 30,
    }
})

export default Categories