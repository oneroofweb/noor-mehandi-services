# PRD --- Noor Mehndi Art Premium Website

## Google Antigravity Implementation Specification

**Document purpose:** Recreate the supplied Noor Mehndi Art website
mockup as closely as possible in Google Antigravity.

**Primary visual source:** The supplied full-page mockup image is the
visual source of truth. Do not redesign, simplify, reorder, or
substitute the layout unless required for responsive behavior or
functional accessibility.

**Brand:** Noor Mehndi Art\
**Tagline:** Bridal • Wedding • Henna Art\
**Website type:** Premium Indian Mehndi Artist / Bridal Mehndi Designer
landing website\
**Primary goal:** Generate wedding, bridal, engagement, party, family
and event enquiries through Call and WhatsApp CTAs.

------------------------------------------------------------------------

# 1. Core Design Direction

Create a premium Indian wedding-inspired website that feels:

-   Elegant
-   Luxurious
-   Feminine
-   Warm
-   Artistic
-   Romantic
-   Trustworthy
-   Culturally authentic
-   Modern and conversion-focused

The website must NOT look like a generic salon template, wedding
invitation, beauty parlour website, or over-decorated Indian wedding
poster.

The supplied mockup should be treated as the exact visual reference for:

-   Overall composition
-   Section order
-   Relative proportions
-   Image placement
-   Card arrangement
-   Typography hierarchy
-   Background treatment
-   Borders
-   Decorative floral elements
-   Button styling
-   Spacing
-   Content density
-   CTA placement

------------------------------------------------------------------------

# 2. Visual Identity

## 2.1 Color System

Use a restrained luxury palette:

-   Deep Burgundy / Maroon --- primary brand color
-   Rich Wine --- dark section/background accent
-   Warm Terracotta --- secondary accent
-   Soft Peach --- subtle highlight
-   Muted Rose --- decorative accent
-   Champagne Gold --- premium accent
-   Ivory / Cream --- main background
-   Warm Beige --- supporting background

Approximate implementation palette:

``` text
Primary Burgundy: #7D1730
Deep Wine:       #5C1025
Warm Terracotta: #A85A35
Champagne Gold:  #C59658
Soft Peach:      #F5DED0
Ivory:           #FFF8EF
Warm Beige:      #F4E8DC
Dark Text:       #3B2420
Muted Text:      #765F58
White:           #FFFFFF
```

These values are starting references; visually match the supplied image
rather than forcing exact hex values if rendering differs.

### Color rules

-   Ivory/cream should dominate the page.
-   Burgundy is the primary typography and CTA color.
-   Gold should be subtle and never overpower the page.
-   Use wine/burgundy as the strong contrast section color for the
    gallery.
-   Avoid neon colors.
-   Avoid bright wedding red/green combinations.
-   Avoid excessive gradients.
-   Avoid black-heavy layouts.

------------------------------------------------------------------------

# 3. Typography

Use a premium serif font for headings and a clean modern sans-serif font
for body/UI.

Recommended:

### Headings

-   Playfair Display
-   Cormorant Garamond
-   Libre Baskerville

### Body / UI

-   Inter
-   Poppins
-   Manrope

Preferred visual combination:

``` text
Headings: Playfair Display
Body:     Poppins / Inter
```

Typography should closely resemble the supplied mockup:

-   Large elegant serif hero headline
-   Burgundy headings
-   Small uppercase eyebrow labels with letter spacing
-   Clean readable body copy
-   Compact navigation
-   Strong but refined CTA labels

Do not use more than two font families.

------------------------------------------------------------------------

# 4. Global Layout

## Desktop target

Design around a 1440px desktop viewport.

Use:

-   Full-width sections
-   Centered content container
-   Approx. 1180--1240px max content width
-   Generous horizontal padding
-   Consistent vertical rhythm
-   Strong section separation

The page should feel spacious but not empty.

## General container

Recommended:

``` css
max-width: 1240px;
margin: 0 auto;
padding-left: 32px;
padding-right: 32px;
```

On very large screens, maintain centered composition rather than
stretching content excessively.

------------------------------------------------------------------------

# 5. Decorative Background System

The mockup uses delicate line-art floral/Mehndi-inspired decoration
around section edges.

Create a reusable decorative pattern system:

-   Fine floral outlines
-   Mehndi-inspired line art
-   Botanical motifs
-   Mandala-inspired details
-   Low-opacity ornamental illustrations

Rules:

