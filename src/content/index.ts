import rawNews from './news.json';
import rawDirectives from './directives.json';
import rawDecrees from './decrees.json';
import rawCitizenReports from './citizenReports.json';

import {
  NationalNewsRecord,
  DailyDirectiveRecord,
  OfficialDecreeRecord,
  CitizenReportRecord,
  BaseContentRecord,
} from './types';

// Cast and type raw imported JSON data
const allNews = rawNews as NationalNewsRecord[];
const allDirectives = rawDirectives as DailyDirectiveRecord[];
const allDecrees = rawDecrees as OfficialDecreeRecord[];
const allCitizenReports = rawCitizenReports as CitizenReportRecord[];

/**
 * Universal comparator: sorts primarily by explicit 'order' ascending,
 * falling back to publicationDate descending.
 */
function sortByOrderOrDate<T extends BaseContentRecord>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    const dateA = new Date(a.publicationDate).getTime();
    const dateB = new Date(b.publicationDate).getTime();
    return dateB - dateA;
  });
}

/**
 * Filter only published records
 */
function filterPublished<T extends BaseContentRecord>(items: T[]): T[] {
  return items.filter((item) => item.publicationStatus === 'published');
}

/* =========================================================================
   1. NATIONAL NEWS SERVICE
   ========================================================================= */

/**
 * Get all published national news records sorted by order/date.
 */
export function getPublishedNews(options?: { category?: string; limit?: number }): NationalNewsRecord[] {
  let records = filterPublished(allNews);

  if (options?.category && options.category !== 'ALL') {
    records = records.filter((r) => r.category === options.category);
  }

  const sorted = sortByOrderOrDate(records);

  if (options?.limit && options.limit > 0) {
    return sorted.slice(0, options.limit);
  }

  return sorted;
}

/**
 * Get the current lead/featured news bulletin.
 * Returns the first published record flagged with `isFeatured: true`,
 * or falls back to the top-ordered published record.
 */
export function getFeaturedNews(): NationalNewsRecord | null {
  const published = getPublishedNews();
  const featured = published.find((r) => r.isFeatured);
  return featured || published[0] || null;
}

/**
 * Retrieve a specific news record by ID.
 */
export function getNewsById(id: string): NationalNewsRecord | undefined {
  return allNews.find((r) => r.id === id);
}

/* =========================================================================
   2. DAILY DIRECTIVES SERVICE
   ========================================================================= */

/**
 * Get all published daily national directives sorted by day number or order.
 */
export function getPublishedDirectives(): DailyDirectiveRecord[] {
  const published = filterPublished(allDirectives);
  return sortByOrderOrDate(published);
}

/**
 * Get today's active directive (flagged as featured, or matching the current day).
 */
export function getActiveDirective(): DailyDirectiveRecord | null {
  const published = getPublishedDirectives();
  const featured = published.find((d) => d.isFeatured);
  return featured || published[0] || null;
}

/**
 * Retrieve a daily directive by day number.
 */
export function getDirectiveByDay(dayNumber: number): DailyDirectiveRecord | undefined {
  return filterPublished(allDirectives).find((d) => d.dayNumber === dayNumber);
}

/* =========================================================================
   3. OFFICIAL DECREES & ANNOUNCEMENTS SERVICE
   ========================================================================= */

/**
 * Get all published official decrees, optionally filtered by category.
 */
export function getPublishedDecrees(options?: { category?: string; limit?: number }): OfficialDecreeRecord[] {
  let records = filterPublished(allDecrees);

  if (options?.category && options.category !== 'ALL') {
    records = records.filter((d) => d.category === options.category);
  }

  const sorted = sortByOrderOrDate(records);

  if (options?.limit && options.limit > 0) {
    return sorted.slice(0, options.limit);
  }

  return sorted;
}

/**
 * Get all unique decree categories available in published records.
 */
export function getDecreeCategories(): string[] {
  const published = filterPublished(allDecrees);
  const categories = new Set<string>();
  published.forEach((d) => {
    if (d.category) categories.add(d.category);
  });
  return ['ALL', ...Array.from(categories)];
}

/**
 * Retrieve a specific decree by ID.
 */
export function getDecreeById(id: string): OfficialDecreeRecord | undefined {
  return allDecrees.find((d) => d.id === id);
}

/**
 * Retrieve the featured decree / supreme proclamation.
 */
export function getFeaturedDecree(): OfficialDecreeRecord | null {
  const published = getPublishedDecrees();
  const featured = published.find((d) => d.isFeatured);
  return featured || published[0] || null;
}

/* =========================================================================
   4. CITIZEN REPORTS & SURVEILLANCE WIRES SERVICE
   ========================================================================= */

/**
 * Get all published citizen reports sorted by order/date.
 */
export function getPublishedCitizenReports(options?: { sector?: string; limit?: number }): CitizenReportRecord[] {
  let records = filterPublished(allCitizenReports);

  if (options?.sector && options.sector !== 'ALL') {
    records = records.filter((r) => r.sector === options.sector);
  }

  const sorted = sortByOrderOrDate(records);

  if (options?.limit && options.limit > 0) {
    return sorted.slice(0, options.limit);
  }

  return sorted;
}

/**
 * Retrieve a citizen report by ID.
 */
export function getCitizenReportById(id: string): CitizenReportRecord | undefined {
  return allCitizenReports.find((r) => r.id === id);
}

/* =========================================================================
   5. AUDIT / CONTENT REPOSITORY STATS (For future CMS or status bars)
   ========================================================================= */

export function getContentStats() {
  return {
    news: {
      total: allNews.length,
      published: filterPublished(allNews).length,
      drafts: allNews.length - filterPublished(allNews).length,
    },
    directives: {
      total: allDirectives.length,
      published: filterPublished(allDirectives).length,
      drafts: allDirectives.length - filterPublished(allDirectives).length,
    },
    decrees: {
      total: allDecrees.length,
      published: filterPublished(allDecrees).length,
      drafts: allDecrees.length - filterPublished(allDecrees).length,
    },
    citizenReports: {
      total: allCitizenReports.length,
      published: filterPublished(allCitizenReports).length,
      drafts: allCitizenReports.length - filterPublished(allCitizenReports).length,
    },
  };
}

export * from './types';
