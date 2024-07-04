import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet, SafeAreaView, Alert, ImageBackground } from 'react-native';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [itemCounts, setItemCounts] = useState({});

  const collections = [
    {
      id: '1',
      name: 'Freya',
      items: '13K',
      owners: '100K',
      imageUrl: 'https://rare-gallery.com/uploads/posts/343281-Freya-Raven-Shogun-Mobile-Legends-Bang-Bang-MLBB-ML-Video-Game-Skin.jpg',
      backgroundUrl: 'https://rare-gallery.com/uploads/posts/343281-Freya-Raven-Shogun-Mobile-Legends-Bang-Bang-MLBB-ML-Video-Game-Skin.jpg'
    },
    {
      id: '2',
      name: 'YU Zhong',
      items: '12K',
      owners: '5.34K',
      imageUrl: 'https://wallpapercave.com/wp/wp8194666.jpg',
      backgroundUrl: 'https://wallpapercave.com/wp/wp8194666.jpg'
    },
    {
      id: '3',
      name: 'Khaleed',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://i.pinimg.com/originals/57/37/09/573709fb2aee76122e2258a7120cba92.jpg',
      backgroundUrl: 'https://i.pinimg.com/originals/57/37/09/573709fb2aee76122e2258a7120cba92.jpg'
    },
    {
      id: '4',
      name: 'Paquito',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://dailyspin.id/wp-content/uploads/2023/06/Fv0pwyqaEAAuNeB.jpg',
      backgroundUrl: 'https://dailyspin.id/wp-content/uploads/2023/06/Fv0pwyqaEAAuNeB.jpg'
    },
    {
      id: '5',
      name: 'Yin',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/565/330/desktop-wallpaper-mobile-legends-bang-bang-on-twitter-yin-mlbb.jpg',
      backgroundUrl: 'https://e1.pxfuel.com/desktop-wallpaper/565/330/desktop-wallpaper-mobile-legends-bang-bang-on-twitter-yin-mlbb.jpg'
    },
    {
      id: '6',
      name: 'Terizla',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://en.esportsku.com/wp-content/uploads/2021/03/Untitled-575.jpg',
      backgroundUrl: 'https://en.esportsku.com/wp-content/uploads/2021/03/Untitled-575.jpg'
    },
    {
      id: '7',
      name: 'Lapu-Lapu',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://i.ytimg.com/vi/XcP__FMc4Y0/maxresdefault.jpg',
      backgroundUrl: 'https://i.ytimg.com/vi/XcP__FMc4Y0/maxresdefault.jpg'
    },
    {
      id: '8',
      name: 'Chou',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://www.hdwallpapers.in/download/chou_stun_skin_mobile_legends_4k_hd_mobile_legends-3840x2160.jpg',
      backgroundUrl: 'https://www.hdwallpapers.in/download/chou_stun_skin_mobile_legends_4k_hd_mobile_legends-3840x2160.jpg'
    },
  ];

  useEffect(() => {
    setFilteredCollections(
      collections.filter(collection =>
        collection.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);


  useEffect(() => {
    const counts = {};
    collections.forEach(collection => {
      counts[collection.id] = 0;
    });
    setItemCounts(counts);
  }, []);


  const handleIncrement = id => {
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1
    }));
  };

  const handleDecrement = id => {
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [id]: prevCounts[id] > 0 ? prevCounts[id] - 1 : 0
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search characters"
        />
        <Text style={styles.header}>Character Wind Bracker</Text>
        <FlatList
          data={filteredCollections}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ImageBackground source={{ uri: item.backgroundUrl }} style={styles.itemContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.details}>Items: {item.items}</Text>
                <Text style={styles.details}>Owners: {item.owners}</Text>
                <View style={styles.counterContainer}>
                  <TouchableOpacity style={styles.counterButton} onPress={() => handleDecrement(item.id)}>
                    <Text style={styles.counterButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterText}>{itemCounts[item.id]}</Text>
                  <TouchableOpacity style={styles.counterButton} onPress={() => handleIncrement(item.id)}>
                    <Text style={styles.counterButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          )}
        />
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Husbunya Ganteng Yaa wkwkw')}>
        <Text style={styles.buttonText}>Di Pilih Mas Brooo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: 'https://wallpapercave.com/wp/wp4383362.jpg' }}
        style={styles.backgroundImage}
      />
      <Text style={styles.headerTitle}>Hero ML</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  headerContainer: {
    height: 300,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.8
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
  },
  button: {
    borderWidth: 5,
    borderColor: 'green',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  counterButton: {
    backgroundColor: '#ddd',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  counterButtonText: {
    fontSize: 20,
  },
  counterText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  counterButton: {
    backgroundColor: '#ddd',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  counterButtonText: {
    fontSize: 20,
  },
  counterText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default App;
