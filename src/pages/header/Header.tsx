import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AddIcon from '../../assets/icons/add_icon.svg';

interface HeaderProps {
  title: string;
  plusIconVisible: boolean;
  onPlusPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, plusIconVisible, onPlusPress }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, alignItems: 'center',backgroundColor:'white' }}>
      <Text style={{ fontSize: 34, fontWeight:'700',color:'#111827' }}>{title}</Text>
      {plusIconVisible && (
        <TouchableOpacity onPress={onPlusPress}>
          <AddIcon width={24} height={24} color={"#111827"}/>
        </TouchableOpacity>
      )}
    </View>
    
  );
};

export default Header;
