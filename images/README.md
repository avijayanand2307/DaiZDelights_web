# Images Folder Guide

This folder is dedicated to storing all images for the DaiZ Delights website.

## Folder Organization

```
images/
├── products/
│   ├── brownie-fudgy.jpg
│   ├── blondie-classic.jpg
│   ├── brownie-walnut.jpg
│   ├── blondie-caramel.jpg
│   ├── chocolate-double.jpg
│   └── brownie-nutmix.jpg
├── gallery/
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   ├── gallery-5.jpg
│   └── gallery-6.jpg
├── hero/
│   └── hero-background.jpg
└── about/
    └── about-image.jpg
```

## Image Naming Conventions

- Use lowercase names
- Separate words with hyphens (not spaces or underscores)
- Be descriptive: `brownie-fudgy.jpg` instead of `product1.jpg`
- Include image type: `gallery-1.jpg`, `hero-bg.jpg`

## Recommended Images to Source

### Product Images (Required - 6 images)
1. **Fudgy Brownies** - Close-up, dark chocolate, fudgy texture
2. **Classic Blondies** - Light brown, buttery look, chocolate chips visible
3. **Walnut Brownies** - Dark chocolate with walnut pieces
4. **Salted Caramel Blondies** - Golden color, caramel drizzle
5. **Double Chocolate** - Very dark, rich appearance
6. **Nut Mix Brownies** - Mixed nuts visible, brown color

### Gallery Images (Recommended - 6 images)
- Freshly baked products
- Plating/presentation shots
- Process/behind-the-scenes
- Lifestyle/consumption photos
- Packaging (if applicable)
- Team/workshop photos

### Hero Background (Optional)
- Large banner image (1200x600px+)
- Bakery/kitchen setting
- Product lifestyle image
- Warm, inviting atmosphere

## Image Specifications

### Dimensions
- **Product Cards**: 400x300px minimum (600x450px recommended)
- **Gallery Grid**: 500x400px minimum (600x500px recommended)
- **Hero Section**: 1200x600px (can be larger)
- **About Section**: 300x300px (circular crop)

### File Format
- **JPG/JPEG** - Photographs (best compression, ~80-90 quality)
- **PNG** - Graphics with transparency
- **WebP** - Modern format (optional, for better compression)

### File Size
- **Target**: 100-300KB per image
- **Maximum**: 500KB per image
- Use image compression tools: TinyPNG, ImageOptim, etc.

## How to Add Images

### Using Local Images

1. Save images to this folder with proper naming
2. In `index.html`, replace placeholder divs:

```html
<!-- Old (placeholder): -->
<div class="image-placeholder">
    <i class="fas fa-square"></i>
</div>

<!-- New (with image): -->
<img src="images/products/brownie-fudgy.jpg" alt="Fudgy Brownies" class="product-img">
```

### Optional: Add CSS for image styling

Add to `css/style.css`:

```css
.product-img,
.gallery-img,
.about-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
```

## Free Image Resources

If you need images to start with:

### Free Stock Photo Sites
- **Unsplash** (unsplash.com) - High quality, free
- **Pexels** (pexels.com) - Great selection
- **Pixabay** (pixabay.com) - Many bakery images
- **Shutterstock** - Premium options
- **Adobe Stock** - Professional images

### Search Keywords
- "brownie photography"
- "chocolate brownies flat lay"
- "homemade blondies"
- "bakery products"
- "pastry background"
- "chocolate desserts"
- "baked goods"

## Image Optimization Tools

- **TinyPNG/TinyJPG** - Lossy compression
- **ImageOptim** - Mac native tool
- **FileOptimizer** - Windows native tool
- **Squoosh** - Google's web tool
- **RIOT** - Advanced compression

## Adding Images to HTML

### Product Section Example

```html
<div class="product-card">
    <div class="product-image">
        <img src="images/products/brownie-fudgy.jpg" 
             alt="Fudgy Brownies" 
             class="product-img">
    </div>
    <div class="product-info">
        <!-- Rest of product info -->
    </div>
</div>
```

### Gallery Section Example

```html
<div class="gallery-item">
    <img src="images/gallery/gallery-1.jpg" 
         alt="DaiZ Delights Gallery" 
         class="gallery-img">
</div>
```

## Tips for Best Results

1. **Consistency** - Use similar lighting and style across all product images
2. **Backgrounds** - Clean, uncluttered backgrounds work best
3. **Angles** - Get products from appealing angles
4. **Props** - Use props that complement the products (plates, utensils, napkins)
5. **Lighting** - Natural light is best for food photography
6. **Shadows** - Add gentle shadows for dimension
7. **Cropping** - Crop images to focus on the product
8. **Color** - Warm tones complement chocolate/brown colored products

## Troubleshooting

### Images not showing?
1. Check file path is correct
2. Verify file exists in images folder
3. Check file name spelling and case
4. Ensure file format is supported (JPG, PNG, WebP)

### Images look blurry?
1. Image might be too small for the space
2. Use higher resolution image
3. Compress less aggressively

### Images load slowly?
1. File size is too large
2. Use compression tools
3. Consider WebP format
4. Use CDN for faster delivery

## Next Steps

1. ✅ Create product images or source them
2. ✅ Optimize images for web
3. ✅ Save to this images folder
4. ✅ Update HTML with image paths
5. ✅ Test on different devices
6. ✅ Deploy website

---

**Happy photographing! Your beautiful brownies and blondies deserve amazing images!** 📸🍫
