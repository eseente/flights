import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:10
  },
  selectedCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    width:'100%',
    zIndex:10,
  },
  removeButtonContainer: {
    marginTop: 5,
    width: '94%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:10
  },
  removeButton:{
    backgroundColor:'#FEE2E2',
    width:'94%',
    alignItems:'center',
    borderRadius:14,
    paddingVertical:8,
    paddingHorizontal:20
  },
  removeButtonText:{
    color:'#7F1D1D',
    fontSize:17,
    fontWeight:'600'
  },
  activityIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});

export default styles;
