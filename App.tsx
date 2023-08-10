/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewProps,
  requireNativeComponent,
} from 'react-native';

const FOOCustomView = requireNativeComponent('FOOCustomView');

export const MyCustomView = (props: ViewProps) => {
  return <FOOCustomView {...props} />;
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigBox: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  biggerBox: {
    backgroundColor: 'yellow',
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredBox: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderProps: {
    backgroundColor: 'blue',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
  },
});

const Button = (props: {title: string}) => {

  const [pressed, setPressed] = React.useState(false);

  const style = pressed ? {backgroundColor: 'red'} : {backgroundColor: 'clear'};
  return (
    <Pressable
      onPress={e => {
        Alert.alert(props.title);
      }}
      onPressIn={e => {
        setPressed(true);
      }}
      onPressOut={e => {
        setPressed(false);
      }}
      style={style}>
      <Text>{props.title}</Text>
    </Pressable>
  );
};

function App(): JSX.Element {
  return (
    <View style={styles.biggerBox}>
      <Button title={'Button 1'} />
      <MyCustomView style={styles.bigBox}>
        <Button title={'Button 2'} />
        <View style={styles.centeredBox}>
          <Button title={'Button 3'} />
        </View>
        <Button title={'Button 4'} />
      </MyCustomView>
      <Button title={'Button 5'} />
    </View>
  );
}

export default App;
