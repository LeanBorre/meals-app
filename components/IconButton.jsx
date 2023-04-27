import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onSave, icon, color }) => {
  return (
    <View>
      <Pressable
        onPress={onSave}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Ionicons name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
