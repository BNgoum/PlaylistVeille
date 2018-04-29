import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableHighlight, Image } from 'react-native'

class Playlists extends React.Component {

    handleSubmitCreate = () => {
        this.props.navigation.navigate("CreatePlaylist")
    }

    render() {
        return (
            <ScrollView style={styles.container} >
                <TouchableHighlight onPress={this.handleSubmitCreate}>
                    <View style={ styles.wrapper_view_create} >
                        <Image source={require('../src/images/add.png')}
                            style={ styles.style_image } />
                        <Text style={ styles.style_label } >Créer une Playlist</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight>
                    <View style={ styles.wrapper_view_playlist} >
                        <Image source={require('../src/images/list.png')}
                            style={ styles.style_image } />
                        <Text style={ styles.style_label } >Ma Playlist 1</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight>
                    <View style={ styles.wrapper_view_playlist} >
                        <Image source={require('../src/images/list.png')}
                            style={ styles.style_image } />
                        <Text style={ styles.style_label } >Ma Playlist 2</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight>
                    <View style={ styles.wrapper_view_playlist} >
                        <Image source={require('../src/images/list.png')}
                            style={ styles.style_image } />
                        <Text style={ styles.style_label } >Ma Playlist 3</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#034f84'
    },
    wrapper_view_create: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 25,
        paddingLeft: 25,
        margin: 25,
        marginBottom: 30,
        marginBottom: 0,
        borderRadius: 50
    },
    wrapper_view_playlist: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 25,
        paddingLeft: 25,
        margin: 25,
        marginBottom: 0,
        borderRadius: 5
    },
    style_image: {
        width: 30,
        height: 30
    },
    style_label: {
        fontSize: 20,
        marginLeft: 15,
    }
})

export default Playlists