import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "70%",
    backgroundColor: "#F9Cf45", // amarelo do Zé Delivery
    justifyContent: "flex-end"
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  label: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 12,
  },

  input: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#D2D2D2",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "800",
  },
});
