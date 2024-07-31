import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, EvilIcons, Feather, FontAwesome6, Fontisto, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function MainScreen() {
  return (
    <ScrollView>
      <View style={styles.topBar}>
        <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />
        <View style={[styles.flexDirection, styles.topNavigation]}>
          <View>
            <Octicons name="diff-added" size={24} color="black" />
          </View>
          <View>
            <MaterialCommunityIcons name="heart-outline" size={24} color="black" />
          </View>
          <View>
            <Fontisto name="messenger" size={24} color="black" />
          </View>
        </View>
      </View>
      <ScrollView horizontal={true}>
        <TouchableOpacity 
          style={styles.updatesIcon}
          />
        <TouchableOpacity 
          style={styles.updatesIcon}
          />
        <TouchableOpacity 
          style={styles.updatesIcon}
          />
        <TouchableOpacity 
          style={styles.updatesIcon}
          />
        <TouchableOpacity 
          style={styles.updatesIcon}
          />
        <TouchableOpacity 
          style={styles.updatesIcon}
          />
        <TouchableOpacity 
          style={styles.updatesIcon}
          />
        <TouchableOpacity 
          style={styles.updatesIcon}
          />
        <TouchableOpacity 
          style={styles.updatesIcon}
          />
      </ScrollView>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <EvilIcons name="user" size={30} color="black" />
            <Text>Username</Text>
          </View>
          <Ionicons name="ellipsis-vertical-sharp" size={24} color="black" />
        </View>
        <View style={styles.cardContent}>
          <Image style={styles.cardImage} source={require('../../../assets/images/download.png')}/>
        </View>
        <View style={styles.cardFooter}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '30%'}}>
            <AntDesign name="hearto" size={24} color="black" />
            <FontAwesome6 name="comment" size={24} color="black" />
            <Fontisto name="paper-plane" size={24} color="black" />
          </View>
          <Feather name="bookmark" size={24} color="black" />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <EvilIcons name="user" size={30} color="black" />
            <Text>Username</Text>
          </View>
          <Ionicons name="ellipsis-vertical-sharp" size={24} color="black" />
        </View>
        <View style={styles.cardContent}>
          <Image style={styles.cardImage} source={require('../../../assets/images/images.jpeg')}/>
        </View>
        <View style={styles.cardFooter}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '30%'}}>
            <AntDesign name="hearto" size={24} color="black" />
            <FontAwesome6 name="comment" size={24} color="black" />
            <Fontisto name="paper-plane" size={24} color="black" />
          </View>
          <Feather name="bookmark" size={24} color="black" />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <EvilIcons name="user" size={30} color="black" />
            <Text>Username</Text>
          </View>
          <Ionicons name="ellipsis-vertical-sharp" size={24} color="black" />
        </View>
        <View style={styles.cardContent}>
          <Image style={styles.cardImage} source={require('../../../assets/images/laptop.jpeg')}/>
        </View>
        <View style={styles.cardFooter}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '30%'}}>
            <AntDesign name="hearto" size={24} color="black" />
            <FontAwesome6 name="comment" size={24} color="black" />
            <Fontisto name="paper-plane" size={24} color="black" />
          </View>
          <Feather name="bookmark" size={24} color="black" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 2,
    marginTop: 40,
    marginLeft: 10
  },
  logo: {
    //resizeMode: 'contain',
    height: 35,
    width: 100,
    marginLeft: 20
  },
  topNavigation: {
    width: '25%',
    marginRight: 10
  },
  updatesBar: {
    flexDirection: 'row',
  },
  updatesIcon: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderRadius: 40,
    marginRight: 10,
    marginTop: 5
  },
  navigationItems: {
    width: 40,
    height: 40,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 50
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  cardContent: {
    // flex:1,
  },
  cardImage: {
    width: '100%'
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  }
});