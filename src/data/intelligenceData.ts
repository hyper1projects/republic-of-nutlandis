import { CitizenReport, DailyChallenge } from '../types';

export const SECTOR_METRICS = [
  { sector: "Sector 1 (Capital District)", rating: "99.9%", status: "OPTIMAL", incidentCount: 0, alert: "Quiet / Orderly" },
  { sector: "Sector 2 (Northern Pines)", rating: "99.8%", status: "OPTIMAL", incidentCount: 1, alert: "Normal patrol cycle" },
  { sector: "Sector 3 (Central Plains)", rating: "98.4%", status: "ELEVATED", incidentCount: 7, alert: "Warm breeze inducing lethargy" },
  { sector: "Sector 4 (Hazel Valley)", rating: "97.9%", status: "RESTRICTED", incidentCount: 14, alert: "Mobile cold-plunge units deployed" },
  { sector: "Sector 5 (Western Coast)", rating: "99.2%", status: "OPTIMAL", incidentCount: 3, alert: "Maritime breezes brisk and austere" },
  { sector: "Sector 6 (Sub-Arctic Tundra)", rating: "100.0%", status: "OPTIMAL", incidentCount: 0, alert: "Sub-zero temperatures enforce perfection" },
  { sector: "Sector 7 (Eastern Walnut Marsh)", rating: "98.7%", status: "ELEVATED", incidentCount: 5, alert: "Algorithmic internet dampeners engaged" },
];

export const CITIZEN_REPORTS: CitizenReport[] = [
  {
    id: "rep-001",
    refCode: "INT-SEC3-0941",
    timestamp: "02 NOV 2026 // 03:14 ZULU",
    sector: "Sector 3 (Central Plains)",
    incidentType: "SUSPICIOUS DOMESTIC SEARCH QUERY",
    classification: "RESTRICTED EXECUTIVE",
    excerpt: "Automated packet sniffers intercepted an incognito browser request originating from IP 192.168.44.12: 'calming ASMR whisper videos for sleep'. Acoustic warning sirens activated in subject's hallway.",
    actionTaken: "Sector Warden dispatched. Device confiscated. Subject issued two cold tea bags and commanded to read the Civil Defense Charter aloud until dawn.",
    status: "CONTAINED"
  },
  {
    id: "rep-002",
    refCode: "INT-SEC4-0942",
    timestamp: "02 NOV 2026 // 04:45 ZULU",
    sector: "Sector 4 (Hazel Valley)",
    incidentType: "CONTRABAND INTERCEPTION // HIGH VELOCITY",
    classification: "EYES ONLY — COUNCIL",
    excerpt: "Border inspection checkpoint seized a flatbed commercial transport carrying 48 crates of scented lavender body butter and 12 pairs of velvet pajama trousers marked as 'plumbing gaskets'.",
    actionTaken: "Driver detained for interrogation. Cargo incinerated under ministerial supervision. Ashes distributed to local cabbage farms as soil neutralizer.",
    status: "ESCALATED TO GENERAL"
  },
  {
    id: "rep-003",
    refCode: "INT-SEC7-0943",
    timestamp: "01 NOV 2026 // 23:20 ZULU",
    sector: "Sector 7 (Eastern Marsh)",
    incidentType: "ACOUSTIC VIBRATION ANOMALY",
    classification: "PUBLIC ARCHIVE",
    excerpt: "Seismic micro-sensors detected continuous rhythmic reverberations emanating from residential unit 402 between 23:00 and 23:18 hours. Rapid Response Brigade mobilized with cold hoses.",
    actionTaken: "Upon breach, citizen was found vigorously assembling an IKEA pine bookshelf with a rubber mallet. Citizen apologized for noise and surrendered two excess Allen wrenches. False alarm.",
    status: "CONTAINED"
  },
  {
    id: "rep-004",
    refCode: "INT-SEC1-0944",
    timestamp: "01 NOV 2026 // 20:10 ZULU",
    sector: "Sector 1 (Capital District)",
    incidentType: "UNAUTHORIZED EYE CONTACT PROTOCOL BREACH",
    classification: "RESTRICTED EXECUTIVE",
    excerpt: "Public square optical monitoring recorded two citizens smiling knowingly at one another while queueing for dry oatmeal rations. Emotional resonance exceeded authorized municipal thresholds.",
    actionTaken: "Both parties separated by 50 meters and instructed to fixate on the brass bust of General Nutcracker for 30 minutes in solemn contemplation.",
    status: "DISMISSED WITH SANCTION"
  }
];

export const DAILY_CHALLENGES: DailyChallenge[] = [
  {
    dayNumber: 1,
    date: "NOVEMBER 01",
    codeName: "OPERATION COLD REVEILLE",
    objective: "Establish immediate psychological dominance over the autumn climate and purge lingering comfortable habits.",
    hazardLevel: "MODERATE",
    prohibitedActions: [
      "Remaining in bed for more than 45 seconds following alarm.",
      "Adjustment of water mixer toward red/warm indicator.",
      "Wearing fleece-lined loungewear after 07:00."
    ],
    sanctionedCountermeasures: [
      "Plunge hands into water containing at least three ice cubes.",
      "100 brisk jumping jacks facing the official state portrait."
    ],
    nationalComplianceRate: "99.88%"
  },
  {
    dayNumber: 2,
    date: "NOVEMBER 02",
    codeName: "OPERATION STEAM QUARANTINE",
    objective: "Eliminate domestic thermal indulgence and neutralize moisture-induced relaxation vectors.",
    hazardLevel: "SEVERE",
    prohibitedActions: [
      "Wiping condensation from bathroom mirrors.",
      "Application of body lotions or conditioning balms.",
      "Browsing photographic media depicting beach destinations."
    ],
    sanctionedCountermeasures: [
      "Conduct hygiene solely with coarse pumice bar.",
      "Stare at the blank ceiling while counting down from 1,000 in prime numbers."
    ],
    nationalComplianceRate: "99.72%"
  },
  {
    dayNumber: 3,
    date: "NOVEMBER 03",
    codeName: "OPERATION GREYSCALE PURGE",
    objective: "Deprive the central nervous system of hyper-stimulating visual saturation across all screens.",
    hazardLevel: "SEVERE",
    prohibitedActions: [
      "Viewing high-color-depth video transmissions.",
      "Unlocking handheld devices during bedroom hours.",
      "Engaging with short-form algorithmic video streams."
    ],
    sanctionedCountermeasures: [
      "Shift all digital displays to monochrome / 1-bit display mode.",
      "Read technical manuals regarding cold-rolled steel tolerances."
    ],
    nationalComplianceRate: "PENDING RATIFICATION"
  },
  {
    dayNumber: 4,
    date: "NOVEMBER 04",
    codeName: "THE SOVEREIGN WALNUT VIGIL",
    objective: "Test physical dexterity and mental presence through pocket custody of a fragile walnut.",
    hazardLevel: "CRITICAL",
    prohibitedActions: [
      "Cracking, biting, or scratching the assigned pocket walnut.",
      "Placing hands inside pockets during public assembly."
    ],
    sanctionedCountermeasures: [
      "Inspect the shell hourly for structural integrity.",
      "Recite the Walnut Oath upon encountering any state official."
    ],
    nationalComplianceRate: "COMMENCING IN 48 HOURS"
  }
];
