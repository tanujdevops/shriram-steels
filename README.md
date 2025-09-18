# Shriram Steels - Corporate Website

A lean, SEO-optimized corporate website for **Shriram Steels**, a leading steel manufacturer in Kolhapur, Maharashtra. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **SEO-First Architecture**: Static site generation with comprehensive meta tags and structured data
- **WhatsApp Lead Capture**: All CTAs redirect to WhatsApp (+91 96230 04455) with pre-filled messages
- **Product Catalog**: Dynamic product pages with filtering and detailed specifications
- **Stunning Visual Design**: Beautiful background image (bg.png) with glass-morphism effects
- **Mobile-First Design**: Fully responsive with optimized mobile experience  
- **Performance Optimized**: Fast loading with Next.js image optimization
- **Schema Markup**: Rich snippets for products and local business

## 📁 Project Structure

```
src/
├── pages/
│   ├── index.tsx              # Homepage with hero, products overview, contact
│   ├── about.tsx              # About page with company info and leadership
│   ├── quality.tsx            # Quality assurance, MTR, testing processes
│   ├── resources.tsx          # Technical documentation and spec downloads
│   ├── products/
│   │   ├── index.tsx          # Product listing with grade filtering
│   │   └── [slug].tsx         # Dynamic product detail pages (SSG)
│   ├── _app.tsx               # App wrapper with theme provider
│   └── styles/
│       └── globals.css        # Global styles and CSS variables
├── data/
│   └── products/              # Product JSON files
│       ├── black-bars.json
│       ├── bright-flat-bars.json
│       ├── bright-hex-bars.json
│       ├── bright-round-bars.json
│       ├── bright-square-bars.json
│       └── alloy-steel.json
public/
├── shriram-steels.png         # Company logo (actual) - also used as favicon
├── hero.jpg                   # Hero image (actual)
├── bg.png                     # Background image (actual)
├── favicon.ico                # Favicon (copy of shriram-steels.png)
├── robots.txt                 # Search engine directives
├── sitemap.xml               # Auto-generated sitemap
├── specs/                    # Product specification PDFs (TODO: Add actual files)
└── products/                 # Product images (TODO: Add actual images)
```

## 🛠️ Setup Instructions

### 1. Clone & Install
```bash
git clone <repository-url>
cd shadcn-landing-page-main
npm install
```

### 2. Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to view the site.

### 3. Generate Sitemap
```bash
npm run generate-sitemap
```

### 4. Build for Production
```bash
npm run build
npm start
```

## 📱 WhatsApp Lead Flow

All lead capture forms and CTAs redirect to WhatsApp with pre-filled messages:

- **Primary WhatsApp**: +91 96230 04455
- **Get Quote**: Opens WhatsApp with quote request template
- **Download Specs**: Opens WhatsApp requesting spec sheets  
- **Contact Forms**: Collect info then redirect to WhatsApp with filled details

### Message Templates
```javascript
// Quote Request
const getQuoteMessage = encodeURIComponent('Hello! I would like to get a quote for steel products. Please share your current rates and availability.');

// Spec Download  
const downloadMessage = encodeURIComponent('Hi! I would like to download product specifications and technical details. Could you please share the latest catalogs?');

// Custom Product Quote
const productQuoteMessage = (productName) => encodeURIComponent(`Hello! I would like a quote for ${productName}. Please share current rates and availability.`);
```

## 🧪 Test Plan

### Phase 1: Basic Functionality
1. **Navigation Testing**
   - [ ] All header navigation links work correctly
   - [ ] Mobile menu functions properly
   - [ ] Breadcrumb navigation is accurate

2. **Page Loading**
   - [ ] Homepage loads with all sections visible
   - [ ] Product listing page displays all 6 products
   - [ ] Individual product pages load via `/products/[slug]` routes
   - [ ] About, Quality, and Resources pages load completely

