import React from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import {ScrollViewComponent} from '../components';

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style={{marginTop:40}}>
            <ScrollView>
            <Text>Catégories</Text>
            <TextInput placeholder = "Entrer le nom de film"></TextInput>
            <Button title="Rechercher" />
            <View>
            <Text style={styles.categories}>Comédie</Text>
            <ScrollViewComponent></ScrollViewComponent>
            
            <Text style={styles.categories}>Horreur</Text>
            <ScrollViewComponent></ScrollViewComponent>
            
            <Text style={styles.categories}>Films de cul</Text>
            <ScrollViewComponent></ScrollViewComponent>
            
            <Text style={styles.categories}>Dramatique</Text>
            <ScrollViewComponent></ScrollViewComponent>
            
            <Text style={styles.categories}>Romantique</Text>
            <ScrollViewComponent></ScrollViewComponent>
            
            </View>
            </ScrollView>
            </View>
            )
        }
    }
    
    const styles = StyleSheet.create({
        logo: {
            height: 200,
            width: '50%',
            backgroundColor: 'black',
            marginLeft: '25%',
            marginVertical: 50,
            alignItems: 'center',
            justifyContent: 'center'
        },
        textLogo: {
            fontFamily: 'open-sans',
            color: 'white',
            fontSize: 20
        },
        categories: {
            fontSize: 20,
            fontFamily: 'open-sans-bold',
            color: 'black',
            marginLeft: 5
        }
    });