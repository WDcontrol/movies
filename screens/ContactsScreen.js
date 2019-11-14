import React from 'react-native';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';

class MovieDetailScreen extends React.Component {

    state =  {
        contacts: []
    }

    componentDidMount(){
        const { data } = Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails],
          }).then(res => {
            console.log(res);
            
          });
          
          if (data.length > 0) {
            const contact = data[0];
            console.log(contact);
          }
    }

    render() {
        return(
            <View></View>
        )
    }

}

export default MovieDetailScreen;
