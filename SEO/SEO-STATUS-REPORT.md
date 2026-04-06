# Build-A-Block Therapy — SEO Status Report
**Last Updated:** April 6, 2026
**Site:** https://buildablocktherapy.com

---

## COMPLETED — On-Site SEO

### Schema Markup (JSON-LD Structured Data)
- [x] LocalBusiness + MedicalBusiness schema on homepage
- [x] `alternateName: "BAB Therapy"` added
- [x] `logo` and `image` URLs in schema
- [x] Full `PostalAddress` (7990 SW 117th Ave, Suite 134, Kendall, FL 33183)
- [x] Geo coordinates updated to Kendall location (25.6866, -80.3736)
- [x] `areaServed` with all 10 service areas as individual City entries
- [x] `serviceArea` listing all neighborhoods
- [x] `insuranceAccepted` array with all 10 providers
- [x] `availableService` listing all 6 ABA therapy services
- [x] `openingHoursSpecification` (Mon-Sat 9AM-8PM)
- [x] `paymentAccepted`, `currenciesAccepted`
- [x] `sameAs` with Facebook, Instagram, LinkedIn
- [x] `BreadcrumbList` schema on every page (About, Services, Careers, Contact, Blog, Area pages)
- [x] `Person` schema for both founders (Kristel Arauz BCBA, Ana Jacome BS) with credentials and alumni
- [x] `Service` schema for each of the 6 services on the services page
- [x] `FAQPage` schema on homepage (6 questions)
- [x] `FAQPage` schema on each area page (3 location-specific questions per page)

### Title Tags & Meta Descriptions
- [x] Homepage: "ABA Therapy in Kendall & Miami, FL | Build-A-Block Therapy"
- [x] About: "About Us — Board Certified Behavior Analysts in Kendall, FL"
- [x] Services: "ABA Therapy Services in Kendall & Miami — In-Home, Telehealth & More"
- [x] Contact: "Contact Us — Free ABA Therapy Consultation in Kendall & Miami"
- [x] Careers: "Careers — BCBA & RBT Jobs in Kendall & Miami, FL"
- [x] Blog: "Blog — ABA Therapy Resources for Miami Parents"
- [x] All 10 area pages have unique, keyword-rich titles and descriptions
- [x] All 3 blog posts have unique titles and descriptions
- [x] Spanish pages have Spanish-language meta titles and descriptions

### Keyword Optimization
- [x] "ABA therapy" appears in 7 of 8 homepage H2 headings (competitors average 6-8)
- [x] Location keywords (Kendall, Miami, Miami-Dade) throughout homepage, about, services, contact
- [x] 20+ target keywords in meta keywords tag
- [x] Spanish keywords targeting "terapia ABA Miami", "terapia conductual", etc.
- [x] Service-specific keywords on services page
- [x] Insurance provider names as crawlable text (sr-only paragraph)

### Content & Pages
- [x] Homepage: ~2,500 words (competitors average 2,500-3,000)
  - Hero with CTA and trust indicators
  - "Why Families Choose Us" section (4 cards)
  - "How ABA Therapy Works" section (5 step cards)
  - "Our Services" section (6 cards with images)
  - "Who We Help" section (6 condition cards)
  - Testimonials (3 reviews, names aligned)
  - Insurance providers grid with logos
  - FAQ section (6 questions with FAQPage schema)
  - CTA banner
- [x] Services page expanded with "What to Expect" section, benefits card, areas served card
- [x] About page with founder bios, photos, credentials, values, areas served
- [x] Contact page with form, sidebar info, Google Map embed, referral card, scholarships card
- [x] Careers page with benefits, open positions (BCBA, RBT)

### Blog (3 posts live)
- [x] "5 Signs Your Child May Benefit from ABA Therapy" — April 6, by Kristel Arauz
- [x] "Does Insurance Cover ABA Therapy in Florida? A Parent's Guide" — March 30, by Ana Jacome
- [x] "How to Choose the Right ABA Therapy Provider in Miami" — March 23, by Kristel Arauz
- [x] Each post has author photo/bio, related links, CTA, breadcrumbs
- [x] Blog linked from footer as "Parent Resources"

### Location Pages (10 area pages)
- [x] /areas/kendall
- [x] /areas/south-miami
- [x] /areas/coral-gables
- [x] /areas/doral
- [x] /areas/homestead
- [x] /areas/miami-beach
- [x] /areas/hialeah
- [x] /areas/cutler-bay
- [x] /areas/pinecrest
- [x] /areas/miami-lakes
- [x] Each has unique content, Service schema, FAQPage schema, Google Map, nearby area cross-links
- [x] Linked from footer (subtle "Areas We Serve" section), not in main nav
- [x] All in sitemap.xml