-   Very subtle opacity
-   Mostly placed near corners and section edges
-   Never interfere with text
-   Never cover important content
-   Never create visual clutter
-   Decorative graphics should remain secondary to photography and
    typography

Use cream/peach/gold line-art treatment rather than dark decorative
graphics.

------------------------------------------------------------------------

# 6. Header / Navigation

Create a clean premium header matching the reference.

## Left

Logo mark / small floral icon followed by:

**Noor Mehndi Art**

Subtitle:

**Bridal • Wedding • Henna Art**

## Navigation

-   Home
-   About
-   Services
-   Gallery
-   Packages
-   Testimonials
-   FAQ
-   Contact

## Right

Primary CTA:

**Book Your Date →**

Small circular WhatsApp button/icon.

### Header behavior

-   White/ivory background
-   Thin bottom divider
-   Sticky on desktop
-   Compact sticky header after scrolling
-   Logo remains visible
-   Mobile converts to hamburger menu
-   CTA remains easy to access

------------------------------------------------------------------------

# 7. Hero Section

The hero is the first major visual statement.

## Layout

Desktop:

-   Approximately 50% text
-   Approximately 50% large bridal image
-   Full-width composition
-   Image extends strongly to the right side
-   Ivory background on text side

## Eyebrow

**BRIDAL • WEDDING • CELEBRATION**

Use uppercase, small font, burgundy/terracotta color and letter spacing.

## Main headline

**Beautiful Mehndi for\
Your Beautiful Moments**

Use large elegant serif typography.

The second line may use a warm gold/terracotta accent similar to the
supplied mockup.

## Description

**From intricate bridal mehndi to elegant designs for weddings,
engagements and special celebrations --- crafted with detail, creativity
and love.**

## Buttons

Primary:

**Book Your Date →**

Secondary:

**View Mehndi Designs →**

## Trust/service line

**Bridal Mehndi • Engagement • Party • Custom Designs**

## Hero image

Use a high-quality Indian bridal photograph showing:

-   Detailed henna-covered hands
-   Bridal jewelry
-   Warm wedding lighting
-   Rich red/maroon wedding styling
-   Premium photographic depth

Do not use a generic salon image.

Add very subtle decorative floral elements around the hero edges.

------------------------------------------------------------------------

# 8. Trust Statistics Strip

Immediately below hero.

Create four evenly distributed statistic blocks:

### 1

**100+**\
Happy Brides

### 2

**5+ Years**\
Mehndi Experience

### 3

**500+**\
Mehndi Designs

### 4

**100%**\
Handcrafted Art

Each block should contain a simple elegant line icon.

Use:

-   Ivory background
-   Thin vertical separators
-   Burgundy numbers
-   Compact supporting labels

Do not make this section visually heavy.

------------------------------------------------------------------------

# 9. About / Artist Section

Two-column layout.

## Left

Large image of professional Mehndi artist applying henna.

Add two smaller overlapping/stacked image thumbnails on the left edge of
the main image, matching the reference composition.

Main image:

-   Rounded corners
-   Warm wedding lighting
-   Premium photography
-   Natural human interaction

## Right

Eyebrow:

**MEET YOUR MEHNDI ARTIST**

Heading:

**Turning Wedding Moments\
Into Beautiful Memories**

Body copy:

**I'm a passionate Mehndi Artist specializing in bridal and wedding
mehndi. I love creating unique and personalized designs that make your
special moments even more beautiful. With years of experience, I offer
detailed, elegant and creative mehndi designs for every occasion.**

## Feature row

Use small circular icons with labels:

-   Personalized Designs
-   Hygienic Application
-   Intricate Detailing
-   On-Time Service
-   Custom Bridal Designs

CTA:

**Know More About Me →**

Add faint floral line-art in the background.

------------------------------------------------------------------------

# 10. Services Section

Centered heading area.

Eyebrow:

**OUR SERVICES**

Heading:

**Mehndi Services For Every Celebration**

Subtitle:

**Beautifully designed Mehndi for every special occasion.**

Create five premium cards in one row on desktop.

## Card 1

Image: Bridal hands

Title: **Bridal Mehndi**

Description: **Intricate & Traditional Bridal Designs**

## Card 2

Image: Engagement henna

Title: **Engagement Mehndi**

Description: **Elegant & Modern Designs**

## Card 3

Image: Party/event hands

Title: **Party Mehndi**

Description: **Simple & Stylish Designs**

## Card 4

Image: Multiple hands / family

Title: **Family Mehndi**

Description: **Beautiful Designs for Everyone**

