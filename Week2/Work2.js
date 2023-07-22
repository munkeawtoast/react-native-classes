import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const programs = [
    {
      name: "Information Technology",
      link: require("./assets/course-bach-it.jpg"),
    },
    {
      name: "Data Science and Business Analytics",
      link: require("./assets/course-bach-dsba.jpg"),
    },
    {
      name: "Business Information Technology (International Program)",
      link: require("./assets/course-bach-bit.jpg"),
    },
    {
      name: "Artificial Intelligence Technology",
      link: require("./assets/course-bach-ait.jpg"),
    },
  ];
  return (
    <>
      <View style={styles.nav}>
        <Image style={styles.image} source={require("./assets/IT_Logo.png")} />
        <Text style={styles.title}>Programs</Text>
      </View>
      <ScrollView style={styles.container}>
        {programs.map(({ name, link }) => (
          <TouchableOpacity key={name}>
            <View>
              <Image source={link} />
              <Text
                style={{
                  fontWeight: 500,
                  textAlign: "center",
                  paddingVertical: 5,
                  backgroundColor: "lightgray",
                }}
              >
                {name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "lightblue",
    display: "flex",
    paddingTop: 50,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  container: {},
  container2: {
    paddingBottom: 40,
  },
  title: {
    color: "blue",
    fontWeight: 800,
    fontSize: 30,
  },
  image: {
    resizeMode: "cover",
    width: 60,
    height: 50,
  },
});
