import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 20,
    padding: 14,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#E5E7EB',
  },
  titleText: {
    fontSize: 22,
    fontWeight:800,
    color: '#111827',
    marginBottom: 0,
    textAlign: 'center',
    fontFamily: 'SF-Pro-Bold'
  },
  descriptionText: {
    fontSize: 17,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 400,
  },
  addButton: {
    backgroundColor: '#EA580C',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 14,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default styles;
