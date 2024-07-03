import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Checkout() {
    const navigation = useNavigation();
    const route = useRoute();
    const {cart} = route.params;
  return (
   <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator ={false}>
            <View style={styles.header}>
                <Image source={require('../assets/Logo.png')} style={styles.logo}/>
                <Icon name='search' size={30} style={styles.search}/>
            </View>
            <View style={styles.headTextContainer}>
                    <Text style={styles.headText}>CHECKOUT</Text>
            </View>
            <View style={styles.cartContainer}>
                {cart.map((item, index) => {
                    <View key={index} style={styles.cartItem}>
                        <Image source={item.image} style={styles.cartImage}/>
                        <View style={styles.cartTextContainer}>
                            <Text style={styles.cartText}>{item.name}</Text>
                            <Text style={styles.cartSubText}>{item.description}</Text>
                            <Text style={styles.cartPriceText}>{item.price}</Text>
                        </View>
                    </View>
                })}
            </View>
        </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  search: {
   marginLeft: 130,
  },
  logo: {
    marginLeft: 140,
  },
  headTextContainer: {
    marginTop: 35,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 5,
    width: '50%',
  },
  headText: {
    fontSize: 20,
    alignSelf: 'center',
    paddingBottom: 5,
  },
   cartContainer:{
    padding: 20,
   },
   cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
   },
   cartImage: {
        width: 100,
        height: 100,
        marginRight: 20,
   },
   cartTextContainer: {
        fontSize: 18,
        fontWeight: 'bold',
   }
});