# DaiZ Delights - Quick Reference Card

## File Locations

| File | Purpose | Edit for |
|------|---------|----------|
| `index.html` | Main website | Content, structure, text |
| `css/style.css` | All styling | Colors, fonts, spacing |
| `js/script.js` | Interactivity | Add new features |
| `images/` | Image storage | Add your photos |

## Key Sections in index.html

```
Line ~30   : Navigation menu items
Line ~80   : Hero section (main banner)
Line ~130  : Product cards (6 items)
Line ~250  : Gallery section (6 items)
Line ~330  : About section
Line ~370  : Contact form
Line ~450  : Footer with social links
```

## Common Customizations

### Update Product Info
```html
<h3>Product Name</h3>
<p>Product description here</p>
<span class="price">$XX.XX</span>
```

### Add Product Image
```html
<img src="images/products/filename.jpg" alt="Product Name">
```

### Update Contact Info
- Address: Line ~575
- Phone: Line ~585
- Email: Line ~595
- Hours: Line ~605

### Update Social Links
- Facebook: Line ~710
- Instagram: Line ~711
- Twitter: Line ~712
- Pinterest: Line ~713

## CSS Color Variables

```css
/* Main Colors (css/style.css line 10-15) */
--primary-color: #8B4513;      /* Dark brown */
--secondary-color: #D2691E;    /* Chocolate */
--accent-color: #F4A460;       /* Sandy brown */
```

## Responsive Breakpoints

```css
Desktop:  1200px+
Tablet:   768px - 1200px
Mobile:   375px - 768px
Small:    Under 375px
```

## JavaScript Functions

| Function | Purpose |
|----------|---------|
| `showNotification()` | Toast message |
| `showGalleryModal()` | Enlarge image |
| `animateCounter()` | Number animation |
| Mobile menu toggle | Hamburger menu |

## Image Paths

```
images/products/       → Product images
images/gallery/        → Gallery images
images/hero/           → Hero banner
images/about/          → About section
```

## Font Awesome Icons

Add any Font Awesome icon:
```html
<i class="fas fa-icon-name"></i>
```

Common icons:
- `fa-cake-candles` - Cake
- `fa-heart` - Heart
- `fa-star` - Star
- `fa-fire` - Hot
- `fa-leaf` - Leaf
- `fa-award` - Award
- `fa-phone` - Phone
- `fa-envelope` - Email
- `fa-map-marker-alt` - Location

## Text Sections

### Hero Banner (Line ~80)
```html
<h1 class="hero-title">Your Title</h1>
<p class="hero-subtitle">Your Subtitle</p>
```

### Product Card (Line ~130)
```html
<h3>Product Name</h3>
<p class="product-description">Description</p>
<span class="price">$Price</span>
```

### About Section (Line ~330)
```html
<h2>About Title</h2>
<p>About content</p>
```

## Button Styles

```html
<!-- Primary Button -->
<button class="btn btn-primary">Order Now</button>

<!-- Small Button -->
<button class="btn btn-small">Add to Cart</button>
```

## Semantic HTML Structure

```html
<nav>         → Navigation bar
<section>     → Major sections
<div>         → Containers
<article>     → Content blocks
<footer>      → Footer
```

## CSS Layout Systems

### Grid (Products & Gallery)
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: 30px;
```

### Flexbox (Navigation)
```css
display: flex;
justify-content: space-between;
gap: 2rem;
```

## Animations

```css
/* Fade In */
animation: fadeInUp 0.8s ease;

/* Slide In */
animation: slideInLeft 0.8s ease;

/* Float */
animation: float 3s ease-in-out infinite;

/* Scale on Hover */
transform: scale(1.05);
```

## Form Elements

```html
<input type="text" placeholder="Name">
<input type="email" placeholder="Email">
<input type="tel" placeholder="Phone">
<textarea rows="5"></textarea>
<button type="submit">Send</button>
```

## Typography

- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)
- **Sizes**: h1=3.5rem, h2=2.5rem, h3=1.5rem

## Color Palette

| Color | Use |
|-------|-----|
| #8B4513 | Headings, primary text |
| #D2691E | Secondary accents |
| #F4A460 | Buttons, hover effects |
| #f9f7f4 | Light background |
| #333333 | Dark text |
| #ffffff | White background |

## Meta Tags (SEO)

Add to `<head>`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Your description">
<meta name="keywords" content="brownies, blondies, baked goods">
<title>DaiZ Delights - Premium Brownies & Blondies</title>
```

## Quick Links

| Document | Purpose |
|----------|---------|
| `SETUP_GUIDE.md` | Getting started |
| `DOCUMENTATION.md` | Full guide |
| `images/README.md` | Image guide |
| `index.html` | Main website |
| `css/style.css` | Styling |
| `js/script.js` | Interactivity |

## Mobile Menu Classes

```html
<!-- Hamburger button -->
<div class="hamburger"></div>

<!-- Navigation menu -->
<ul class="nav-menu"></ul>

<!-- Active state (added by JS) -->
.nav-menu.active { display: block; }
```

## Product Card Structure

```html
<div class="product-card">
    <div class="product-image">
        <!-- Image goes here -->
    </div>
    <div class="product-info">
        <h3>Product Name</h3>
        <p>Description</p>
        <div class="product-features">
            <!-- Features -->
        </div>
        <div class="product-price">
            <span class="price">$Price</span>
            <button>Add to Cart</button>
        </div>
    </div>
</div>
```

## Performance Tips

1. Optimize images < 300KB
2. Minify CSS & JS (optional)
3. Use CDN for images
4. Enable gzip compression
5. Lazy load images
6. Cache assets

## Browser Testing

- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Deployment Options

1. **GitHub Pages** - Free, GitHub required
2. **Netlify** - Free, easy drag & drop
3. **Vercel** - Free, fast deployment
4. **Traditional Host** - Any FTP hosting

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Images not showing | Check file paths |
| Mobile menu broken | Clear browser cache |
| Styling looks odd | Update CSS file |
| Links not working | Check href attributes |
| Slow loading | Compress images |

## File Extensions

- `.html` - Web pages
- `.css` - Stylesheets
- `.js` - JavaScript
- `.jpg` - Images (photos)
- `.png` - Images (graphics)
- `.md` - Documentation

---

**Bookmark this page for quick reference!** 📌

For detailed information, see the full documentation files.
