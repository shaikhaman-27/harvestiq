# HarvestIQ • Smart Solar Cold Storage System
### SIH 2026 Prototype • IoT-Enabled Post-Harvest Preservation for Rural Farmers
**Problem Statement 26005:** Solar-Powered Smart Mini Cold Storage System for Fresh Vegetables in North Eastern Region (NER)

---

## Live Public Demo & Local Development

- 🌐 **Public Live Demo:** [https://harvestiq-sih2026.surge.sh](https://harvestiq-sih2026.surge.sh)
- 💻 **Localhost Development:** [http://localhost:3000](http://localhost:3000)
- 📱 **QR Code Asset:** `harvestiq_qr_code.png` (scan to open public prototype on mobile)

---

## How to Run Locally

This project requires **Node.js** (v16+ or v20+). It has **zero external package dependencies** and operates completely offline for local development.

### Option 1: Start using npm
```bash
npm run dev
```
or
```bash
npm start
```

### Option 2: Start directly with Node
```bash
node server.js
```

Then open your browser and navigate to:
```
http://localhost:3000
```

---

## Production Build & Vercel Deployment

### 1. Build for Production Locally
```bash
npm run build
```
This builds the production-ready static assets into the `dist/` and `public-demo/` directories with full offline simulation mode and Vercel routing rules.

### 2. Preview the Production Build
```bash
npm run preview
```
Opens a local preview server of the production build at `http://localhost:4173`.

### 3. Deploy to Vercel

#### Method A: Via GitHub (Recommended)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Prepare SIH 2026 website for Vercel deployment"
   ```
2. Create a new repository on [GitHub](https://github.com/new) and push your code:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and sign in.
4. Click **"Add New..."** → **"Project"** → **Import** your GitHub repository.
5. Vercel automatically detects the included `vercel.json` and `package.json` configurations:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. Your website will be live on a secure public HTTPS URL (e.g. `https://your-project.vercel.app`).

#### Method B: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to log in and deploy. For production promotion:
```bash
npx vercel --prod
```

---

## Main Navigation Pages

1. **🏠 Dashboard (`Dashboard`)**:
   - High-visibility **Storage Condition Hero Status** (`🟢 OPTIMAL`, `🟡 ATTENTION REQUIRED`, `🔴 CRITICAL`).
   - 7 Live Sensor Cards:
     - **Temperature**: Current reading (°C), target range, and normal/critical badge.
     - **Humidity**: Relative humidity percentage, target range, and status.
     - **Battery**: Real-time battery percentage, charging/discharging flow indicator, and visual animated battery bar.
     - **Solar Power**: Solar generation in kW and PV array power source status.
     - **Peltier Cooling**: Thermoelectric module state (`PELTIER: ON / OFF`) and active power source.
     - **Power System**: `MAIN POWER: AVAILABLE` or `POWER FAILURE: BATTERY BACKUP ACTIVE`.
     - **Storage Door**: `DOOR CLOSED` or `DOOR OPEN`.
   - Quick Judge Action buttons directly on the home view.

2. **📊 Storage Monitor (`Storage Monitor`)**:
   - Real-time environmental trend history canvas chart plotting temperature (°C) and humidity (%).
   - Daily min/max/average statistics, Peltier duty cycle, and estimated battery reserve runtime.

3. **🔔 Alert Center & Historical Log (`Alerts`)**:
   - Active alerts with dedicated farmer action recommendations (e.g. *"Check solar charging source or reduce unnecessary power usage"*).
   - Complete historical log table tracking event timestamps, sensor values, severity levels, descriptions, and resolution states.

4. **📦 My Produce (`Produce`)**:
   - Farmer crop selector with standard agricultural targets:
     - 🍅 **Tomato**: 10.0 °C (Range 8–12°C) · 85–90% RH
     - 🥬 **Cabbage**: 2.0 °C (Range 1–4°C) · 90–95% RH
     - 🫘 **Beans**: 6.0 °C (Range 4–7°C) · 85–90% RH
     - 🥦 **Leafy Vegetables**: 3.0 °C (Range 2–5°C) · 90–95% RH
     - 🌶️ **Chilli**: 8.0 °C (Range 7–10°C) · 80–85% RH
     - 🥕 **Other Produce**: 5.0 °C (Range 4–8°C) · 85–90% RH
   - Clearly identified as *"Recommended / Demo Storage Parameters"*.

5. **⚙️ System Architecture & Hardware (`System`)**:
   - Visual flowcharts representing the power, cooling, and IoT sensor loop.
   - Live simulated device and sensor hardware table (ESP32, DS18B20, DHT22, Reed Switch, INA219, Peltier TEC1, LiFePO₄ battery, Solar PV, Local Wi-Fi).

6. **🧪 SIH 2026 Judge Demo Center (`Demo Center`)**:
   - Dedicated scenario triggers for evaluators:
     - `NORMAL OPERATION`: Baseline health (6.4°C, 84%, 78% battery, solar active).
     - `SIMULATE TEMP FLUCTUATION`: Temperature increases to 11.8°C, condition shifts to CRITICAL.
     - `SIMULATE LOW BATTERY`: Battery drops to exactly **25%** (<30%), triggers alert with farmer recommendation.
     - `RESTORE BATTERY`: Restores battery to 78%.
     - `SIMULATE POWER FAILURE`: Grid power FAILED, Solar 0 kW, Battery Backup ACTIVE, Peltier cooling remains ON.
     - `RESTORE POWER`: Restores solar generation and grid status.
     - `SIMULATE HIGH HUMIDITY`: Humidity rises to 96%, triggers alert.
     - `SIMULATE DOOR OPEN`: Door opened warning.
     - `SIMULATE MULTIPLE ISSUES`: Compound stress test (Temperature 11.8°C + Humidity 96% + Battery 25% + Door open + Power failure).
     - `RESET ALL`: Restores everything to pristine OPTIMAL baseline.

---

## Multi-Language Support (11 Languages)

A local translation dictionary (zero external API calls) provides native interface translations across all 11 North Eastern Region languages:
1. **English** (`en`)
2. **Assamese / অসমীয়া** (`as`)
3. **Bengali / বাংলা** (`bn`)
4. **Bodo / बड़ो** (`brx`)
5. **Meitei / Manipuri / মৈতৈলোন্** (`mni`)
6. **Khasi** (`kh`)
7. **Garo / A·chik** (`garo`)
8. **Mizo / Mizo ṭawng** (`lus`)
9. **Kokborok** (`kok`)
10. **Nepali / नेपाली** (`ne`)
11. **Hindi / हिन्दी** (`hi`)

---

## 2-Minute SIH Judge Demonstration Flow

1. **Step 1: Baseline Health**
   - Click **NORMAL OPERATION**. Show the `🟢 OPTIMAL` condition banner, 6.4°C temp, 84% humidity, and active solar charging.
2. **Step 2: Temperature Fluctuation Alert**
   - Click **SIMULATE TEMP FLUCTUATION**. Point out the temperature rising to 11.8°C, storage condition switching to `🔴 CRITICAL`, and the alert notification generated.
3. **Step 3: Low Battery & Power Failure**
   - Click **SIMULATE LOW BATTERY**. The battery indicator drops to **25%** (<30%), progress bar turns red, and a low battery warning appears. Click **RESTORE BATTERY**.
   - Click **SIMULATE POWER FAILURE**. Show Solar drop to 0 kW, power change to `FAILED`, and the unit seamlessly switching to **LiFePO₄ Battery Backup** with Peltier cooling remaining ON.
4. **Step 4: Multiple Stress Test & Reset**
   - Click **SIMULATE MULTIPLE ISSUES** to demonstrate compounding failure detection.
   - Click **RESET ALL** to restore optimal operation in seconds.

---

## Quality Assurance & Verification Results

- ✅ **Localhost Web Server**: Active at `http://localhost:3000` (Node.js HTTP daemon).
- ✅ **Offline Operation**: Zero internet dependencies, no external CDNs, no external APIs.
- ✅ **State Consistency**: Centralized state store guarantees no conflicting readings across any view.
- ✅ **Automated Tests**: 100% pass rate across all 12 scenario test suites in `test_scenarios.js` and `test_dom.js`.
- ✅ **Responsive UI**: Verified on mobile viewports (<600px), tablets, laptops, and desktop screens.
