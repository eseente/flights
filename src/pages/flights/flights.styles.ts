import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    marginVertical: 0,
  },
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
    width:'95%',
    zIndex:10,
  },
  removeButtonContainer: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:10
  },
  removeButton:{
    backgroundColor:'#FEE2E2',
    width:'95%',
    alignItems:'center',
    borderRadius:14,
    paddingVertical:14,
    paddingHorizontal:20
  },
  removeButtonText:{
    color:'#7F1D1D',
    fontSize:17,
    fontWeight:'bold'
  },
  activityIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});

export default styles;
