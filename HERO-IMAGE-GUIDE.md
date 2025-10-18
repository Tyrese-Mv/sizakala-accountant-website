# Hero Image Guide for Sizakala Business Services

## 📸 Adding Your Professional Images

### Current Setup
**ALL hero sections** (Home, About, Services, Contact) now have professional designs with placeholder background images. Each page has a different placeholder image for variety. You need to replace them with your own professional photos.

---

## 🎯 Recommended Image Specifications

### Technical Requirements:
- **Format**: JPG or PNG
- **Dimensions**: Minimum 1920px × 1080px (Full HD)
- **Aspect Ratio**: 16:9 (landscape)
- **File Size**: Under 500KB (compressed for fast loading)
- **Resolution**: 72 DPI for web

### Content Recommendations:
Choose a professional image that shows:
1. **Professional Office Environment** - Modern, clean workspace
2. **Team at Work** - Accountants working collaboratively
3. **Professional Meeting** - Client consultation setting
4. **Diverse Team** - Showing professionalism and approachability
5. **Business Documents/Charts** - Subtle financial imagery

---

## 📍 Current Placeholder Images by Page

### Home Page
- **File**: `src/pages/Home.css` (Line 17)
- **Current Image**: Professional office workspace
- **Placeholder URL**: Unsplash image ID: photo-1554224311-beee460689930

### About Page
- **File**: `src/pages/About.css` (Line 16)
- **Current Image**: Business team collaboration
- **Placeholder URL**: Unsplash image ID: photo-1600880292203-757bb62b4baf

### Services Page
- **File**: `src/pages/Services.css` (Line 16)
- **Current Image**: Business planning/charts
- **Placeholder URL**: Unsplash image ID: photo-1454165804606-c3d57bc86b40

### Contact Page
- **File**: `src/pages/Contact.css` (Line 16)
- **Current Image**: Business handshake/meeting
- **Placeholder URL**: Unsplash image ID: photo-1556761175-b413da4baf72

---

## 🛠️ How to Replace Images

### Option 1: Using Local Image Files (Recommended)

1. **Save your images** in the project folder:
   ```
   accountant-website/public/images/hero-home.jpg
   accountant-website/public/images/hero-about.jpg
   accountant-website/public/images/hero-services.jpg
   accountant-website/public/images/hero-contact.jpg
   ```

2. **Update each CSS file**:

   **Home Page** - `src/pages/Home.css` (Line 17):
   ```css
   /* Replace: */
   background-image: url('https://images.unsplash.com/photo-1554224311-beee460689930?w=1920');
   /* With: */
   background-image: url('/images/hero-home.jpg');
   ```

   **About Page** - `src/pages/About.css` (Line 16):
   ```css
   /* Replace: */
   background-image: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920');
   /* With: */
   background-image: url('/images/hero-about.jpg');
   ```

   **Services Page** - `src/pages/Services.css` (Line 16):
   ```css
   /* Replace: */
   background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920');
   /* With: */
   background-image: url('/images/hero-services.jpg');
   ```

   **Contact Page** - `src/pages/Contact.css` (Line 16):
   ```css
   /* Replace: */
   background-image: url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920');
   /* With: */
   background-image: url('/images/hero-contact.jpg');
   ```

### Option 2: Using One Image for All Pages (Simpler)

If you want to use the same image across all pages:

1. **Save ONE image** as: `public/images/hero-background.jpg`
2. **Update ALL four CSS files** with:
   ```css
   background-image: url('/images/hero-background.jpg');
   ```

### Option 3: Using Online Image URLs

If your images are hosted online:

1. **Upload images** to your web hosting
2. **Update each CSS file** with the online URLs:
   ```css
   background-image: url('https://your-domain.com/hero-home.jpg');
   ```

---

## 🆓 Free Professional Stock Photos

If you need temporary images while getting professional photos taken:

### Best Free Stock Photo Sites:

