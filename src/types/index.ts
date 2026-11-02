export type ClassificationLevel = 
  | 'PUBLIC ARCHIVE' 
  | 'RESTRICTED EXECUTIVE' 
  | 'DEFCON SQUIRREL' 
  | 'OFFICIAL DIRECTIVE' 
  | 'CONTINENTAL RECORD'
  | 'EYES ONLY — COUNCIL';

export interface BulletinArticle {
  id: string;
  code: string;
  classification: ClassificationLevel;
  date: string;
  headline: string;
  deck: string;
  body: string[];
  fieldDispatches?: {
    location: string;
    report: string;
    status: 'OPTIMAL' | 'COMPROMISED' | 'VIGILANT';
  }[];
  archivalRef: string;
}

export interface GeneralDossier {
  name: string;
  rank: string;
  title: string;
  callsign: string;
  currentStatus: string;
  continentalVigilanceIndex: string;
  serviceRecordNumber: string;
  activeMandate: string;
  keyDirectives: string[];
  sealedOrdersSummary: string;
}

export interface Decree {
  id: string;
  code: string;
  title: string;
  issuedDate: string;
  effectivePeriod: string;
  category: 'DOMESTIC DISCIPLINE' | 'RESOURCE CONTROL' | 'BORDER RESTRICTION' | 'SURVEILLANCE' | 'MORAL SANITATION';
  classification: ClassificationLevel;
  signatory: string;
  sealNumber: string;
  summary: string;
  fullDecree: string[];
  mandatoryPenalties: string[];
  activeStatus: 'IN RIGOROUS FORCE' | 'RATIFIED' | 'EXTENDED TO DEC 1';
}

export interface CitizenReport {
  id: string;
  refCode: string;
  timestamp: string;
  sector: string;
  incidentType: string;
  classification: ClassificationLevel;
  excerpt: string;
  actionTaken: string;
  status: 'CONTAINED' | 'DISMISSED WITH SANCTION' | 'ESCALATED TO GENERAL';
}

export interface DailyChallenge {
  dayNumber: number;
  date: string;
  codeName: string;
  objective: string;
  hazardLevel: 'MODERATE' | 'SEVERE' | 'CRITICAL' | 'CATASTROPHIC';
  prohibitedActions: string[];
  sanctionedCountermeasures: string[];
  nationalComplianceRate: string;
}

export interface TreasuryAllocation {
  category: string;
  percentage: number;
  tokens: string;
  vestingRule: string;
  purpose: string;
}

export interface TreasuryData {
  department: string;
  headline: string;
  subheadline: string;
  tokenName: string;
  ticker: string;
  contractAddress: string;
  network: string;
  auditRecord: string;
  reservePreservationRatio: string;
  totalSupply: string;
  circulatingSupply: string;
  allocations: TreasuryAllocation[];
  liquiditySummary: {
    status: string;
    lockDuration: string;
    depositoryPool: string;
  };
  marketDataNotice: string;
  tradingLink: {
    label: string;
    url: string;
    isActive: boolean;
  };
  statutoryDisclaimer: string;
}
