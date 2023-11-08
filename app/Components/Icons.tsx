import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'

type IconsProps = {
  name: string;
};

const Icons = ({ name }: IconsProps) => {
  switch (name) {
      case('arrowleft'):
      return <AntDesign name="arrowleft" size={25} color="#000000" />;

    default:
      return null;
    }
  };
  
  export default Icons;
  
