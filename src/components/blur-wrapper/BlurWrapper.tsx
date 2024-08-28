import React, {ReactNode} from 'react';
import { View, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { observer } from 'mobx-react';
import styles from './blur-wrapper.styles';
import UIStore from '../../store/UIStore';
import FlightStore from '../../store/FlightStore';
import TicketCard from '../ticket-card/TicketCard';

interface BlurWrapperProps {
  children: ReactNode;
}

const BlurWrapper: React.FC<BlurWrapperProps> = observer(({ children }) => {
  const handleOutsidePress = () => {
    FlightStore.setSelectedFlight(null);
    UIStore.setBlurVisible(false);
  };

  const handleRemoveFlight = () => {
    if (FlightStore.selectedFlight) {
      FlightStore.deleteFlight(FlightStore?.selectedFlight?.id);
      FlightStore.setSelectedFlight(null);
      UIStore.setBlurVisible(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {children}
      {FlightStore.selectedFlight && (
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={styles.overlayContainer}>
            <BlurView
              style={styles.absolute}
              blurType="dark"
              blurAmount={2} 
              reducedTransparencyFallbackColor="rgba(55, 65, 81, 0.6)"
              overlayColor="rgba(55, 65, 81, 0.6)" 
            />   
            <View style={styles.selectedCardContainer}>
              <TicketCard
                flight={FlightStore.selectedFlight}
                hasTransfer={FlightStore.selectedFlight.hasTransfer} 
                onSelect={() => {}} 
                disabled={true}
              />
              <View style={styles.removeButtonContainer}>
                <TouchableOpacity style={styles.removeButton} onPress={handleRemoveFlight}>
                  <Text style={styles.removeButtonText}>Remove Flight</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
});

export default BlurWrapper;
