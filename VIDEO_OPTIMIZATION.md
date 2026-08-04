# Video Optimization Guide

## Current Issue
`lift6.mp4` is **115MB** which is too large for deployment and causes:
- Slow build times
- Deployment failures
- Poor website performance
- GitHub file size warnings

## Video File Sizes
- lift1.mp4: 26.6 MB ⚠️ (should be compressed)
- lift2.mp4: 9.61 MB ✅
- lift3.mp4: 6.00 MB ✅
- lift4.mp4: 12.26 MB ✅
- lift5.mp4: 8.58 MB ✅
- lift6.mp4: 115.44 MB 🚫 (MUST be compressed or removed)

## Recommended Solutions

### Option 1: Compress Videos (RECOMMENDED)
Use online tools or ffmpeg to compress large videos to under 10MB each:

**Online Tools:**
- https://www.videosmaller.com/
- https://www.freeconvert.com/video-compressor
- https://www.online-convert.com/

**FFmpeg Command (if installed):**
```bash
ffmpeg -i lift6.mp4 -vcodec libx264 -crf 28 -preset medium -vf scale=1280:-2 lift6-compressed.mp4
ffmpeg -i lift1.mp4 -vcodec libx264 -crf 28 -preset medium -vf scale=1280:-2 lift1-compressed.mp4
```

**Target sizes:** 5-10MB per video

### Option 2: Host Videos Externally
Upload videos to:
- YouTube (embed as background)
- Cloudinary
- AWS S3
- Vimeo

### Option 3: Use Placeholder Image
Replace video with a static image for Contact page

## Quick Fix Applied
1. ✅ Added `lift6.mp4` to `.gitignore`
2. ✅ Changed Contact page to use `lift3.mp4` (6MB)
3. ✅ Optimized Vite build configuration
4. ⚠️ Consider compressing `lift1.mp4` (26.6MB)

## Next Steps
1. Compress or remove `lift6.mp4`
2. Optionally compress `lift1.mp4`
3. Run `npm run build` to verify build completes
4. Deploy with `npm run deploy`