1. **Unsplash** (https://unsplash.com)
   - Search terms: "office professional", "accounting team", "business meeting"
   - Fully free, high quality
   - No attribution required

2. **Pexels** (https://pexels.com)
   - Search: "professional office", "business team", "accountant"
   - Free for commercial use
   - Great quality

3. **Pixabay** (https://pixabay.com)
   - Search: "accounting", "office", "professional team"
   - Free, no attribution needed

### Recommended Search Terms:
- "professional office team"
- "business meeting diverse"
- "accounting professionals"
- "modern office workspace"
- "financial planning meeting"
- "corporate team collaboration"

---

## 🎨 Current Hero Section Features

The new hero section includes:

✅ **Full-width background image** with gradient overlay
✅ **"Registered with CIBA since 2015"** badge
✅ **Bold headline**: "Professional Accounting Services You Can Trust"
✅ **Updated subtitle** reflecting all client types (schools, NPOs, companies)
✅ **Three key features** with checkmarks:
   - CIBA Certified
   - Affordable Pricing
   - Expert Team
✅ **Two prominent CTA buttons**:
   - "Explore Our Services"
   - "Get a Free Quote"
✅ **Fully responsive** design (mobile, tablet, desktop)
✅ **Professional overlay** ensures text is always readable

---

## 📐 Image Optimization Tips

Before uploading your image:

1. **Resize to 1920px width** using:
   - https://tinypng.com (compression)
   - https://squoosh.app (resize + compress)
   - Photoshop / GIMP (advanced editing)

2. **Compress the file** to reduce load time:
   - Target: Under 300-500KB
   - Use TinyPNG or Squoosh for compression
   - Maintain quality while reducing size

3. **Test on different devices**:
   - Desktop (1920px+)
   - Tablet (768px-1024px)
   - Mobile (320px-767px)

---

## 💡 Image Composition Tips

For best results, choose images with:

✅ **Clear focal point** - Main subject in center or slightly off-center
✅ **Negative space** - Room for text overlay (usually top or center)
✅ **Professional lighting** - Well-lit, not too dark
✅ **Relevant context** - Office, documents, team, technology
✅ **Neutral background** - Avoid busy patterns that compete with text
❌ **Avoid text in image** - The overlay text should be the only text visible

---

## 🎬 Alternative Hero Layouts

If you want to try different hero styles in the future:

### Style 1: Split Layout (Image + Text Side-by-Side)
- Image on right, text on left (or vice versa)
- Modern, clean look
- Good for showcasing a specific photo/person

### Style 2: Video Background
- Short looping video (15-30 seconds)
- Very engaging and modern
- Requires larger file size

### Style 3: Image Slider/Carousel
- Multiple images rotating
- Show different aspects of business
- More complex to implement

Currently implemented: **Full-width background image with overlay** (most popular and professional)

---

## 📱 Mobile Optimization

The hero section is fully responsive:

- **Desktop (>768px)**: Full height (85vh), large text
- **Tablet (768px)**: Adjusted padding, medium text
- **Mobile (<768px)**: Full height (100vh), stacked features, smaller text

The overlay ensures text remains readable on all devices regardless of the background image.

---

## ✅ Quick Checklist

Before going live:

- [ ] Professional image selected/captured
- [ ] Image resized to 1920px × 1080px
- [ ] File compressed to <500KB
- [ ] Image saved in `/public/images/` folder
- [ ] CSS updated with correct image path
- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] Text is clearly readable over image
- [ ] Image loads quickly

---

## 🆘 Need Help?

If you need assistance:

1. **Image isn't showing**: Check file path and name spelling
2. **Image too dark**: Adjust overlay opacity in CSS (line 33-38)
3. **Text hard to read**: Increase overlay darkness
4. **Slow loading**: Compress image more

For technical support, contact your developer or refer to the CSS comments in `src/pages/Home.css`.

---

**Last Updated**: January 2025
**File to Edit**: `src/pages/Home.css` (Line 17)
**Current Placeholder**: Unsplash stock image (professional office)
