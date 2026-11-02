import { ClassificationLevel } from '../types';

export type PublicationStatus = 'draft' | 'published';

/**
 * Base record interface mandated for all editable content collections.
 */
export interface BaseContentRecord {
  id: string;
  title: string;
  body: string | string[];
  publicationDate: string;
  category: string;
  isFeatured: boolean;
  publicationStatus: PublicationStatus;
  order?: number;
}

/**
 * National News Collection Record
 */
export interface NationalNewsRecord extends BaseContentRecord {
  code: string;
  classification: ClassificationLevel;
  summary: string;
  author?: string;
  department?: string;
  fieldDispatches?: {
    location: string;
    report: string;
    status: 'OPTIMAL' | 'COMPROMISED' | 'VIGILANT';
  }[];
  archivalRef: string;
}

/**
 * Daily National Directive Collection Record
 */
export interface DailyDirectiveRecord extends BaseContentRecord {
  dayNumber: number;
  codeName: string;
  plainSummary: string;
  hazardLevel: 'MODERATE' | 'SEVERE' | 'CRITICAL' | 'CATASTROPHIC';
  prohibitedActions: string[];
  sanctionedCountermeasures: string[];
  nationalComplianceRate: string;
  operationalDate: string;
}

/**
 * Official Announcements and Decrees Collection Record
 */
export interface OfficialDecreeRecord extends BaseContentRecord {
  code: string;
  signatory: string;
  sealNumber: string;
  summary: string;
  mandatoryPenalties: string[];
  activeStatus: 'IN RIGOROUS FORCE' | 'RATIFIED' | 'EXTENDED TO DEC 1';
  classification: ClassificationLevel;
}

/**
 * Citizen Reports and Interceptions Collection Record
 */
export interface CitizenReportRecord extends BaseContentRecord {
  refCode: string;
  sector: string;
  incidentType: string;
  classification: ClassificationLevel;
  actionTaken: string;
  status: 'CONTAINED' | 'DISMISSED WITH SANCTION' | 'ESCALATED TO GENERAL';
}
