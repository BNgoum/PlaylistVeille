import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            categories: ['Business',
            'Divertissement',
            'Général',
            'Santé',
            'Science',
            'Sports',
            'Technologie'
            ] 
        }
    }

    render () {
        return (
            <View style={styles.viewGeneral}>
                <FlatList
                    data={this.state.categories}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Text style={styles.text}>{item} </Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewGeneral: {
        flex: 1,
        marginTop: 40
    },
    text: {
        fontSize: 20,
        marginLeft: 20
    }
})

export default Categories