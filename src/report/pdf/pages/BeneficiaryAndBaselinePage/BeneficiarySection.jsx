import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { styles } from "./beneficiaryStyles";
import { useReportStore } from "../../../../store/reportStore";

const GenderBar = ({ label, percentage }) => {
  const colors = {
    female: "#ec4899",
    male: "#3b82f6",
    other: "#94a3b8",
  };
  const color = colors[label.toLowerCase()] || colors.other;

  return (
    <View style={styles.genderBarContainer}>
      <View style={styles.genderBarHeader}>
        <Text style={styles.genderBarLabel}>{label.toUpperCase()}</Text>
        <Text style={styles.genderBarPercentage}>{percentage}%</Text>
      </View>
      <View style={styles.genderBarBg}>
        <View
          style={[
            styles.genderBarFill,
            { width: `${percentage}%`, backgroundColor: color },
          ]}
        />
      </View>
    </View>
  );
};

const BeneficiarySection = () => {
  const {
    totalBeneficiaries,
    ageGroup,
    educationBackground,
    genderDistribution = {},
    geographicCoverage,
    socioEconomicBackground,
  } = useReportStore((state) => state.beneficiaryProfile || {});

  return (
    <View id="beneficiary">
      <View style={styles.statsRow}>
        <View style={styles.mainStatBox}>
          <Text style={styles.statLabel}>TOTAL BENEFICIARIES</Text>
          <Text style={styles.statValue}>{totalBeneficiaries}</Text>
          <Text style={styles.statSubtext}>(Direct & Indirect Impact)</Text>
        </View>

        <View style={styles.sideStatBox}>
          <Text style={styles.statLabel}>PRIMARY AGE GROUP</Text>
          <Text style={styles.statValueSmall}>
            {ageGroup?.toLowerCase().replace("years", "").replace("year", "")}{" "}
            Years
          </Text>
        </View>
      </View>

      <View style={styles.mainGrid}>
        <View style={styles.column}>
          <View style={styles.sectionCard}>
            <Text style={styles.cardHeader}>GENDER DISTRIBUTION</Text>
            {Object.entries(genderDistribution).map(([label, value], i) => (
              <GenderBar key={i} label={label} percentage={value} />
            ))}
          </View>

          <View style={[styles.sectionCard, { marginTop: 15 }]}>
            <Text style={styles.cardHeader}>EDUCATIONAL BACKGROUND</Text>
            <Text style={styles.bodyText}>{educationBackground}</Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.sectionCard}>
            <Text style={styles.cardHeader}>SOCIO-ECONOMIC PROFILE</Text>
            <Text style={styles.bodyText}>{socioEconomicBackground}</Text>
          </View>

          <View
            style={[
              styles.sectionCard,
              { marginTop: 15, backgroundColor: "#f0f9ff" },
            ]}
          >
            <Text style={styles.cardHeader}>GEOGRAPHIC COVERAGE</Text>
            <Text style={[styles.bodyText, { color: "#0369a1" }]}>
              {geographicCoverage}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BeneficiarySection;
