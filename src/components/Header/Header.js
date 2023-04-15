import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>
        <Entypo name='open-book' size={24} color='#008080'/>
        <Text style={styles.title}>Contact Book</Text>
      </View>
      <Text style={styles.author}>Group 13 <Entypo name='slideshare' size={19} color='#008080'/> </Text>  
    </View>
  );
}