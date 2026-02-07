import { create } from "zustand";

export const useReportStore = create((set) => ({
  sections: {
    economicImpact: true,
    caseStudy: true,
  },

  projectOverview: {
    projectTitle: "",
    implementingOrganization: "",
    partnerSponsor: "",
    projectDuration: "",
    location: "",
    targetBeneficiaries: "",
    problemStatement: "",
    startDate: null,
    endDate: null,
  },

  objectives: {
    primaryObjectives: "",
    secondaryObjectives: "",
    shortTermOutcomes: "",
    longTermOutcomes: "",
    sdgAlignment: "",
  },

  beneficiaryProfile: {
    totalBeneficiaries: 0,
    ageGroup: "",
    genderDistribution: {
      female: 0,
      male: 0,
      other: 0,
    },
    educationBackground: "",
    socioEconomicBackground: "",
    geographicCoverage: "",
  },

  baselineEndline: [
    {
      parameter: "",
      baselineValue: 0,
      endlineValue: 0,
      percentChange: 0,
    },
  ],

  quantitativeImpact: {
    participantsTrained: 0,
    attendanceRate: 0,
    completionRate: 0,
    certificationsAchieved: 0,
    assessmentImprovement: 0,
  },

  qualitativeImpact: {
    confidenceImprovement: "",
    leadershipSkills: "",
    teamwork: "",
    criticalThinking: "",
    testimonials: [],
  },

  learningOutcomes: {
    technicalSkillsGained: "",
    softSkillsDeveloped: "",
    toolsPlatformsUsed: "",
    handsOnLearningHours: 0,
  },

  institutionalImpact: {
    teacherCapacityBuilding: "",
    infrastructureUse: "",
    curriculumEnhancement: "",
    sustainabilityMeasures: "",
  },

  socialImpact: {
    inclusionAndEquity: "",
    communityEngagement: "",
    awarenessPrograms: "",
    digitalDivideReduction: "",
  },

  economicImpact: {
    employabilityEnhancement: "",
    incomeOpportunities: "",
    costPerBeneficiary: "",
    roi: "",
  },

  innovationImpact: {
    newTechnologies: "",
    innovationProjects: "",
    research: "",
  },

  caseStudy: {
    beneficiaryBackground: "",
    interventionDetails: "",
    outcomeAchieved: "",
    testimonial: "",
  },

  challengesAndLearnings: {
    keyChallenges: "",
    mitigationStrategies: "",
    lessonsLearned: "",
  },

  sustainability: {
    continuationPlan: "",
    scalabilityPotential: "",
    replicationPossibilities: "",
  },

  monitoringEvaluation: {
    dataCollectionTools: "",
    assessmentMethods: "",
    monitoringFrequency: "",
  },

  conclusion: {
    summaryOfImpact: "",
    keyTakeaways: "",
    recommendations: "",
  },

  photographs: [],

  setSections: (newSections) =>
    set((state) => ({
      sections: { ...state.sections, ...newSections },
    })),

  // Update Project Overview
  updateProjectOverview: (field, value) =>
    set((state) => ({
      projectOverview: {
        ...state.projectOverview,
        [field]: value,
      },
    })),

  // Update Beneficiary Profile
  updateBeneficiaryProfile: (field, value) =>
    set((state) => ({
      beneficiaryProfile: {
        ...state.beneficiaryProfile,
        [field]: value,
      },
    })),

  // Update Quantitative Impact
  updateQuantitativeImpact: (field, value) =>
    set((state) => ({
      quantitativeImpact: {
        ...state.quantitativeImpact,
        [field]: value,
      },
    })),

  // Update Challenges And Learnings
  updateChallengesAndLearnings: (field, value) =>
    set((state) => ({
      challengesAndLearnings: {
        ...state.challengesAndLearnings,
        [field]: value,
      },
    })),

  // Update Photographs
  updatePhotographs: (files) =>
    set(() => ({
      photographs: Array.from(files).slice(0, 8),
    })),

  // Update Learning Outcomes
  updateLearningOutcomes: (field, value) =>
    set((state) => ({
      learningOutcomes: {
        ...state.learningOutcomes,
        [field]: value,
      },
    })),

  // Update Qualititative Impact
  updateQualitativeImpact: (field, value) =>
    set((state) => ({
      qualitativeImpact: {
        ...state.qualitativeImpact,
        [field]: value,
      },
    })),

  // Update Objectives
  updateObjectives: (field, value) =>
    set((state) => ({
      objectives: {
        ...state.objectives,
        [field]: value,
      },
    })),

  // Update Baseline Endline
  updateBaselineEndline: (field, value) =>
    set((state) => ({
      baselineEndline: state.baselineEndline.map((item, index) =>
        index === 0 ? { ...item, [field]: value } : item,
      ),
    })),

  // Update Institutional Impact
  updateInstitutionalImpact: (field, value) =>
    set((state) => ({
      institutionalImpact: {
        ...state.institutionalImpact,
        [field]: value,
      },
    })),

  // Update Innovation Impact
  updateInnovationImpact: (field, value) =>
    set((state) => ({
      innovationImpact: {
        ...state.innovationImpact,
        [field]: value,
      },
    })),

  // Update Social Impact
  updateSocialImpact: (field, value) =>
    set((state) => ({
      socialImpact: {
        ...state.socialImpact,
        [field]: value,
      },
    })),

  // Update Economic Impact
  updateEconomicImpact: (field, value) =>
    set((state) => ({
      economicImpact: {
        ...state.economicImpact,
        [field]: value,
      },
    })),

  // Update Case Study
  updateCaseStudy: (field, value) =>
    set((state) => ({
      caseStudy: {
        ...state.caseStudy,
        [field]: value,
      },
    })),

  // Update Sustainability
  updateSustainability: (field, value) =>
    set((state) => ({
      sustainability: {
        ...state.sustainability,
        [field]: value,
      },
    })),

  // Update Monitoring Evaluation
  updateMonitoringEvaluation: (field, value) =>
    set((state) => ({
      monitoringEvaluation: {
        ...state.monitoringEvaluation,
        [field]: value,
      },
    })),
}));
