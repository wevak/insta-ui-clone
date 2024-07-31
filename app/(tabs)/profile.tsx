import { FontAwesome5, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.profileDetails}>
        <View style={styles.basicProfile}>
          <View style={styles.profilePic} />
          <Text>Username</Text>
          <Text>Status</Text>
        </View>
        <View style={styles.posts}>
          <Text>10</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.followers}>
          <Text>200</Text>
          <Text>followers</Text>
        </View>
        <View style={styles.following}>
          <Text>200</Text>
          <Text>following</Text>
        </View>
      </View>
      <View style={styles.profileActions}>
        <Pressable style={styles.editButton}><Text>Edit Profile</Text></Pressable>
        <Pressable style={styles.shareButton}><Text>Share Profile</Text></Pressable>
        <Pressable style={styles.addButton}><FontAwesome5 name="user-plus" /></Pressable>
      </View>
      <View style={styles.profileItems}>
        <MaterialIcons name='grid-on' size={24} color="black" />
        <MaterialCommunityIcons name="movie-play-outline" size={24} color="black" />
        <FontAwesome6 name="user" size={24} color="black" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileDetails:  {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  basicProfile: {
    alignItems: 'center'
  },
  profilePic: {
    width: 45,
    height: 45,
    borderWidth: 1.5,
    borderRadius: 40,
  },
  posts: {
    alignItems: 'center'
  },
  followers: {
    alignItems: 'center'
  },
  following: {
    alignItems: 'center'
  },
  profileActions: {
    flexDirection: 'row',
    height: 25,
  },
  editButton: {
    flex: 4,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10
  },
  shareButton: {
    flex: 4,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10
  },
  addButton: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10
  },
  profileItems: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-around'
  }
});
