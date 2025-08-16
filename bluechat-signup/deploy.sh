#!/bin/bash

# BlueChat Signup Page Deployment Script
echo "🚀 Deploying BlueChat Signup Page..."

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Your BlueChat signup page is ready for deployment!"
    echo ""
    echo "📁 Build files are in the 'dist' folder"
    echo ""
    echo "🌐 Deploy options:"
    echo "   • Netlify: Drag 'dist' folder to netlify.com"
    echo "   • Vercel: Run 'vercel' in project root"
    echo "   • GitHub Pages: Push to gh-pages branch"
    echo "   • Any static hosting service"
    echo ""
    echo "🔗 Local preview: npm run preview"
else
    echo "❌ Build failed!"
    exit 1
fi
