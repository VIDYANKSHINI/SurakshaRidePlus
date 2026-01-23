# SurakshaRide+ (Frontend – React)

AI & IoT Powered Last-Mile Safety Platform for Women

SurakshaRide+ is a web and mobile safety ecosystem designed to enhance last-mile travel security, with a strong focus on women’s safety during night-time mobility. The frontend is built using React and provides a responsive, real-time, map-driven user experience with seamless integration to backend services and IoT safety beacons.

This repository contains the React frontend for SurakshaRide+, including user-facing safety interfaces, real-time alert visualizations, and dashboards for volunteers and responders.

---

## Features

### 1. Multi-Modal SOS Interface
- One-tap SOS button with high-visibility alert UI  
- Voice/scream detection trigger (permission-based)  
- Emergency contact display with false-alarm cancellation option  

### 2. Community and Authority Alert Interface
- Live map showing nearby responders, police stations, and verified volunteers  
- “I’m Going” toggle for responders  
- Real-time alert status updates (Acknowledged, En Route, Arrived)  

### 3. Driver Verification Module
- Driver profile verification via QR scan or number entry  
- Display of driver photograph and vehicle details  
- Secure data sharing with backend services  

### 4. Smart Safety Map
- Integration with Leaflet / Mapbox  
- Nearby safety infrastructure visualization (police stations, hospitals, washrooms, petrol pumps)  
- Visual alerts when entering identified high-risk zones  

### 5. Public Transport Safety Layer
- Crowdedness indicator powered by AI (non-identifying)  
- Coach selection interface with safer-coach recommendations  

### 6. Encrypted Real-Time Tracking (UI Layer)
- Live location sharing interface  
- Audio/video streaming placeholders for backend integration  

### 7. Offline and Fallback Support
- Graceful UI degradation during internet or GPS loss  
- SMS-based fallback prompts  

### 8. Volunteer Dashboard
- Alert feed with real-time status  
- Interactive map view  
- Volunteer verification badge and response actions  

---

## Frontend Architecture Overview

- Component-driven React architecture  
- Centralized state management using Redux Toolkit or Zustand  
- API communication via REST APIs and WebSocket/MQTT hooks  
- Map rendering and geospatial logic handled at the UI layer  
- Designed for scalability across web and mobile platforms  

---

## Tech Stack

| Category | Technology |
|--------|------------|
| Framework | React (Vite or Create React App) |
| UI | TailwindCSS / Material UI |
| Maps | Leaflet / Mapbox GL |
| State Management | Redux Toolkit / Zustand |
| Authentication | JWT-based authentication |
| Communication | REST APIs, WebSockets, MQTT hooks |
| Build & Deployment | Netlify, Vercel, Docker |

---

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm or yarn

### Installation
```bash
npm install

Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
