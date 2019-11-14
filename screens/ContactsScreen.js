import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';
import * as Permissions from 'expo-permissions'

class ContactsScreen extends React.Component {

    state =  {
        contacts: []
    }

    async checkPermissions(){
        const {status, expires, permissions} = await Permissions.getAsync(
            Permissions.CONTACTS
        )
    } 

    async getContacts() {
        // Ask for permission to query contacts.
        const permission = await Permissions.askAsync(Permissions.CONTACTS);
        
        if (permission.status !== 'granted') {
          // Permission was denied...
          return;
        }
        const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.PHONE_NUMBERS],
          });
          
          if (data.length > 0) {
              console.log(data)
          }
      }

    showContacts(){
        let contactData = this.getContacts();
        this.setState({contacts:contactData})

    }

    render() {
        console.log(this.state.contacts)
        return(
            <View style={{flex: 1, paddingTop: 40}}>
                <Button title='Get contacts' onPress={() => this.showContacts()}>get contacts</Button>
                {this.state.contacts.length != 0 ?
                    // <FlatList
                    // showsHorizontalScrollIndicator={false}
                    // data={this.state.contacts}
                    // renderItem={({item}) => (
                    //     <View style={styles.imgContainer}>
                    //         <TouchableOpacity onPress={() =>{console.log("touché")}}>
                    //             <Text>{item.firstName}</Text>
                    //         </TouchableOpacity>
                    //     </View>
                    <Text>Lol</Text>
                    // )} />
                    :
                <Text>Chargement ...</Text>}
            </View>
        )
    }

}

export default withNavigation(ContactsScreen);
