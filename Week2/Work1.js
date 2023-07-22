import { StyleSheet, Image, Text, View, Button } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/IT_Logo.png")} />
        <Text style={styles.title}>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
      <View style={styles.container2}>
        <Button style={styles.button} title="Programs" />
        <Button style={styles.button} title="About us" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    paddingBottom: 40,
    paddingHorizontal: 10,
    gap: 10
  },
  title: {
    fontSize: 20,
  },
  image: {
    width: 120,
    height: 100,
  },
});
