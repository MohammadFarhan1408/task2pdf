import React from "react";
import { View, Text, Page, Link } from "@react-pdf/renderer";
import { styles } from "./styles";
import PDFHeader from "../../components/PDFHeader";
import PDFFooter from "../../components/PDFFooter";
import { useReportStore } from "../../../../store/reportStore";

export const TableOfContentsPage = () => {
  const economicImpact = useReportStore((state) => state.economicImpact);

  const isEconomicEmpty =
    !economicImpact.employabilityEnhancement &&
    !economicImpact.incomeOpportunities &&
    !economicImpact.costPerBeneficiary &&
    !economicImpact.roi;

  const pageBlocks = [
    { items: [{ title: "Summary", target: "summary" }] },

    { items: [{ title: "Project Overview", target: "project-overview" }] },

    {
      items: [
        {
          title: "Objectives & Intended Outcomes",
          target: "objectives",
        },
      ],
    },

    {
      items: [
        { title: "Beneficiary Profile", target: "beneficiary" },
        { title: "Baseline vs Endline Comparison", target: "baseline" },
      ],
    },

    {
      items: [
        { title: "Quantitative Impact", target: "quantitative-impact" },
        { title: "Qualitative Impact", target: "qualitative-impact" },
      ],
    },

    {
      items: [
        {
          title: "Learning & Skill Outcomes",
          target: "learning-and-skill",
        },
        {
          title: "Institutional / Ecosystem Impact",
          target: "institutional-impact",
        },
      ],
    },

    {
      items: [
        { title: "Social Impact", target: "social-impact" },
        {
          title: "Innovation & Technology Impact",
          target: "innovation-impact",
        },
      ],
    },

    // OPTIONAL PAGE
    {
      optional: true,
      show: !isEconomicEmpty,
      items: [{ title: "Economic Impact", target: "economic-impact" }],
    },

    {
      items: [
        { title: "Case Studies / Success Stories", target: "case-studies" },
        { title: "Challenges & Learnings", target: "challenges-learning" },
      ],
    },

    {
      items: [
        { title: "Sustainability & Scalability", target: "sustainability" },
        {
          title: "Monitoring & Evaluation Methodology",
          target: "monitoring-evaluation",
        },
      ],
    },

    { items: [{ title: "Photographs", target: "photographs" }] },
  ];

  const visibleBlocks = pageBlocks.filter(
    (block) => !block.optional || block.show,
  );

  const START_PAGE = 3;
  let INDEX_NUM = 1;
  return (
    <Page size="A4" style={styles.page} id="table-content">
      <PDFHeader title="Table of Contents" />

      <View style={styles.tocContainer}>
        {visibleBlocks.map((block, blockIndex) => {
          const pageNumber = START_PAGE + blockIndex;

          return block.items.map((item, itemIndex) => (
            <View key={`${blockIndex}-${itemIndex}`} style={styles.tocItem}>
              <Link src={`#${item.target}`} style={styles.tocText}>
                {`${INDEX_NUM++}. ${item.title}`}
              </Link>

              <View style={styles.dotLeader} />

              <Text style={styles.tocPage}>{pageNumber}</Text>
            </View>
          ));
        })}
      </View>

      <PDFFooter />
    </Page>
  );
};
