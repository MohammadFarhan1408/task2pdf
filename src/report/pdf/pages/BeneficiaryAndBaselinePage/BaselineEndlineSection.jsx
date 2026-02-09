import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { styles } from "./baselineStyles";
import { useReportStore } from "../../../../store/reportStore";

const BaselineEndlineSection = () => {
  const baselineEndline = useReportStore(
    (state) => state.baselineEndline || [],
  );

  return (
    <View id="baseline">
      <Text style={styles.introText}>
        The following comparison highlights the measurable progress achieved
        during the project intervention.
      </Text>

      <View style={[styles.table, { marginTop: 15 }]}>
        {/* Header */}
        <View style={[styles.tableRow, styles.tableHeader]}>
          <View style={[styles.tableCol, { flex: 3 }]}>
            <Text style={styles.headerText}>PARAMETER</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.headerText}>BASELINE</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.headerText}>ENDLINE</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.headerText}>% CHANGE</Text>
          </View>
        </View>

        {baselineEndline.length > 0 ? (
          baselineEndline.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCol, { flex: 3 }]}>
                <Text style={styles.cellTextBold}>{item.parameter || "—"}</Text>
              </View>

              <View style={styles.tableCol}>
                <Text style={styles.cellText}>{item.baselineValue || 0}</Text>
              </View>

              <View style={styles.tableCol}>
                <Text style={styles.cellText}>{item.endlineValue || 0}</Text>
              </View>

              <View style={[styles.tableCol, styles.changeCol]}>
                <Text
                  style={[
                    styles.changeText,
                    { color: item.percentChange >= 0 ? "#16a34a" : "#dc2626" },
                  ]}
                >
                  {item.percentChange >= 0 ? "+" : ""}
                  {item.percentChange}%
                </Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { flex: 6 }]}>
              <Text style={styles.cellText}>No comparison data available.</Text>
            </View>
          </View>
        )}
      </View>

      <View style={styles.summaryNote}>
        <Text style={styles.summaryTitle}>Data Interpretation:</Text>
        <Text style={styles.summaryText}>
          A positive percentage change indicates improvement post-intervention.
        </Text>
      </View>
    </View>
  );
};

export default BaselineEndlineSection;
