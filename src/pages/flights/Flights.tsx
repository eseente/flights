import React, { useState } from 'react';
import { SafeAreaView, FlatList, View, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react';
import styles from './flights.styles';
import TicketCard from '../../components/ticket-card/TicketCard';
import FlightStore from '../../store/FlightStore';
import EmptyState from '../../components/empty-state/EmptyState';
import UIStore from '../../store/UIStore';

interface TransferFlight {
  id: string;
  airline: string;
  flightNumber: string;
  duration: string;
  departure: string;
  arrival: string;
  departureDate: string;
  arrivalDate: string;
}

interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  duration: string;
  departure: string;
  arrival: string;
  departureDate: string;
  arrivalDate: string;
  hasTransfer: boolean;
  transferFlight: TransferFlight | null;
}

const Flights: React.FC = observer(() => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectFlight = (flight: Flight) => {
    FlightStore.setSelectedFlight(flight);
    UIStore.setBlurVisible(true);
  };

  const handleAddFlight = async () => {
    if (!loading) {
      setLoading(true);
      FlightStore.generateRandomFlight();
      setTimeout(() => setLoading(false), 500); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {FlightStore.flights.length === 0 ? (
        <EmptyState onAddFlight={handleAddFlight} />
      ) : (
        <>
          {loading && (
            <ActivityIndicator size="large" color="#FF7F50" style={styles.activityIndicator} />
          )}

          <FlatList
            data={FlightStore.flights}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.itemContainer}>
                  <TicketCard
                    flight={item}
                    hasTransfer={item.hasTransfer}
                    onSelect={() => handleSelectFlight(item)}
                    disabled={false}
                  />
                </View>
              );
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
});

export default Flights;
