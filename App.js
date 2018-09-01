import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { sampleSize } from "lodash";
import { LinearGradient } from "expo";

import allGradients from "./gradients.json";

export default class App extends React.Component {
  state = {
    gradients: sampleSize(allGradients, 10)
  };

  render() {
    const { gradients } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={gradients}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <LinearGradient colors={item.colors} style={styles.gradientWrapper}>
              <Text style={[styles.text]}>{item.name}</Text>
            </LinearGradient>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  text: {
    backgroundColor: "transparent"
  },
  gradientWrapper: {
    height: 30
  },
  separator: {
    height: 10
  }
});