3. **WhatsApp Integration**
   - [ ] Homepage "Get Quote" button opens WhatsApp with correct message
   - [ ] Product page quote forms redirect to WhatsApp with filled details
   - [ ] Resource download requests open WhatsApp appropriately

### Phase 2: SEO & Performance  
1. **SEO Verification**
   - [ ] All pages have appropriate `<title>` and `<meta>` tags
   - [ ] JSON-LD structured data validates on Google's Rich Results Test
   - [ ] Sitemap.xml is accessible and contains all URLs
   - [ ] Robots.txt allows proper crawling

2. **Performance Check**
   - [ ] Pages load under 3 seconds on mobile
   - [ ] Images are optimized and lazy-loaded
   - [ ] Core Web Vitals pass Google PageSpeed Insights

### Phase 3: Content & Business Details
1. **Content Accuracy** 
   - [ ] Replace placeholder logo with actual Shriram Steels logo
   - [ ] Update product images in `/public/products/` directory  
   - [ ] Verify GST number: 27AAUPP7201Q1ZU
   - [ ] Confirm CEO details: Ratan P
   - [ ] Add actual product specification PDFs to `/public/specs/`

## 📋 TODO Items

### High Priority
- [x] **Logo**: Using actual company logo `/public/shriram-steels.png`
- [x] **Hero Images**: Using actual hero images with theme support
- [ ] **Product Images**: Add real steel product photography to `/public/products/`
- [ ] **Specification PDFs**: Create and upload actual spec sheets to `/public/specs/`
- [ ] **Verify Business Details**: 
  - GST Number: 27AAUPP7201Q1ZU
  - CEO Name: Ratan P  
  - Contact Email: Update placeholder sales@shriramsteels.example

### Medium Priority
- [ ] **Quality Certifications**: Verify ISO or other quality certifications
- [ ] **MTR Samples**: Add sample Material Test Report documents
- [ ] **Facility Images**: Add manufacturing facility photography
- [ ] **Leadership Photos**: Add actual leadership team photos

### Future Enhancements  
- [ ] Add Google Analytics tracking
- [ ] Implement structured data for reviews/ratings
- [ ] Add multi-language support (Hindi, Marathi)
- [ ] Create downloadable product catalogs
- [ ] Add inventory status API integration

## 🎨 Brand Guidelines

- **Primary Color**: Red (#D32F2F) - Used for CTAs, links, and brand accents
- **Secondary Color**: Dark Gray (#212121) - Used for text and secondary elements
- **Accent Color**: Silver Gray (#B0B0B0) - Used for muted elements and borders
- **Background**: White (#FFFFFF) - Clean, professional background
- **Typography**: System fonts for fast loading
- **Logo Usage**: Using actual shriram-steels.png logo
- **WhatsApp**: All CTAs must use +91 96230 04455

### Color Palette
```css
Primary: Red (#D32F2F)
Secondary: Dark Gray (#212121) 
Accent: Silver Gray (#B0B0B0)
Background: White (#FFFFFF)
```

## 📞 Business Information

**Company**: Shriram Steels  
**Public Name**: Shri Ram Industries (as per reference site)  
**Address**: Plot No. E-66, Shriram Industries, M.I.D.C., Shiroli, Kolhapur - 416122, Maharashtra, India  
**Primary Contact**: +91 96230 04455 (WhatsApp)  
**Reference Website**: https://www.shriramindustries9.com/  
**GST**: 27AAUPP7201Q1ZU *(TODO: Verify)*  

## 🔧 Tech Stack

- **Framework**: Next.js 14 with Pages Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation  
- **Deployment**: Static export ready (SSG)

## 📈 SEO Features

- Meta titles and descriptions optimized for steel industry keywords
- OpenGraph and Twitter Card tags for social sharing
- JSON-LD structured data for Organization and Products
- Auto-generated XML sitemap with proper priorities
- Semantic HTML structure with proper heading hierarchy
- Image optimization with Next.js Image component

---

*This website is designed to be production-ready after replacing placeholder assets and verifying business details marked with TODO comments.*