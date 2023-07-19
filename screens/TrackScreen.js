import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Track Cycle',
    screen: 'Track Cycle'
  },
  {
    title: 'Track Mood',
    screen: 'Track Mood'
  },
  {
    title: 'Track Skin',
    screen: 'Track Skin'
  },
  {
    title: 'Track Weight',
    screen: 'Track Weight'
  },
  {
    title: 'Add to Journal',
    screen: 'Journal',
  }
];

const Item = ({ title }) => (
  <View
    style={styles.item}>
    <Text style={styles.title}>
      {title}
    </Text>
  </View>
);

const TrackScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) =>
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}>
            <Item title={item.title} />
          </TouchableOpacity>}
      />
    </SafeAreaView>
  );
};

export default TrackScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#444e76',
    padding: 15,
    width: '80%',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 32,
  },
});