## Card 5

Image: Custom artistic design

Title: **Custom Designs**

Description: **Your Style, Our Creativity**

Each card:

-   White/cream surface
-   Soft border
-   Rounded corners
-   Image at top
-   Title below
-   Short description
-   Small circular arrow icon on right
-   Very subtle shadow

Cards should feel premium, not like generic Bootstrap cards.

------------------------------------------------------------------------

# 11. Gallery / Latest Mehndi Designs

This is one of the strongest visual sections.

Use a deep wine/burgundy background.

Add subtle dark Mehndi/ornamental pattern in the background.

Eyebrow:

**OUR GALLERY**

Heading:

**Latest Mehndi Designs**

Subtitle:

**A glimpse of our recent bridal and wedding mehndi work.**

Right-side button:

**View Full Gallery →**

## Gallery

Create a horizontal visual gallery / carousel-style row with multiple
images.

Include:

-   Bridal hands
-   Intricate full-hand work
-   Full-arm bridal mehndi
-   Feet mehndi
-   Close-up detailing
-   Couple motifs
-   Arabic designs
-   Minimal designs

The reference shows a compact horizontal image strip with rounded
corners and navigation arrows.

Use:

-   White/cream borders
-   Slight image spacing
-   Rounded corners
-   High-quality crop
-   Strong photography

Do not add excessive text over images.

------------------------------------------------------------------------

# 12. Packages Section

Return to warm ivory/cream background.

Eyebrow:

**OUR PACKAGES**

Heading:

**Simple & Transparent Packages**

Subtitle:

**Choose the perfect package for your special day.**

Create four pricing cards.

## Package 1

**Basic Package**

Price: **₹1,499**

Features:

-   Simple Mehndi Design
-   Hands (Both Sides)
-   High Quality Henna
-   Perfect for Small Events

CTA: **Book Now →**

## Package 2

**Engagement Package**

Price: **₹2,499**

Features:

-   Elegant & Stylish Designs
-   Hands (Both Sides)
-   Custom Patterns
-   Perfect for Engagement

CTA: **Book Now →**

## Package 3

**Bridal Package**

Price: **₹4,499**

Badge:

**Most Popular**

Features:

-   Intricate Bridal Designs
-   Hands & Arms
-   Premium Quality Henna
-   Personalized Design

CTA: **Book Now →**

This card should have stronger burgundy border/highlight and visually
stand out as in the reference.

## Package 4

**Custom Package**

Price: **₹3,499**

Features:

-   As per Your Requirement
-   Hands / Arms / Legs
-   Unique Custom Designs
-   For Any Special Occasion

CTA: **Book Now →**

Pricing is mockup content and should remain editable.

------------------------------------------------------------------------

# 13. Testimonials

Use a warm cream section.

Left area:

Eyebrow:

**TESTIMONIALS**

Large heading:

**What Our\
Happy Brides Say**

Supporting text:

**Real stories from our beautiful clients.**

Right area:

Three testimonial cards.

Each card should contain:

-   Circular bride profile photo
-   5-star rating
-   Short realistic testimonial
-   Client name
-   Client type/location

Reference examples:

### Priya Sharma

Bride

"Absolutely loved my bridal mehndi! The designs were so beautiful and
detailed. Highly recommended!"

### Neha Patel

Engagement Client

"Very professional, friendly and creative. She made my engagement even
more special!"

### Ayesha Khan

Wedding Guest

"Beautiful designs and on-time service. Everyone loved my mehndi!"

Do not create exaggerated claims.

------------------------------------------------------------------------

# 14. FAQ Section

Use two-column composition near the bottom.

Left:

Eyebrow:

**FAQ**

Heading:

**Frequently Asked Questions**

Create accordion rows with subtle borders.

Questions:

1.  How far in advance should I book?
2.  Do you use natural and safe mehndi?
3.  Can you travel to my location?
4.  How long does the mehndi last?
5.  Do you take customized design requests?

Accordion behavior:

-   Closed by default
-   Click/tap expands answer
-   Plus icon changes to minus when open
-   Smooth but restrained transition

------------------------------------------------------------------------

# 15. Final Booking CTA

Place a large dark/image-backed CTA panel to the right of the FAQ area
or as the next major section, matching the supplied mockup.

Use a bridal Mehndi image as background.

Apply dark burgundy overlay.

Heading:

**Ready to Book Your\
Special Date?**

Supporting copy:

**Let's make your special moments even more beautiful with unique and
creative mehndi designs.**

