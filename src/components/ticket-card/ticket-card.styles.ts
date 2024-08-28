import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'transparent',
    width:'94%',
    alignSelf:'center',
    overflow: 'hidden',
  },
  backgroundImage: {
    resizeMode: 'contain',
    backgroundColor:'transparent',
    flex:1,
    width: '100%',
    height: '100%'
  },
  ticketContainer: {
    padding: 0,
    borderRadius: 10,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  ticketContent: {
    paddingHorizontal: 15,
    backgroundColor:'transparent',
    width:'100%',
    padding:15  
  },
  flightInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:12
  },
  flightNumberText:{
    color:'#6B7280',
    fontWeight:'600',
    marginLeft:8,
    fontSize:13,
    marginRight:-2
  },
  airlineText: {
    fontSize: 13,
    fontWeight:'600',
    color:'#6B7280',
    marginLeft:-2
  },
  airlineTextContainer:{
    flexDirection:'row',
    alignItems:'center',    
  },
  durationText: {
    fontSize: 12,
    fontWeight:'500' ,
    color: '#C2410C',
  },
  durationContainer:{
    backgroundColor:'#FFF7ED',
    paddingLeft:8,
    paddingRight:8,
    borderWidth:1,
    borderColor:'#FED7AA',
    borderRadius:7
  },
  flightDetailsContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  departureInfoContainer:{
    flexDirection:'column',
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    textAlign:'left',
  },
  arrivalInfoContainer:{
    flexDirection:'column'
  },
  flightDateContainer: {
    alignSelf: 'flex-start',
  },
  flightDateContainerIcon:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'flex-start',
  },
  dateText: {
    fontSize: 13,
    color: '#6B7280',
    marginLeft:5,
    fontWeight:'400'
  },
  timeTextDeparture: {
    fontSize: 13,
    fontWeight: '600',
    color:'#374151',
    marginVertical:2,
    alignSelf:'flex-start'
  },
  timeTextArrival: {
    fontSize: 13,
    fontWeight: '600',
    color:'#374151',
    marginVertical:2,
    alignSelf:'flex-end'
  },
  locationContainerDeparture: {
    alignItems: 'flex-start',
  },
  locationContainerArrival: {
    alignItems: 'flex-end',
  },
  locationText: {
    fontSize: 20,
    fontWeight: '600',
    color:'#111827'
  },
  planeIconContainer: {
    paddingHorizontal: 10,
  },
  planeIcon: {
    fontSize: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dividerDot: {
    width: 6,
    height: 6,
    backgroundColor: '#000',
    borderRadius: 3,
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#000',
  },
  divider:{
    height: 0.8,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },
  leftCut: {
    position: 'absolute',
    left: -25, 
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    top: '50%',
    transform: [{ translateY: -25 }], 
  },
  rightCut: {
    position: 'absolute',
    right: -25, 
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    top: '50%',
    transform: [{ translateY: -25 }], 
  },
});

export default styles;
