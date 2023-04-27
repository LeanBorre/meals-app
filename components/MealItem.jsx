import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  View,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({
  id,
  title,
  imgUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const selectMealHandler = () => {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealHandler}
      >
        <View>
          <Image style={styles.image} source={{ uri: imgUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    /* Android Shadow */
    elevation: 5,
    /* iOS Shadow */
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    margin: 8,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  /* iOS pressed reaction */
  buttonPressed: {
    opacity: 0.5,
  },
});
