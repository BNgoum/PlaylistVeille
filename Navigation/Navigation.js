import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import Search from '../Components/Search'
import NewsDetail from '../Components/NewsDetail'
import Playlists from '../Components/Playlists'
import Actualite from '../Components/Actualite'
import Authentification from '../Components/Authentification'
import Categories from '../Components/Categories'
import Pays from '../Components/Pays'
import CreatePlaylist from '../Components/CreatePlaylist'

const InscriptionStackNavigator = StackNavigator({
    Authentification: {
        screen: Authentification,
        navigationOptions: {
            title: 'Authentification',
            headerStyle: {
                backgroundColor: '#f2f2f2'
            },
            headerTitleStyle: {
                color: '#333',
                textAlign: 'center'
            }
        }
    },
    Pays: {
        screen: Pays,
        navigationOptions: {
            title: 'Choix de la langue',
            headerStyle: {
                backgroundColor: '#f2f2f2'
            },
            headerTitleStyle: {
                color: '#333',
                textAlign: 'center'
            }
        }
    },
    Categories: {
        screen: Categories,
        navigationOptions: {
            title: 'Liste des catégories',
            headerStyle: {
                backgroundColor: '#f2f2f2'
            },
            headerTitleStyle: {
                color: '#333',
                textAlign: 'center'
            },
        }
    },
    Accueil: {
        screen: TabNavigator({
            Actualite: {
                screen: Search,
                navigationOptions: {
                    title: 'Actualité',
                    tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                        return <Image
                        source={require('../src/images/actualite_icon.png')}
                        style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                    }
                }
            },
            Playlists: {
                screen: Playlists,
                navigationOptions: {
                    title: 'Playlists',
                    tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                        return <Image
                        source={require('../src/images/playlist_icon.png')}
                        style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                    }
                }
            }
        }, {
            tabBarPosition: 'bottom',
            tabBarComponent: TabBarBottom,
            tabBarOptions: {
                activeBackgroundColor: '#4076A3', // Couleur d'arrière-plan de l'onglet sélectionné
                inactiveBackgroundColor: '#4682B4', // Couleur d'arrière-plan des onglets non sélectionnés
                showLabel: true, // On masque les titres
                showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis
                labelStyle: {
                    color: '#ffffff',
                    fontSize: 13
                }
              }
        }),
    },
    CreatePlaylist: {
        screen: CreatePlaylist,
        navigationOptions: {
            title: 'Création de la Playlist',
            headerStyle: {
                backgroundColor: '#f2f2f2'
            },
            headerTitleStyle: {
                color: '#333',
                textAlign: 'center'
            }
        }
    },
})

const SearchStackNavigator = StackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Actualité'
        }
    },
    NewsDetail: {
        screen: NewsDetail
    }
})

const AppliTabNavigator = TabNavigator(
    {
        Actualite: {
            screen: SearchStackNavigator,
            navigationOptions: {
              tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                  source={require('../src/images/actualite_icon.png')}
                  style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
              }
            }
        },
        Playlists: {
            screen: Playlists,
            navigationOptions: {
              tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                  source={require('../src/images/playlist_icon.png')}
                  style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
              }
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            activeBackgroundColor: '#4076A3', // Couleur d'arrière-plan de l'onglet sélectionné
            inactiveBackgroundColor: '#4682B4', // Couleur d'arrière-plan des onglets non sélectionnés
            showLabel: true, // On masque les titres
            showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis
            labelStyle: {
                color: '#ffffff',
                fontSize: 13
            }
          }
    }
)

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
    }
})

export default InscriptionStackNavigator