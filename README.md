# REPUBLIC OF NUTLANDIS — OFFICIAL GOVERNMENT PORTAL
**HOLD YOUR NUTS.**

Official web publication and executive portal for the **Republic of Nutlandis**, a fictional internet nation and satirical community project built around No Nut November (NNN).

Presented in the dignified style of a modern government portal, archival publication, and classified institutional dossier.

---

## 1. Content Architecture & Separation of Concerns

All frequently updated editorial and state records are decoupled from visual layout components and isolated into structured content collections under `src/content/`.

### Unified Content Record Schema (`BaseContentRecord`)
Every record across all content collections implements the standardized base schema:

```typescript
export interface BaseContentRecord {
  id: string;                          // Unique record identifier
  title: string;                       // Headline / formal title
  body: string | string[];             // Core prose / articles / paragraphs
  publicationDate: string;             // ISO-8601 publication timestamp
  category: string;                    // Thematic / jurisdictional category
  isFeatured: boolean;                 // Primary feature flag (e.g., hero lead, active directive)
  publicationStatus: 'draft' | 'published'; // State toggle (drafts excluded from live UI)
  order?: number;                      // Explicit display sequence
}
```

### Content Collections

| Collection | Path | Description & Schema Extensions |
| :--- | :--- | :--- |
| **National News** | [`src/content/news.json`](file:///Users/a1/Downloads/republic_of_nutlandis/src/content/news.json) | Lead gazette stories, sector dispatches, field telemetry, and archival codes. |
| **Daily Directives** | [`src/content/directives.json`](file:///Users/a1/Downloads/republic_of_nutlandis/src/content/directives.json) | The 30-day syllabus, hazard ratings, prohibited actions, countermeasures, and compliance rates. |
| **Official Decrees** | [`src/content/decrees.json`](file:///Users/a1/Downloads/republic_of_nutlandis/src/content/decrees.json) | General's edicts, legal articles, penal sanctions, seal numbers, and jurisdictional categories. |
| **Citizen Reports** | [`src/content/citizenReports.json`](file:///Users/a1/Downloads/republic_of_nutlandis/src/content/citizenReports.json) | Intercepted surveillance wires, acoustic anomalies, contraband seizures, and brigade actions. |

### Query & Repository Layer ([`src/content/index.ts`](file:///Users/a1/Downloads/republic_of_nutlandis/src/content/index.ts))
Components consume content strictly via access functions:
* `getPublishedNews()`, `getFeaturedNews()`, `getNewsById(id)`
* `getPublishedDirectives()`, `getActiveDirective()`, `getDirectiveByDay(dayNumber)`
* `getPublishedDecrees({ category? })`, `getDecreeCategories()`, `getDecreeById(id)`
* `getPublishedCitizenReports({ sector? })`, `getCitizenReportById(id)`
* `getContentStats()` (reports total, published, and draft counts)

### Adding, Editing, Reordering, and Removing Content
To modify the site's content, simply edit the JSON files in `src/content/`:
1. **Add a record:** Add a new JSON object conforming to the schema.
2. **Publish or unpublish:** Set `"publicationStatus": "published"` to make it visible on the homepage, or `"draft"` to hide it.
3. **Change lead or active item:** Set `"isFeatured": true` on the target record.
4. **Reorder items:** Change the `"order"` property (e.g. `1, 2, 3...`) or rearrange the JSON array.
5. **No component edits required:** The UI dynamically renders the published records, updates category filters, and recalculates counts automatically.

---

## 2. Design System & Tokens

### Exact Color Tokens
* **Paper Surfaces:**
  * Base: `#EAE0CA` (Archival parchment ground)
  * Raised: `#F2E9D7` (Document cards and active panels)
  * Secondary: `#DCD0B9` (Matted containers and inner borders)
* **Ink Typography:**
  * Primary: `#292824` (Lead headlines and dark body text)
  * Secondary: `#625B50` (Subheadings and descriptive decks)
  * Muted: `#918675` (Archival classification labels, colophons)
* **Grid and Borders:**
  * Grid lines: `#B9AD98` (1px width, 24px grid interval, ~14% subtle opacity)
* **Official Seals & Accents:**
  * Red: `#AD4032` (Primary governmental call-to-action & seals)
  * Dark Red: `#843329` (Active/hover state & high alert indicators)
* **National Treasury:**
  * Dark Surface: `#302B26` (Full-width continental vault surface)
  * Vault Text: `#F2E9D7` / `#DCD0B9` (Cream typography on charcoal)

### Typography
* **Roboto Slab:** Editorial headlines, executive orders, decree titles.
* **Inter:** Body copy, user interface navigation, field descriptions.
* **IBM Plex Mono:** Technical metadata, contract addresses, archival timestamps, classified codes, rubber stamps.

---

## 3. Website Architecture

The portal is structured as a continuous publication with connected deep-archive routing:

1. **Top Telemetry Countdown Banner:** T-minus countdown to the $NNN pump.fun token launch with direct Telegram ping link.
2. **Masthead:** Sovereign seal of the Republic, official government identity, and direct $NNN Treasury action button.
3. **Sticky Navigation:** 3-link archival bar (`HOME`, `NATIONAL TREASURY`, `NATIONAL INTELLIGENCE`) with active section indicators and mobile drawer.
4. **National Bulletin / Hero (`#hero`):** 3-column composition:
   * Left: Lead news headline dynamically queried from `news.json`, lead summary, and modal dispatch reader.
   * Center: Framed official state portrait of General Bartholomew V. Nutcracker.
   * Right: Official Dossier card with live social relays (X, Telegram, TikTok) and core national telemetry.
5. **National Treasury (`#treasury`):** Full-width dark charcoal vault (`#302B26`):
   * 96-hour immutable time-lock countdown unit with live second ticks.
   * 1-click social alert buttons (Telegram, X, TikTok).
   * Editorial copy on $NNN and speculative token risk disclaimer.
   * Raised parchment token information card with status stamp (`AWAITING VERIFICATION` / `TREASURY VERIFIED`), contract address copy field, and pump.fun destination.
6. **National Intelligence (`#intelligence`):**
   * Today's Directive card with split formal order & **"FOR UNEDUCATED NORMIES"** plain-English summary.
   * Daily News 3-column preview with "VIEW ALL →" deep link.
   * Citizen encounter reporting form & recent logged intercepts.
   * **"VIEW CITIZEN REPORT ARCHIVE"** bait-and-switch classified modal with the iconic *"Go buy the token, gossip girl lol"* punchline and launch links.
7. **National Intelligence Repository (Secondary Page `#/intelligence`):**
   * Connected archive view with dynamic order switcher:
     * `CHALLENGES & DIRECTIVES FIRST`: Full catalog of 30-day protocols, hazard badges, compliance stats, and normie translations.
     * `DAILY NEWS FIRST`: Full news articles, category filters, and field observation reports.
   * Smooth return navigation back to `#hero`.
8. **Government Colophon & Footer:** Official community channels (X, Telegram, TikTok, pump.fun), status telemetry bar, statutory fictional project disclosure, and archival sign-off.

---

## 4. How to Update Content & Deploy Token

### Launching the Token on pump.fun
When the token is created on pump.fun, update the following fields at the top of [`src/components/sections/NationalTreasury.tsx`](file:///Users/a1/Downloads/republic_of_nutlandis/src/components/sections/NationalTreasury.tsx):

```typescript
const contractAddress = "YOUR_PUMP_FUN_CONTRACT_ADDRESS";
const network = "Solana";
const totalSupply = "1,000,000,000 $NNN";
const tradingDestination = "https://pump.fun/coin/YOUR_PUMP_FUN_CONTRACT_ADDRESS";
```

* Setting `contractAddress` automatically switches the stamp from **`AWAITING VERIFICATION`** to **`TREASURY VERIFIED`**.
* The "COPY" button will copy the real address.
* The "ACQUIRE NATIONAL RESERVE →" buttons across the site will open the exact pump.fun pair.

### Adding Daily News
Edit [`src/content/news.json`](file:///Users/a1/Downloads/republic_of_nutlandis/src/content/news.json) and add a new record with `"publicationStatus": "published"`. It appears in the Daily News grid and archive automatically.

### Adding / Editing Daily Directives
Edit [`src/content/directives.json`](file:///Users/a1/Downloads/republic_of_nutlandis/src/content/directives.json):
* Set `"isFeatured": true` on whichever directive is active for today.
* Set `"plainSummary"` to update the **"FOR UNEDUCATED NORMIES"** text.

---

## 5. Development & Production Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Compile TypeScript and bundle production assets
npm run build

# Preview production build locally
npm run preview
```
