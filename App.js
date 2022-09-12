import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const listLanguanges = [
    "purple",
    "white",
    "yellow",
    "green",
    "orange",
    "pink",
    "violet",
    "red",
    "brown",
    "gray",
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={listLanguanges}
        numColumns={2}
        renderItem={({ item }) => (
          <Text
            style={{
              fontSize: 40,
              backgroundColor: item,
              width: "120px",
            }}
          >
            {item}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
