🌐 SurakshaRide+ (Frontend – React)

AI & IoT Powered Last-Mile Safety Platform for Women

SurakshaRide+ is a web + mobile safety ecosystem designed to make last-mile travel safer, especially for women during night-time mobility. The frontend is built using React, with responsive UI components, real-time mapping, and seamless integration with backend APIs and IoT beacons.

This README provides an overview of features, architecture, setup instructions, and contribution guidelines for the React frontend.

🚀 Features (Frontend Highlights)
🔴 1. Multi-Modal SOS Interface

One-tap SOS button with red alert UI

Voice/scream detection trigger (with user permission)

Auto-display of emergency contacts + cancel false alarm option

👥 2. Community & Authority Alert UI

Live map showing responders, police stations, and nearby volunteers

“I’m Going” toggle for verified responders

Real-time status updates (Acknowledged / En route / Arrived)

🚗 3. Driver Verification

Driver profile scan screen (QR/number entry)

Display driver photo, vehicle details

Push data to backend for safe-share

🗺️ 4. Smart Safety Map

React-map/Leaflet/Mapbox integration

Nearby police, hospitals, washrooms, petrol pumps

Visual alerts when entering risky zones

🚍 5. Public Transport Safety Layer

Crowdedness indicator (AI-backed, non-identifying)

Coach selection UI (safer coach recommendation)

🛡️ 6. Encrypted Real-time Tracking (UI Layer)

Live location sharing card

Audio/video streaming placeholders with backend integration

📶 7. Offline & Fallback

Graceful UI fallback when internet or GPS becomes unavailable

SMS-based fallback prompts

🤝 8. Volunteer Dashboard (Frontend View)

Alerts list

Map view

Verification badge and interaction buttons

🏗️ Tech Stack (Frontend)
Category	Technology
Framework	React (Vite or CRA)
UI	TailwindCSS / Material UI
Maps	Leaflet / MapboxGL
State Mgmt	Redux Toolkit / Zustand
Auth	JWT-based authentication
Communication	REST APIs + WebSocket/MQTT hooks
Build & Deployment	Netlify / Vercel / Docker

 ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
