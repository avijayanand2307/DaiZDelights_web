# DaiZ Delights - Modern Static Website

A beautiful, modern static website for DaiZ Delights, specializing in premium brownies and blondies.

## Project Structure

```
DaiZ-Delights/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Complete styling with modern design
├── js/
│   └── script.js          # Interactive functionality
├── images/                 # Image folder (ready for your images)
│   └── README.md          # Image naming conventions
└── DOCUMENTATION.md       # This file
```

## Features

### 🎨 Modern Design
- Latest UI design standards with Playfair Display and Poppins fonts
- Responsive grid layouts
- Smooth animations and transitions
- Gradient backgrounds and shadows
- Mobile-first responsive design

### 📱 Responsive
- Works perfectly on desktop, tablet, and mobile
- Mobile hamburger menu
- Touch-friendly interface
- Optimized for all screen sizes

### 🛍️ Product Showcase
- 6 delicious product cards
- Product descriptions and features
- Price display
- Add to cart functionality
- Product images placeholder (ready for your images)

### 📸 Gallery Section
- Beautiful image gallery grid
- Click-to-enlarge modal functionality
- Smooth hover animations
- 6 gallery placeholder spaces

### 📧 Contact Section
- Contact form with validation
- Business information
- Social media links
- Multiple contact methods

### ⚡ Interactive Features
- Smooth scrolling navigation
- Active navigation highlighting
- Add to cart with visual feedback
- Toast notifications
- Form submission handling
- Scroll animations

## Getting Started

### 1. Open the Website
Simply open `index.html` in your web browser. No installation or server required!

### 2. Add Your Images

The website has placeholders for images. To add your images:

#### Product Images
- Add your product images to the `images/` folder
- Name them as: `brownie-1.jpg`, `blondie-1.jpg`, etc.
- Update `index.html` in the `.product-image` divs:

```html
<!-- Change from: -->
<div class="image-placeholder">
    <i class="fas fa-square"></i>
</div>

<!-- To: -->
<img src="images/product-name.jpg" alt="Product Name" class="product-img">
```

#### Gallery Images
- Add gallery images to the `images/` folder
- Update the gallery items in `index.html`:

```html
<!-- Change from: -->
<div class="gallery-placeholder">
    <i class="fas fa-image"></i>
</div>

<!-- To: -->
<img src="images/gallery-1.jpg" alt="Gallery Image" class="gallery-img">
```

### 3. Customize Content

Edit `index.html` to customize:
- Business information (address, phone, email, hours)
- Product names, descriptions, and prices
- Social media links
- Contact information

## Image Recommendations

### Image Sizes
- **Product Images**: 400x300px (min), 600x450px (recommended)
- **Gallery Images**: 500x400px (min), 600x500px (recommended)
- **Hero Background**: 1200x600px

### Image Format
- Use JPG for photographs (best compression)
- Use PNG for graphics with transparency
- Optimize images for web (keep file sizes under 500KB each)

### Suggested Images for Brownies & Blondies
1. Fudgy Brownies - Close-up of dark chocolate brownie with fudgy center
2. Classic Blondies - Buttery blondie with chocolate chips
3. Walnut Brownies - Brownies with visible walnut pieces
4. Salted Caramel Blondies - Blondies with caramel drizzle
5. Double Chocolate - Rich, dark chocolate combination
6. Nut Mix Brownies - Blondies with mixed nuts

## Modern Design Features

### Color Scheme
- **Primary**: #8B4513 (Saddle Brown)
- **Secondary**: #D2691E (Chocolate)
- **Accent**: #F4A460 (Sandy Brown)
- **Background**: #f9f7f4 (Warm White)

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Poppins (text)
- Both from Google Fonts

### UI Elements
- Gradient buttons with hover effects
- Card-based layouts with shadows
- Smooth transitions and animations
- Icon integration from Font Awesome 6
- Toast notifications
- Modal galleries

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Tips

### Change Brand Colors
Edit the `:root` section in `css/style.css`:
```css
:root {
    --primary-color: #8B4513;      /* Change this */
    --secondary-color: #D2691E;    /* And this */
    --accent-color: #F4A460;       /* And this */
}
```

### Modify Fonts
Update font imports in `index.html` head section to use different Google Fonts.

### Update Pricing
Edit product cards in `index.html` to change prices and product names.

### Add New Products
Duplicate a product card and modify the content in the `.products-grid` section.

## Deployment

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings > Pages
4. Select `main` branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Configure build settings if needed (not required for static sites)
3. Deploy automatically on every push

### Deploy to Web Server
Simply upload all files to your web hosting provider's public directory.

## JavaScript Features Included

1. **Mobile Menu Toggle** - Hamburger menu for mobile devices
2. **Add to Cart** - Saves items to browser's local storage
3. **Contact Form** - Handles form submission with validation
4. **Notifications** - Toast notifications for user actions
5. **Scroll Animations** - Elements animate in on scroll
6. **Gallery Modal** - Click images to view in modal
7. **Active Navigation** - Highlights current section in nav
8. **Smooth Scrolling** - Enhanced smooth scroll experience

## Performance

- Lightweight HTML/CSS/JS (no heavy frameworks)
- Fast loading times
- Optimized images
- Clean, semantic HTML
- Efficient CSS with minimal bloat
- Vanilla JavaScript (no jQuery required)

## Font Awesome Icons Used

- `fas fa-cake-candles` - Logo
- `fas fa-cupcake` - Hero icon
- `fas fa-square` - Product placeholder
- `fas fa-leaf` - Premium indicator
- `fas fa-fire` - Fresh baked indicator
- `fas fa-butter` - Pure butter indicator
- `fas fa-star` - Premium quality
- `fas fa-nuts` - Nuts indicator
- `fas fa-heart` - Handmade indicator
- `fas fa-droplet` - Caramel indicator
- `fas fa-sparkles` - Artisan indicator
- `fas fa-award` - Award winning
- `fas fa-check` - Checkmark
- `fas fa-image` - Gallery icon
- Social media icons (Facebook, Instagram, Twitter, Pinterest)
- And many more...

## Support for Images

To use actual images instead of placeholders:

1. **Add this CSS to style.css** (optional):
```css
.product-img, .gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

2. **Update HTML** to use img tags instead of icon placeholders
3. **Optimize images** for web before uploading
4. **Use CDN** for faster delivery if hosting images externally

## Future Enhancements

Consider adding:
- Shopping cart page
- Product detail pages
- Customer reviews/testimonials
- Blog section
- Email newsletter signup
- Payment integration
- Admin backend
- Search functionality
- Wishlist feature

## License

Free to use and modify for personal and commercial projects.

## Support

For any issues or questions, contact: hello@daizdelights.com

---

**Ready to add your delicious images and start selling your amazing brownies and blondies!** 🍫✨
