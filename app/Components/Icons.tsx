import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

type IconsProps = {
  name: string;
};

const Icons = ({ name }: IconsProps) => {
  switch (name) {
      case('arrowleft'):
      return <AntDesign name="arrowleft" size={25} color="#000000" />;

      case('real-estate-agent'):
      return <MaterialIcons name="real-estate-agent" size={23} color="#000000" />;

      case('exclamationcircleo'):
      return <AntDesign name="exclamationcircleo" size={23} color="#000000" />;

      case('email-fast-outline'):
      return <MaterialCommunityIcons name="email-fast-outline" size={23} color="#000000" />;

      case('questioncircleo'):
      return <AntDesign name="questioncircleo" size={23} color="#000000" />;

      case('keyboard-arrow-right'):
      return <MaterialIcons name="keyboard-arrow-right" size={23} color="#AAAAAA" />;

    default:
      return null;
    }
  };
  
  export default Icons;
  
