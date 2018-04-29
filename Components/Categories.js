import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView, TouchableHighlight } from 'react-native'
import { Button } from 'react-native-elements'

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            categories: {
                'Business': false,
                'Divertissement': false,
                'General': false,
                'Sante': false,
                'Science': false,
                'Sport': false,
                'Technologie': false
            }
        }
    }

    handleSubmit = () => {
        this.props.navigation.navigate("Accueil")
    }

    render () {
        const { Business, Divertissement, General, Sante, Science, Sport, Technologie } = this.state.categories
        return (
            <ScrollView style={styles.viewGeneral}>
                <TouchableHighlight
                    onPress={() => Business ? (this.setState(prevState => ({categories : { ...prevState.categories, 'Business': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'Business': true}}))) }
                    style={styles.styleCategorie}>
                        <View style={[styles.styleImage, Business ? styles.actif : styles.inactif]}>
                            <Image source={require('../src/images/business.png')} style={styles.styleImage}/>
                            <Text style={styles.styleSousTitre}>Business</Text>
                        </View>
                </TouchableHighlight>
                
                <TouchableHighlight 
                    onPress={() => Divertissement ? (this.setState(prevState => ({categories : { ...prevState.categories, 'Divertissement': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'Divertissement': true}}))) }
                    style={styles.styleCategorie}>
                        <View style={[styles.styleImage, Divertissement ? styles.actif : styles.inactif]}>
                            <Image source={require('../src/images/divertissement.png')} style={styles.styleImage} />
                            <Text style={styles.styleSousTitre}>Divertissement</Text>
                        </View>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={() => Science ? (this.setState(prevState => ({categories : { ...prevState.categories, 'Science': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'Science': true}}))) }
                    style={styles.styleCategorie}>
                    
                    <View style={[styles.styleImage, Science ? styles.actif : styles.inactif]}>
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
                    onPress={() => Sante ? (this.setState(prevState => ({categories : { ...prevState.categories, 'Sante': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'Sante': true}}))) }
                    style={styles.styleCategorie}>
                    <View style={[styles.styleImage, Sante ? styles.actif : styles.inactif]}>
                        <Image source={require('../src/images/sante.jpg')} style={styles.styleImage}/>
                        <Text style={styles.styleSousTitre}>Santé</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={() => Sport ? (this.setState(prevState => ({categories : { ...prevState.categories, 'Sport': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'Sport': true}}))) }
                    style={styles.styleCategorie}>
                    <View style={[styles.styleImage, Sport ? styles.actif : styles.inactif]}>
                        <Image source={require('../src/images/sport.jpg')} style={styles.styleImage}/>
                        <Text style={styles.styleSousTitre}>Sport</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={() => Technologie ? (this.setState(prevState => ({categories : { ...prevState.categories, 'Technologie': false}}))) : (this.setState(prevState => ({categories : { ...prevState.categories, 'Technologie': true}}))) }
                    style={styles.styleCategorie}>
                    <View style={[styles.styleImage, Technologie ? styles.actif : styles.inactif]}>
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