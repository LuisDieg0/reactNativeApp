import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Image,
  FlatList
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const KEY_SAVE_COUNTER = "KEY_SAVE_COUNTER";

// componente de clase
export class AppClass extends Component {
  // estado
  state = {
    counter: 0,
    array: new Array(20).fill({})
  };

  async componentWillMount() {
    const counter = await AsyncStorage.getItem(KEY_SAVE_COUNTER);
    this.setState({ counter: parseInt(counter) });
    // se ejecuta antes del render
  }
  componentDidMount() {
    // se ejecuta despues del render
  }
  componentWillReceiveProps(props) {
    /* parms : props */
    // recive las propiedades al ser usada
  }

  componentWillUnmount() {
    // se ejecuta cunado el componente muere
  }

  aumenta = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    this.saveStorage(this.state.counter + 1);
  };

  disminuir = () => {
    this.setState({
      counter: this.state.counter - 1
    });
    this.saveStorage(this.state.counter - 1);
  };

  // guardar en la memoria del dispositivo
  saveStorage = item => {
    AsyncStorage.setItem(KEY_SAVE_COUNTER, `${item}`);
  };

  renderItem = ({ image, title, onPress }) => {
    return (
      <TouchableOpacity
        style={{ flexDirection: "row", padding: 10 }}
        onPress={onPress}
      >
        <Image style={{ height: 25, width: 25 }} source={image} />
        <Text style={{ marginLeft: 10 }}>{title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, marginTop: 50 }}>
        <View style={{ flexDirection: "row", padding: 20 }}>
          <View>
            <View
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                backgroundColor: "#C4C4C4"
              }}
            ></View>
          </View>
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text>Pablo Gutierrez</Text>

            <Text>4.7</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderWidth: 1,
            borderColor: "#4C939E",
            padding: 20
          }}
        ></View>
        <FlatList
          data={this.state.array}
          renderItem={({ }) => {
            return this.renderItem({
              image: null,
              title: "Mis datos personales",
              onPress: () => { }
            });
          }}
        />
      </ScrollView>
    );
  }
}

// componente con funcion
// nombre comun hooks
// dos tipos de funciones
// funcion normal function name(){}
// funcion flecha name=()=>{}

export function AppFunction() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // se ejecuta despues del return
    // se ejecuta antes del return
    // recive las propiedades al ser usada
    return () => {
      // se ejecuta cunado el componente muere
    };
  });

  const aumenta = () => {
    setCounter(counter + 1);
  };

  const disminuir = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: "red" }}>{counter}</Text>
      <View>
        <TouchableOpacity style={{ flex: 1, backgroundColor: "orange", }} onPress={aumenta}>
          <Text style={{padding:10}}>Aumentar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, backgroundColor: "red",  }} onPress={disminuir}>
          <Text style={{padding:10}} >Disminuir</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default AppFunction;
