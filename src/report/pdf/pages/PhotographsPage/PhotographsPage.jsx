import React from "react";
import { View, Image } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import SectionTitle from "../../components/SectionTitle";
import PDFPageLayout from "../../components/PDFPageLayout";

export const PhotographsPage = () => {
  const photographs = useReportStore((state) => state.photographs);

  const images = photographs
    ? photographs.map((img) => URL.createObjectURL(img))
    : [];

  return (
    <PDFPageLayout>
      <View id="photographs">
        <SectionTitle title={"Photographs"} />
        <View style={styles.photoGrid}>
          {images.slice(0, 8).map((img, i) => (
            <Image key={i} src={img} style={styles.photo} />
          ))}
        </View>
      </View>
    </PDFPageLayout>
  );
};
