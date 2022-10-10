import React, { useState } from 'react';
import { Button, Text, TextInput, View, Modal } from 'react-native';

const InputOutput = () => {
  const [text, setText] = useState('');
  const [pressed, setPressed] = useState(false);
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Please enter name here "
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Button 
      title = "Next"
        onPress={() => {
          setPressed(!pressed);
        }}
      />
      <Modal visible={pressed}>
        <Text style={{padding: 10, fontSize: 42}}>
          {text.split(' ').map((word) => word).join(' ')}
        </Text>
        <Button 
        title = "Back"
        onPress={() => {
          setPressed(!pressed);
        }}
      />
      </Modal>
    </View>
  );
}

export default InputOutput;
