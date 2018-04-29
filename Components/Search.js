import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Text, ActivityIndicator } from 'react-native'
import listCategories from '../Helpers/Categories'
import NewsItem from './NewsItem'
import { getNewsFromApiWithSearchedText } from '../API/GoogleNewsApi'
import { Button } from 'react-native-elements'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            news: [],
            codePays: "",
            isLoading: false,
            page: 1,
            totalPages: 5
        }
    }

    // Fonction qui va faire appel à la fonction getNewsFromApiWithSearchedText, qui récupère les news de l'API google news avec en paramètre le code pays à deux lettres
    _loadNews() {
        let { news, codePays, isLoading, page } = this.state;
        
        if (codePays.length > 0) {
            this.setState({ isLoading: true })
            getNewsFromApiWithSearchedText(codePays, page).then(data => {
                let titles = data.articles.map((listNews) => {
                    this.setState(prevState => ({
                        news: [...prevState.news, listNews],
                        isLoading: false,
                        page: prevState.page + 1,
                    }))
                });
            });
        }
    }

    _searchNews() {
        this.setState({
            news: [],
            page: 0,
        }, () => { this._loadNews() })
    }

    // Fonction qui va être appelé à chaque changement d'état de l'input text
    _searchTextInputChanged(text) {
        this.setState({ codePays: text })
    }

    _displayLoading() {
        let { isLoading } = this.state;

        if (isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _displayDetailForNews = (idNews) => {
        console.log("########## Display news with id " + idNews)
        this.props.navigation.navigate("NewsDetail", { idNews: idNews })
    }

  render() {
      return (
        <View style={styles.viewGeneral}>
            <TextInput
                placeholder='Entrez le code 2 lettres du pays...'
                style={styles.textinput}
                maxLength={2}
                onChangeText={(text) => this._searchTextInputChanged(text)}
                onSubmitEditing={() => this._searchNews() }  
            />
            <Button iconRight={{name: 'search'}} title='Rechercher' onPress={() => this._searchNews()} buttonStyle={styles.buttonStyle}/>
            <FlatList
                data={this.state.news}
                keyExtractor={(item) => item.title}
                renderItem={({item}) => <NewsItem news={item} displayDetailForNews={this._displayDetailForNews} />}
                /* onEndReachedThreshold={ 0.5 }
                onEndReached={() => {
                    if (this.state.news.length > 0) {
                        console.log('OnEndReached')
                        this._loadNews();
                    }
                }} */
            />
            {this._displayLoading()}
        </View>
      )
  }
}

const styles = StyleSheet.create({
    viewGeneral: {
        flex: 1
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        paddingLeft: 5
    },
    buttonStyle: {
        marginTop: 5,
        backgroundColor: '#4682B4'
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Search