### Spanish Language Pages (5 pages)
- [x] /es — Homepage (full translation with all sections matching English)
- [x] /es/servicios — Services with images and detail bullets
- [x] /es/nosotros — About with founder bios and values
- [x] /es/carreras — Careers with benefits and positions
- [x] /es/contacto — Contact form with all sidebar elements
- [x] hreflang tags (en, es, x-default) on root layout
- [x] Spanish-specific meta keywords
- [x] Bilingual lead capture popup (auto-detects language)
- [x] Navbar switches to Spanish links on /es/* routes
- [x] ES/EN language toggle in navbar

### Technical SEO
- [x] Sitemap.xml with all pages (core, areas, blog, Spanish)
- [x] Robots.txt configured (blocks /api/, allows everything else)
- [x] Canonical tags on all pages
- [x] SSL/HTTPS (via Netlify)
- [x] Mobile-first responsive design
- [x] Self-hosted fonts (Baloo 2 + Nunito) for consistent cross-device rendering
- [x] Static site generation (fast load times)
- [x] Image alt text optimized with location keywords on all images
- [x] Open Graph image (1200x630 branded PNG)
- [x] Open Graph and Twitter Card meta tags
- [x] Geo meta tags (geo.region: US-FL, geo.placename: Miami)
- [x] Click-to-call phone number throughout site
- [x] NAP (Name, Address, Phone) consistent in footer, contact page, schema
- [x] Google Maps embedded on contact page and all area pages
- [x] noindex on landing page (/lp/aba-therapy-miami) and pay invoice (removed)

### Lead Capture
- [x] Contact form (Netlify Forms — "contact")
- [x] Lead capture popup at 30 seconds (Netlify Forms — "popup-lead")
- [x] Spanish contact form (Netlify Forms — "contacto-es")
- [x] Google Ads landing page form (Netlify Forms — "lp-lead")
- [x] Email notifications set up for all 4 forms
- [x] Honeypot spam protection on all forms

### Google Ads Landing Page
- [x] /lp/aba-therapy-miami — hidden, no nav/footer, pure conversion
- [x] noindex/nofollow
- [x] Not in sitemap or any navigation
- [x] Sticky call bar, sticky form, testimonials, insurance logos

---

## COMPLETED — Off-Site SEO

### Google Search Console
- [x] Site verified (domain name provider method)
- [x] Sitemap submitted and processed (15 pages discovered initially)
- [x] Indexing in progress — 15 pages indexed as of April 6

### Bing Webmaster Tools
- [x] Submitted (imported from Google Search Console)

### Google Business Profile
- [x] Claimed and set up with Kendall address

---

## STILL TO DO — On-Site (Claude can do)

### Content
- [ ] "Autism Resources in Miami" page — comprehensive resource listing local schools, support groups, doctors, respite care (link magnet)
- [ ] Continue blog publishing — aim for 2 new posts per month
  - Suggested topics:
    - "What to Expect During Your Child's First ABA Session"
    - "ABA Therapy vs. Other Autism Treatments: What Parents Should Know"
    - "How ABA Therapy Helps with Daily Living Skills"
    - "Back-to-School Tips for Children with Autism in Miami"
    - "The Role of a BCBA: What Parents Need to Know"
    - "Understanding Your Insurance Coverage for ABA Therapy in Florida"
- [ ] Spanish blog posts (translate existing 3 posts)

---

## STILL TO DO — Off-Site (You need to do)

### Google Reviews (HIGHEST PRIORITY)
- [ ] Ask 5-10 current families for Google reviews this week
- [ ] Target: 10+ reviews within 30 days, 50+ within 6 months
- [ ] Create short review link (g.page/buildablocktherapy/review)
- [ ] Print QR codes for office and parent packets
- [ ] Train staff to ask after positive milestones
- [ ] Respond to every review within 24 hours with keywords

### Google Business Profile Optimization
- [ ] Verify primary category is "Applied Behavior Analysis Therapist"
- [ ] Add all secondary categories (Child Psychologist, Therapist, Behavioral Health Clinic, etc.)
- [ ] Write optimized business description (750 characters, front-load keywords)
- [ ] Add every service as separate entry with descriptions
- [ ] Upload 15+ real photos (office, therapy rooms, team, sessions)
- [ ] Upload 2-3 new photos every week
- [ ] Post 1-2 Google Posts per week (tips, staff spotlights, updates)
- [ ] Seed Q&A with 10-15 common questions and answers
- [ ] Check all attributes (bilingual, wheelchair accessible, accepts insurance)
- [ ] Add service areas in GBP settings

### Directory Listings (Backlinks)

**Tier 1 — Do This Week:**
- [ ] Psychology Today — create practice profile
- [ ] Healthgrades — claim listing
- [ ] Autism Speaks Resource Guide — submit practice
- [ ] Yelp — claim and optimize business page
- [ ] Apple Maps / Apple Business Connect — register
- [ ] Better Business Bureau — register

**Tier 2 — Do This Month:**
- [ ] GoodTherapy.org — create provider listing
- [ ] TherapyDen — create profile
- [ ] Zocdoc — create listing
- [ ] Vitals.com — claim listing
- [ ] Yellow Pages (YP.com)
- [ ] BACB registry — ensure BCBAs listed with practice URL

**Tier 3 — Local Miami/Florida:**
- [ ] Miami-Dade Chamber of Commerce — membership
- [ ] Florida Department of Health provider lookup
- [ ] South Florida Business Journal directory

### Link Building (Months 2-3)
- [ ] Contact local pediatrician offices — ask to be listed as referral partner
- [ ] Reach out to FIU and UM psychology/education departments about partnerships
- [ ] Contact Miami-Dade County Public Schools ESE department for resource listing
- [ ] Connect with local autism support groups (Miami Autism Support, South Florida Autism Network)
- [ ] Contact The Dan Marino Foundation for resource directory listing
- [ ] Sponsor local community events (autism walks, school fairs)

### Digital PR
- [ ] Write press release for Build-A-Block's services
- [ ] Pitch story to local news (NBC 6, Local 10, Miami Herald)
- [ ] Participate in Autism Awareness Month (April) with community events
- [ ] Offer BCBAs as expert sources for local media

### Community Presence
- [ ] Monitor and participate in r/Miami, r/autism, r/ABA subreddits
- [ ] Engage in local Facebook parent groups (genuinely helpful, not spammy)
- [ ] Create Nextdoor business profile for Kendall area

### Google Ads (When Ready)
- [ ] Landing page is built and ready at /lp/aba-therapy-miami
- [ ] Apply for Google Local Services Ads (Google Screened badge)
- [ ] Set up conversion tracking

---

## COMPETITIVE LANDSCAPE

### Key Competitors (Page 1 for "ABA therapy in Miami"):
1. **Cultivate BHE** — Multi-state, location pages, blog, ~3,000 word pages
2. **Fresh Starts Behavioral Therapy** — Thin content but strong domain/reviews
3. **One on One Behavioral Services** — Location pages + blog (similar strategy to ours)
4. **Crystal Minds New Beginning** — No schema, but heavy keyword usage + bilingual
5. **ABA Learning Center (abamiami.com)** — Exact-match domain advantage
6. **Children Behavior Therapy** — Best schema of competitors (ChildCare, Person, Article)
7. **Behavior Analysis Inc.** — Multiple locations, blog, established domain
8. **Little Leaves** — National brand authority

### Where BAB is Stronger:
- Schema markup (stronger than 6 of 8 competitors)
- Spanish language pages (almost no competitor has this)
- Location-specific area pages with unique content
- FAQ sections with FAQPage schema
- Bilingual lead capture system

### Where BAB is Weaker:
- Domain age (brand new vs. years-old competitors)
- Backlink count (zero vs. hundreds)
- Google review count (need 10+ to compete, 50+ to dominate)
- Blog volume (3 posts vs. competitors with 20-50+)

---

## EXPECTED TIMELINE

| Milestone | Expected Date |
|-----------|--------------|
| All pages indexed by Google | Mid-April 2026 |
| First organic impressions | Late April 2026 |
| Appearing in organic results | May-June 2026 |
| Map Pack entry (requires reviews) | June-July 2026 |
| Page 1 for "ABA therapy Kendall" | July-September 2026 |
| Page 1 for "ABA therapy Miami" | September-December 2026 |
| Dominant local position | 2027 |

---

## TOOLS TO USE

| Tool | Purpose | Cost |
|------|---------|------|
| Google Search Console | Track rankings, indexing, errors | Free |
| Google Analytics 4 | Track traffic, conversions | Free (not yet installed) |
| Google Business Profile | Map Pack optimization | Free |
| Google Rich Results Test | Verify schema markup | Free |
| PageSpeed Insights | Core Web Vitals testing | Free |
| Facebook Sharing Debugger | Test OG image/social sharing | Free |
| BrightLocal (optional) | Local rank tracking, citation audit | ~$39/mo |
| Ahrefs or SEMrush (optional) | Backlink analysis, keyword research | ~$99/mo |

---

*Document maintained for Build-A-Block Children Therapy Solutions Inc.*
*Site built and optimized by Claude Code — April 2026*
