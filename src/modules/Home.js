import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Image,
  FlatList,
  StyleSheet
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
        <Image style={{ height: 25, width: 25 }} /* source={{ uri: url}} */ />
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
          renderItem={({}) => {
            return this.renderItem({
              image: null,
              title: "Mis datos personales",
              onPress: () => {}
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

export function AppFunction(props) {
  const [counter, setCounter] = useState("");

  useEffect(() => {
    console.log("propiedades recibidas", props);
    // se ejecuta despues del return
    // se ejecuta antes del return
    // recive las propiedades al ser usada
    return () => {
      // se ejecuta cunado el componente muere
    };
  });

  const aumenta = (paramA, parmasB) => {
    setCounter(counter + 1);
  };

  const disminuir = () => {
    setCounter(counter - 1);
  };

  const navegar = () => {
    props.navigation.navigate("Profile");
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ flex: 1, resizeMode: "cover" }}
        source={{
          uri:
            "https://iphoneros.com/wp-content/uploads/2018/07/macbookpro2018.jpg"
        }}
      />

      <View
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View>
            <TouchableOpacity>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  style={{ height: 100, width: 100, borderRadius: 50 }}
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIiloJS8J1_AXSqs8HqClMuUPLuniwnGjWJGHDjFJnnvrHpzkt&usqp=CAU"
                  }}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.counterNumber}>
              <View
                style={{
                  backgroundColor: "red",
                  borderColor: "red",
                  padding: 50,
                  borderRadius: 25
                }}
              >
                <Text style={{ color: "white", fontSize: 50 }}>{counter}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity style={styles.touchAumentar} onPress={aumenta}>
                <View>
                  <Text style={{ color: "white", fontSize: 25 }}>Aumentar</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.touchDisminuir}
                onPress={disminuir}
              >
                <Text style={{ color: "white", fontSize: 25 }}>Disminuir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={navegar}>
          <Text>Navegar a profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botones: {
    flex: 1,
    flexDirection: "row",
    margin: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 40
  },

  touchAumentar: {
    backgroundColor: "blue",
    borderWidth: 3,
    borderColor: "blue",
    borderRadius: 15,
    fontSize: 30,
    padding: 10,
    marginLeft: 10,
    margin: 10
  },

  touchDisminuir: {
    backgroundColor: "blue",

    borderWidth: 3,
    borderColor: "blue",
    borderRadius: 15,
    fontSize: 30,
    padding: 10,
    marginLeft: 10,
    margin: 10
  },

  counterNumber: {
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 5
  }
});

export default AppFunction;
