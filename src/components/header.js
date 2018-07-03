import React from 'react';
import { Text, View } from 'react-native';

const Header = () => (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Albums</Text>
        </View>
    );


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8'
    },
  textStyle: {
      fontSize: 20
  }
};

export default Header;
