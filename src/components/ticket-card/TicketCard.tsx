import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import moment from 'moment';
import { styles } from './ticket-card.styles';
import Icon from 'react-native-vector-icons/Entypo';
import CompanyLogo from '../../assets/icons/tk_logo.svg';
import FlightDivider from '../../assets/icons/plane_divider.svg';
import TakeoffArrow from '../../assets/icons/takeoff_arrow.svg';
import LandingArrow from '../../assets/icons/landing_arrow.svg';
import {Flight} from '../../store/FlightStore';

interface TicketCardProps {
  flight: Flight;
  hasTransfer?: boolean;
  onSelect: () => void;
  disabled: boolean;
}

const TicketCard: React.FC<TicketCardProps> = ({ flight, hasTransfer, onSelect, disabled = false }) => {
  const nonTransferBackground = require('../../assets/images/single_ticket.png');
  const transferBackground = require('../../assets/images/multiple_ticket.png');

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.4}
      onPress={onSelect}
      style={styles.container}
    >
      <ImageBackground
        source={hasTransfer ? transferBackground : nonTransferBackground}
        style={styles.ticketContainer}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.ticketContainer}>
          <View style={styles.ticketContent}>
            <View style={styles.flightInfoContainer}>
              <View style={styles.airlineTextContainer}>
                <CompanyLogo width={24} height={24} />
                <Text style={styles.flightNumberText}>{flight.flightNumber}</Text>
                <Icon name="dot-single" size={16} color="#6B7280" />
                <Text style={styles.airlineText}>{flight.airline}</Text>
              </View>
              <View style={styles.durationContainer}>
                <Text style={styles.durationText}>{flight.duration}</Text>
              </View>
            </View>

            <View style={styles.flightDetailsContainer}>
              <View style={styles.departureInfoContainer}>
                <View style={styles.flightDateContainerIcon}> 
                  <TakeoffArrow width={20} height={20}/>
                  <Text style={styles.dateText}>{moment(flight.departureDate).format('DD MMM YYYY')}</Text>
                </View>
                <View style={styles.locationContainerDeparture}>
                  <Text style={styles.locationText}>{flight.departure}</Text>
                </View>
                <Text style={styles.timeTextDeparture}>{moment(flight.departureDate).format('hh:mm A')}</Text>
              </View>

              <View style={styles.planeIconContainer}>
                <FlightDivider width={96} height={33.94}/>
              </View>

              <View style={styles.arrivalInfoContainer}>
                <View style={styles.flightDateContainerIcon}> 
                  <LandingArrow width={20} height={20}/>
                  <Text style={styles.dateText}>{moment(flight.arrivalDate).format('DD MMM YYYY')}</Text>
                </View>
                <View style={styles.locationContainerArrival}>
                  <Text style={styles.locationText}>{flight.arrival}</Text>
                </View>
                <Text style={styles.timeTextArrival}>{moment(flight.arrivalDate).format('hh:mm A')}</Text>
              </View>
            </View>
            
            {hasTransfer && (
              <>
                <View style={styles.divider} />
                <View style={styles.flightInfoContainer}>
                  <View style={styles.airlineTextContainer}>
                    <CompanyLogo width={24} height={24} />
                    <Text style={styles.flightNumberText}>{flight.transferFlight && flight.transferFlight.flightNumber}</Text>
                    <Icon name="dot-single" size={16} color="#6B7280" />
                    <Text style={styles.airlineText}>{flight.transferFlight && flight.transferFlight.airline}</Text>
                  </View>
                  <View style={styles.durationContainer}>
                    <Text style={styles.durationText}>{flight.transferFlight && flight.transferFlight.duration}</Text>
                  </View>
                </View>
                <View style={styles.flightDetailsContainer}>
                  <View style={styles.departureInfoContainer}>
                    <View style={styles.flightDateContainerIcon}> 
                      <TakeoffArrow width={20} height={20}/>
                      <Text style={styles.dateText}>{moment(flight.transferFlight && flight.transferFlight.departureDate).format('DD MMM YYYY')}</Text>
                    </View>
                    <View style={styles.locationContainerDeparture}>
                      <Text style={styles.locationText}>{flight.transferFlight && flight.transferFlight.departure}</Text>
                    </View>
                    <Text style={styles.timeTextDeparture}>{moment(flight.transferFlight && flight.transferFlight.departureDate).format('hh:mm A')}</Text>
                  </View>
                  <View style={styles.planeIconContainer}>
                    <FlightDivider width={96} height={33.9}/>
                  </View>
                  <View style={styles.arrivalInfoContainer}>
                    <View style={styles.flightDateContainerIcon}> 
                      <LandingArrow width={20} height={20}/>
                      <Text style={styles.dateText}>{moment(flight.transferFlight && flight.transferFlight.arrivalDate).format('DD MMM YYYY')}</Text>
                    </View>
                    <View style={styles.locationContainerArrival}>
                      <Text style={styles.locationText}>{flight.transferFlight && flight.transferFlight.arrival}</Text>
                    </View>
                    <Text style={styles.timeTextArrival}>{moment(flight.transferFlight && flight.transferFlight.arrivalDate).format('hh:mm A')}</Text>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default TicketCard;