Two prominent buttons:

**Call Now**

**WhatsApp Now**

Supporting line:

**Available for Weddings, Engagements, Parties & All Events**

Buttons should be highly visible but still match the premium palette.

------------------------------------------------------------------------

# 16. Footer

Use clean ivory footer with thin dividers.

## Brand

**Noor Mehndi Art**

Tagline:

**Bridal • Wedding • Henna Art**

## Quick Links

-   Home
-   About
-   Gallery
-   Packages
-   Testimonials
-   Contact
-   FAQ

## Follow Us

Social icons:

-   Instagram
-   Facebook
-   YouTube/Pinterest if needed

## Get In Touch

Phone:

**+91 98765 43210**

Email:

**noormehndiart@gmail.com**

Location:

**Mumbai, Maharashtra**

Bottom copyright:

**© 2024 Noor Mehndi Art. All Rights Reserved.**

Small closing line:

**Beautiful Mehndi for Beautiful People ❤️**

------------------------------------------------------------------------

# 17. Responsive Requirements

## Desktop --- 1440px

Match the supplied image composition as closely as possible.

-   Full-width sections
-   Five service cards in a row
-   Four package cards in a row
-   Three testimonial cards
-   Two-column About
-   Two-column FAQ/CTA
-   Large hero split layout

## Tablet

-   Reduce container width
-   Reduce heading sizes
-   Services may become 2--3 columns
-   Packages may become 2 columns
-   Maintain visual hierarchy
-   Prevent text collision

## Mobile

Use a single-column layout.

### Header

-   Logo
-   Hamburger
-   Optional compact WhatsApp CTA

### Hero

-   Text first
-   Image below
-   Full-width buttons or stacked buttons

### Stats

-   2 × 2 grid

### About

-   Image first
-   Text second

### Services

-   One card per row

### Gallery

-   Horizontal swipe/carousel or 2-column optimized gallery

### Packages

-   One card per row

### Testimonials

-   Horizontal swipe or stacked cards

### FAQ

-   Full width accordion

### CTA

-   Full-width image/background
-   Buttons stacked if necessary

### Mobile sticky actions

Include a fixed bottom CTA bar:

**Call Now \| WhatsApp**

This should remain compact and not cover page content.

------------------------------------------------------------------------

# 18. Interaction Requirements

Implement real website behavior rather than a static screenshot.

## Navigation

-   Smooth-scroll to page sections
-   Sticky header
-   Mobile hamburger open/close
-   Active/hover states

## Buttons

All major CTAs should work:

-   Book Your Date → Contact/booking section
-   View Mehndi Designs → Gallery
-   Know More About Me → About
-   View Full Gallery → Gallery
-   Package CTA → Booking/contact section
-   Call Now → tel link
-   WhatsApp Now → WhatsApp link

Use placeholder phone number until client information is supplied.

## Gallery

-   Hover zoom on desktop
-   Swipe/scroll on mobile
-   Optional lightbox on click

## FAQ

-   Accordion open/close
-   Only one open at a time if appropriate

------------------------------------------------------------------------

# 19. Image Direction

Use premium, realistic Indian wedding photography.

Required visual categories:

-   Bridal Mehndi close-up
-   Bride with Mehndi
-   Mehndi artist applying henna
-   Engagement Mehndi
-   Family/guest Mehndi
-   Feet Mehndi
-   Arabic Mehndi
-   Floral Mehndi
-   Minimal Mehndi
-   Full-arm bridal work

Image treatment:

-   Warm natural lighting
-   Rich skin tones
-   Realistic photography
-   Indian wedding styling
-   Red/maroon/gold clothing
-   High-detail henna
-   No obviously AI-looking hands
-   No distorted fingers
-   No malformed Mehndi patterns

Images should visually support the premium brand.

------------------------------------------------------------------------

# 20. Component System

Build reusable components:

``` text
Header
Hero
TrustStats
AboutArtist
ServiceCard
ServicesSection
BridalExperience
GallerySection
GalleryCard
PackageCard
TestimonialsSection
TestimonialCard
FAQAccordion
BookingCTA
ContactSection
Footer
MobileStickyCTA
```

Maintain a consistent design system.

------------------------------------------------------------------------

# 21. Buttons

Primary button:

-   Burgundy background
-   Ivory/white text
-   Rounded corners
-   Small arrow/icon
-   Medium shadow
-   Comfortable padding

Secondary button:

-   Ivory/transparent background
-   Burgundy border
-   Burgundy text

