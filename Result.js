import { useRoute } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function Result(){
    const route = useRoute();
    
    return (
    
        <View style={styles.container}>
                <Text style={styles.text}>Nama : {route.params.nama}</Text>
                <Text style={styles.text}>Alamat : {route.params.alamat}</Text>
                <Text style={styles.text}>Kota Lahir : {route.params.kotalahir}</Text>
                <Text style={styles.text}>Pekerjaan : {route.params.pekerjaan}</Text>
                <Text style={styles.text}>Usia : {route.params.usia}</Text>
                <Text style={styles.text}>Nilai Survei : {route.params.nsurvei}</Text>
                <Text style={styles.text}>Alasan dari Nilai Survei : {route.params.alasan}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        padding: 8,
        margin: 15,
        marginTop: 150,
        margin: 20,
        backgroundColor: '#b76c94'
      },
    text:{
        fontSize: 20,
        padding: 8,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})