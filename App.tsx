import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import PlansScreen from './src/pages/plans/Plans';
import FlightsScreen from './src/pages/flights/Flights';
import MeScreen from './src/pages/me/Me';
import Header from './src/pages/header/Header';
import FlightStore from './src/store/FlightStore';
import BlurWrapper from './src/components/blur-wrapper/BlurWrapper';
import FlightsIconInactive from './src/assets/icons/plane_inactive.svg';
import FlightsIcon from './src/assets/icons/plane_icon.svg';
import PlansIcon from './src/assets/icons/calendar_active.svg';
import PlansIconInactive from './src/assets/icons/calendar_icon.svg';
import MeIcon from './src/assets/icons/user_active.svg';
import MeIconInactive from './src/assets/icons/user_icon.svg';
import { StyleSheet, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const stylesConst = StyleSheet.create({
  regular: {
    fontFamily: 'SF-Pro',
  },
  light: {
    fontFamily: 'SF-Pro-Light',  
  },
  medium: {
    fontFamily: 'SF-Pro-Medium',  
  },
  semiBold: {
    fontFamily: 'SF-Pro-Semibold', 
  },
  bold: {
    fontFamily: 'SF-Pro-Bold',
  },
});

const originalRender = Text.render;

Text.render = function render(props) {
  const style = StyleSheet.flatten(props.style) || {};
  const { fontWeight, fontFamily, ...otherStyles } = style;

  let fontFamilyStyle = stylesConst.regular.fontFamily; // Default font

  if (!fontFamily) {
    switch (fontWeight) {
      case '200':
        fontFamilyStyle = stylesConst.light.fontFamily;
        break;
      case '400':
      case 'normal':
        fontFamilyStyle = stylesConst.regular.fontFamily;
        break;
      case '500':
        fontFamilyStyle = stylesConst.medium.fontFamily;
        break;
      case '600':
        fontFamilyStyle = stylesConst.semiBold.fontFamily;
        break;
      case 'bold':
      case '700':
        fontFamilyStyle = stylesConst.bold.fontFamily;
        break;
      default:
        fontFamilyStyle = stylesConst.regular.fontFamily;
        break;
    }
  } else {
    fontFamilyStyle = fontFamily;
  }

  const newProps = {
    ...props,
    style: [{ ...otherStyles, fontFamily: fontFamilyStyle, fontWeight: null }],
  };

  return originalRender.call(this, newProps);
};

function App(): React.JSX.Element {
  return (
    <BlurWrapper>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Flights"
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size, focused}) => {

              if (route.name === 'Plans') {
                return focused ? (
                  <PlansIcon color={color} width={25} height={25} />
                ) : (
                  <PlansIconInactive width={25} height={25} />
                );
              } else if (route.name === 'Flights') {
                return focused ? (
                  <FlightsIcon color={color} width={25} height={25} />
                ) : (
                  <FlightsIconInactive width={25} height={25} />
                );
              } else if (route.name === 'Me') {
                return focused ? (
                  <MeIcon color={color} width={25} height={25} />
                ) : (
                  <MeIconInactive width={25} height={25} />
                );
              }else{
                return <Icon name={'airplane-outline'} size={size} color={color} />;
              }

            },
            header: ({ navigation }) => {
              let title;
              let plusIconVisible = false;

              if (route.name === 'Plans') {
                title = 'Plans';
              } else if (route.name === 'Flights') {
                title = 'Flights';
                plusIconVisible = true;
              } else if (route.name === 'Me') {
                title = 'Me';
              }

              return (
                <Header
                  title={title}
                  plusIconVisible={plusIconVisible}
                  onPlusPress={() => {
                    if (route.name === 'Flights') {
                      FlightStore.generateRandomFlight();
                    }
                  }}
                />
              );
            },
            tabBarActiveTintColor: '#111827',
            tabBarInactiveTintColor: '#6B7280',
          })}
        >
          <Tab.Screen name="Plans" component={PlansScreen} />
          <Tab.Screen name="Flights" component={FlightsScreen} />
          <Tab.Screen name="Me" component={MeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </BlurWrapper>
  );
}

export default App;
