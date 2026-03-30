# 📱 React Native QR App – Project Plan

## 🎯 Goal
Build a **fast, clean React Native app** that displays:
- Your **name**
- What you do (short bio)
- A **QR code** pointing to: https://cafe-valley.com/

---

## 🧱 Tech Stack
- React Native (Expo for speed)
- TypeScript (optional but recommended)
- `react-native-qrcode-svg` (QR generation)
- Expo Go (for testing)

---

## ⚡ Setup

### 1. Create project
```bash
npx create-expo-app cafe-valley-qr
cd cafe-valley-qr
npm install
```

✅ TODO Checklist
Setup
 - [x] Create Expo app
 - [x] Install QR library
 - [x] Run project

UI
 - [x] Create QRCard component
 - [x] Add name + role
 - [x] Generate QR code
 - [x] Center layout

Testing
 - [ ] Test QR scan
 - [ ] Test on phone

Deploy
 - [ ] Build APK
 - [ ] Share app