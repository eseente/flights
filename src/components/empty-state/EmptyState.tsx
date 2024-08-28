import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './empty-state.styles';
import FlightsIcon from '../../assets/icons/plane_icon.svg';

interface EmptyStateProps {
  onAddFlight: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onAddFlight }) => {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.iconContainer}>
        <FlightsIcon color={'#374151'} width={28} height={28} />
      </View>
      <Text style={styles.titleText}>No Flights Added Yet</Text>
      <Text style={styles.descriptionText}>
        {"Let's get started on your jet lag plan! Add\n your upcoming flights to begin your\n journey."}
      </Text>
      <TouchableOpacity style={styles.addButton} onPress={onAddFlight}>
        <Text style={styles.addButtonText}>Add Flight</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyState;
