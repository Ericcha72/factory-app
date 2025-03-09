import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Factory = {
  id: string;
  name: string;
  location: string;
};

type RootStackParamList = {
  Dashboard: { factory: Factory };
  FactorySelect: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'FactorySelect'>;

const factories = [
  { id: '1', name: '중국 공장 1', location: '중국 상해' },
  { id: '2', name: '중국 공장 2', location: '중국 심천' },
  { id: '3', name: '태국 공장', location: '태국 방콕' },
];

export const FactorySelectScreen = ({ navigation }: Props) => {
  const handleSelectFactory = (factory: Factory) => {
    navigation.navigate('Dashboard', { factory });
  };

  const renderFactory = ({ item }: { item: Factory }) => (
    <TouchableOpacity 
      style={styles.factoryItem}
      onPress={() => handleSelectFactory(item)}
    >
      <Text style={styles.factoryName}>{item.name}</Text>
      <Text style={styles.factoryLocation}>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>공장 선택</Text>
      <FlatList
        data={factories}
        renderItem={renderFactory}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  listContainer: {
    padding: 16,
  },
  factoryItem: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  factoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  factoryLocation: {
    fontSize: 14,
    color: '#666',
  },
}); 