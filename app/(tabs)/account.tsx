import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import Login from '../login';
import Register from '../register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from '../../components/Themed';

export default function Account({navigation}) {
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const renderContent = () => {
        if (userLoggedIn) {
            // Affichez les infos du compte de l'utilisateur ici
            return (
                <View>
                    <Text style={styles.title}>Mon compte</Text>
                    {/* Ajoutez le contenu du compte ici */}
                </View>
            );
        } else {
            // Affichez les boutons de connexion et d'inscription ici
            return (
                <View>
                    <Button title="Se connecter" onPress={() => navigation.navigate('Login')} />
                    <Button title="S'inscrire" onPress={() => navigation.navigate('Register')} />
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            {renderContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});