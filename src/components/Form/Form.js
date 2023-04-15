import { useState } from "react";
import { View, Text, TextInput, Switch, Button, Keyboard, DrawerLayoutAndroidBase } from "react-native";
import styles from "./styles";
import * as database from '../../database/index'
import { async } from "@firebase/util";
import { addTask } from "../../redux/taskSlice"
import {useDispatch} from "react-redux"

export default function Form(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [favorite, setfavorite] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);


  const handleAddPress =async () => {
    if (name) {
      const data = {
        name :name,
        phone: phone,
        email: email,
        note: note,
        favorite: favorite
    }
      const id = await database.save(data)
      if(id){
        data.id = id
        dispatch(addTask(data))
        setErrorMessage(null);
        setName("");
        setPhone("");
        setEmail("");
        setNote("");
        setfavorite(false);
  
        Keyboard.dismiss();
      }

     
    } else {
      setErrorMessage("Please fill out all the required details below.");
    }
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleStatusChange = (value) => {
    setfavorite(value);
  };

  const handleNoteChange = (value) => {
    setNote(value);
  };

  return (
    <View style={styles.container}>
      {errorMessage && (
        <View style={styles.errorMessage.container}>
          <Text style={styles.errorMessage.label}>Attention:</Text>
          <Text style={styles.errorMessage.text}>{errorMessage}</Text>
        </View>
      )}

      <Text style={styles.label}>Name: </Text>
      <TextInput
        maxLength={150}
        onChangeText={handleNameChange}
        defaultValue={name}
        style={styles.textbox}
      />

      <Text style={styles.label}>Phone: </Text>
      <TextInput
        maxLength={150}
        onChangeText={handlePhoneChange}
        defaultValue={phone}
        style={styles.textbox}
      />

      <Text style={styles.label}>Email: </Text>
      <TextInput
        maxLength={150}
        onChangeText={handleEmailChange}
        defaultValue={email}
        style={styles.textbox}
      />

      <Text style={styles.label}>Note: </Text>
      <TextInput
        maxLength={150}
        onChangeText={handleNoteChange}
        defaultValue={note}
        style={styles.textbox}
      />

      <View style={styles.switch.container}>
        <Switch value={favorite} onValueChange={handleStatusChange} />
        <Text style={styles.switch.label}>Favorite</Text>
      </View>

      <Button title="Add" onPress={handleAddPress} />
    </View>
  );
}