WhatsApp:

-   Green WhatsApp treatment only where appropriate
-   Keep it visually compatible with the overall palette
-   Do not let green become a dominant brand color

Hover:

-   Slight lift
-   Subtle shadow increase
-   No excessive animation

------------------------------------------------------------------------

# 22. Cards

Cards should have:

-   12--18px rounded corners
-   Thin warm border
-   Very soft shadow
-   Clean internal spacing
-   Strong title hierarchy
-   Consistent image ratio
-   Minimal decorative treatment

Avoid:

-   Heavy shadows
-   Glassmorphism
-   Neon gradients
-   Excessive 3D effects
-   Huge borders

------------------------------------------------------------------------

# 23. Spacing Rules

Use a consistent spacing scale.

Suggested:

``` text
8px
12px
16px
24px
32px
48px
64px
80px
96px
```

Section vertical spacing should generally be 70--100px desktop and
48--64px mobile.

Do not create huge empty gaps.

------------------------------------------------------------------------

# 24. Visual Accuracy Checklist

Before considering the implementation complete, compare the rendered
website against the supplied mockup.

Verify:

-   Header height and proportions
-   Logo placement
-   Navigation spacing
-   Hero split ratio
-   Hero headline size
-   Hero image crop
-   CTA dimensions
-   Trust statistic spacing
-   About image proportions
-   Service card dimensions
-   Gallery background height
-   Gallery image sizing
-   Package card widths
-   Popular package emphasis
-   Testimonial layout
-   FAQ row heights
-   Final CTA image treatment
-   Footer proportions
-   Decorative floral placement
-   Overall cream/burgundy balance

The page should visually resemble the supplied mockup immediately when
viewed at desktop width.

------------------------------------------------------------------------

# 25. Things That Must NOT Be Changed

Do not:

-   Change the overall section order
-   Replace the cream/burgundy luxury palette
-   Remove decorative floral line art
-   Turn the design into a generic salon site
-   Use a dark theme for the whole website
-   Add excessive gradients
-   Add excessive animations
-   Add random UI elements
-   Overcrowd the hero
-   Use giant text that breaks the composition
-   Remove the gallery
-   Remove package cards
-   Remove WhatsApp/Call CTAs
-   Use generic corporate styling
-   Use unrelated stock imagery
-   Use low-quality images
-   Create inconsistent card styles
-   Break mobile responsiveness

------------------------------------------------------------------------

# 26. Content Editing Strategy

All business-specific content must be easy to edit.

Create centralized content/config values for:

-   Artist name
-   Phone
-   WhatsApp number
-   Email
-   Location
-   Instagram handle
-   Hero image
-   About image
-   Gallery images
-   Service images
-   Package prices
-   Testimonials
-   FAQ answers

Use placeholder values where information is unavailable.

Do not hard-code client-specific information throughout multiple
components.

------------------------------------------------------------------------

# 27. Conversion Goals

Primary conversion actions:

1.  WhatsApp enquiry
2.  Phone call
3.  Wedding-date availability enquiry
4.  Package enquiry
5.  Contact form submission

CTA hierarchy:

**Primary:** Book Your Date / Check Availability\
**Secondary:** WhatsApp\
**Tertiary:** View Designs / Gallery

The user should encounter a clear booking action throughout the page
without making the website feel aggressive.

------------------------------------------------------------------------

# 28. Quality Standard

The final website must feel like a professionally commissioned custom
website in the ₹25,000--₹50,000 range.

It should communicate:

**Luxury + Indian Wedding + Artistry + Trust + Romance +
Professionalism**

The visual result should make the Mehndi Artist look established,
premium and professionally branded.

The design should be visually memorable while remaining clean, readable
and conversion-focused.

------------------------------------------------------------------------

# 29. Final Antigravity Instruction

Use the supplied Noor Mehndi Art mockup image as the PRIMARY visual
reference.

**Recreate the design, not merely the content.**

Match:

-   Layout
-   Proportions
-   Color relationships
-   Typography hierarchy
-   Image placement
-   Card styling
-   Section rhythm
-   Decorative elements
-   CTA placement
-   Responsive behavior

When implementation decisions conflict with generic UI conventions,
prioritize the supplied mockup's visual language.

Build the complete website from:

**Header → Hero → Trust Stats → About → Services → Gallery → Packages →
Testimonials → FAQ → Booking CTA → Footer**

The final output must be a polished, responsive, functional premium
Mehndi Artist website suitable for sending to a real client as a demo.
