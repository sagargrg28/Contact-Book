import { useState } from 'react';
import { View, Text, Pressable, Modal, Switch, Alert } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as database from '../../../database/index'
import { useDispatch } from "react-redux";
import {handleTaskRemoval, handleStatusChange} from '../../../redux/taskSlice'


export default function Task(props) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();


  const handleModalToggle = () => {
    setShowModal(!showModal);
  }

  const handleStatusChangePress = () => {
    
    database.update(props.task.id)
    dispatch(handleStatusChange(props.task.id))
  }

  const handleRemovePress = () => {
    Alert.alert(
      'Remove Task',
      'This action will permanently delete this contact. This action cannot be undone!', [
      {
        text: 'Confirm',
        onPress: () => {
          
          dispatch(handleTaskRemoval(props.task.id))
          database.remove(props.task.id)
          setShowModal(false);
        }
      },
      {
        text: 'Cancel'
      }
    ]);
  }

  return (
    <>
     <Pressable onPress={handleModalToggle}>
        <View style={styles.container}>
          <Text style={styles.title}>{props.task.name}</Text>
          <Text style={styles.text}>Phone: {props.task.phone}</Text>
          <Text style={styles.text}>Email: {props.task.email}</Text>
          <Text style={styles.text}>Note: {props.task.note}</Text>
          <Text style={styles.text}>Favorite: {props.task.favorite ? 'Yes' : 'No'}</Text>
        </View>
      </Pressable>

      <Modal visible={showModal} transparent={true}>
        <View style={styles.modal.container}>
          <View style={styles.modal.box}>

            {/* Close Modal */}
            <Pressable onPress={handleModalToggle}>
              <View style={styles.close.container}>
                <AntDesign name="closesquare" size={25} color="#c00" />
                <Text style={styles.close.text}>Close</Text>
              </View>
            </Pressable>

      
            <Text style={styles.title}>{props.task.name}</Text>

            <View style={styles.options}>

 
              <View style={styles.switch.container}>
                <Switch
                  value={props.task.favorite}
                  onValueChange={handleStatusChangePress}
                />
                <Pressable onPress={handleStatusChangePress}>
                  <Text style={styles.switch.label}>Toggle Status</Text>
                </Pressable>
              </View>

              {/* Remove Button */}
              <View style={styles.remove.container}>
                <Pressable onPress={handleRemovePress}>
                  <MaterialIcons name='delete-sweep' size={32} style={styles.remove.icon} />
                  <Text style={styles.remove.label}>Remove</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}