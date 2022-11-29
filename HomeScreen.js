import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Hoshi } from 'react-native-textinput-effects';

export default function HomeScreen(){
  const [users, setUsers] = useState({
      nama :'',
      pekerjaan: '',
      usia: '',
      nsurvei: '',
      alasan: '',
      alamat: '',
      kotalahir: '',
  })

  const onChangeNama = (value) => {
    setUsers({...users, nama: value})
  }
  const onChangePekerjaan = (value) => {
    setUsers({...users, pekerjaan: value})
  }
  const onChangeUsia = (value) => {
    setUsers({...users, usia: value})
  }
  const onChangeNsurvei = (value) => {
    setUsers({...users, nsurvei: value})
  }
  const onChangeAlasan = (value) => {
    setUsers({...users, alasan: value})
  }
  const onChangeAlamat = (value) => {
    setUsers({...users, alamat: value})
  }
  const onChangeKotaLahir = (value) => {
    setUsers({...users, kotalahir: value})
  }

  const navigation = useNavigation();

  const saveData = () => {
    fetch('https://638485154ce192ac6059d6a2.mockapi.io/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nama: users.nama,
        pekerjaan: users.pekerjaan,
        usia: users.usia,
        nsurvei: users.nsurvei,
        alasan: users.alasan,
        alamat: users.alamat,
        kotalahir: users.kotalahir,
      })
      
    });
    navigation.navigate("Result", {
        nama: users.nama,
        pekerjaan: users.pekerjaan,
        usia: users.usia,
        nsurvei: users.nsurvei,
        alasan: users.alasan,
        alamat: users.alamat,
        kotalahir: users.kotalahir,

    })
  }

  return (
    <View style={styles.container}>
    
    <Hoshi
          label={'Nama'}      
          onChangeText={(value) => onChangeNama(value)}
          borderColor={'#b76c94'}  
          borderHeight={3}
          inputPadding={16}
          backgroundColor={'#F9F7F6'}
       />
       <Hoshi
          label={'Alamat'}      
          onChangeText={(value) => onChangeAlamat(value)}
          borderColor={'#b76c94'}  
          borderHeight={3}
          inputPadding={16}
          backgroundColor={'#F9F7F6'}
       />
       <Hoshi
          label={'Kota Lahir'}      
          onChangeText={(value) => onChangeKotaLahir(value)}
          borderColor={'#b76c94'}  
          borderHeight={3}
          inputPadding={16}
          backgroundColor={'#F9F7F6'}
       />
       <Hoshi
          label={'Pekerjaan'}
          onChangeText={(value) => onChangePekerjaan(value)}
          borderColor={'#b76c94'}
          borderHeight={3}
          inputPadding={16}
          backgroundColor={'#F9F7F6'}
       />
       <Hoshi
          label={'Usia'}
          keyboardType='numeric'
          onChangeText={(value) => onChangeUsia(value)}
          borderColor={'#b76c94'}
          borderHeight={3}
          inputPadding={16}
          backgroundColor={'#F9F7F6'}
       />
       <Hoshi
          label={'Nilai Survei (1-10)'}
          keyboardType='numeric'
          onChangeText={(value) => onChangeNsurvei(value)}
          borderColor={'#b76c94'}
          borderHeight={3}
          inputPadding={16}
          backgroundColor={'#F9F7F6'}
       />
       <Hoshi
          label={'Alasan dari Nilai Survei'}
          onChangeText={(value) => onChangeAlasan(value)}
          borderColor={'#b76c94'}
          borderHeight={3}
          inputPadding={16}
          backgroundColor={'#F9F7F6'}
       />
    
      
      <TouchableOpacity onPress={saveData}>
        <View style={styles.view}>
          <Text style={styles.text}>SIMPAN</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    paddingTop: 10,
    padding: 8,
    margin: 15,
    marginTop: 20,
    marginLeft: 10,
  },
  view:{
    backgroundColor: '#b76c94',
    padding: 10,
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  text:{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})