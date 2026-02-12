import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 5,
  },
  photo: {
    height: 100,
    width: "auto",
    objectFit: "contain",
  },
});
