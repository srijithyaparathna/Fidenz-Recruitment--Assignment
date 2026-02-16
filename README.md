# Weather Analytics Application

## Overview
![WhatsApp Image 2026-02-16 at 18 57 13](https://github.com/user-attachments/assets/80372827-a598-474f-bb1a-0b35748b5874)


This project is a secure full-stack Weather Analytics application that retrieves real-time weather data from the OpenWeatherMap API, computes a custom **Comfort Index Score**, and displays ranked results in a responsive dashboard.  
Authentication and authorization are handled using Auth0 with email-based Multi-Factor Authentication (MFA).

---

## 1. Setup Instructions

### Prerequisites
- Node.js (v18 or later)
- npm
- Auth0 account
- OpenWeatherMap API key

---

### Backend Setup

```bash
cd backend
npm install
npm start

PORT=5000
OPENWEATHER_API_KEY=your_openweather_api_key
AUTH0_DOMAIN=your-auth0-domain
AUTH0_AUDIENCE=your-api-audience
CACHE_TTL=300



### frontend Setup

cd frontend
npm install
npm run dev

VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_AUTH0_AUDIENCE=your-api-audience
VITE_API_BASE_URL=http://localhost:5000

2. Comfort Index Formula Explanation

The Comfort Index is a single numerical score between 0 and 100 that represents how comfortable the weather feels for a human.

The backend computes the score using the following parameters:

Temperature (°C)

Humidity (%)

Wind Speed (m/s)

Formula Implementation

score = 100
score -= |temperature - 22| × 2
score -= |humidity - 50| × 0.5
score -= |windSpeed - 5| × 3

| Parameter   | Ideal Value | Weight | Reason                                           |
| ----------- | ----------- | ------ | ------------------------------------------------ |
| Temperature | 22°C        | ×2     | Human comfort is highly sensitive to temperature |
| Humidity    | 50%         | ×0.5   | Affects comfort but less than temperature        |
| Wind Speed  | 5 m/s       | ×3     | Strong wind significantly reduces comfort        |

4. Trade-offs Considered

Limited parameters: Only three weather parameters were used to keep the formula simple and explainable.
No seasonal adjustments: Comfort expectations may differ by region or season.
Linear penalties: Non-linear models could be more accurate but would reduce transparency.
The chosen formula balances simplicity, clarity, and realism.

5. Cache Design Explanation

Server-side caching is implemented to reduce external API calls and improve performance.
Cache Strategy
Raw OpenWeatherMap responses are cached for 5 minutes
Cache is stored in-memory using a Map-based cache
Cache key = City ID
Cache value = Weather data + timestamp
Benefits
Reduces API rate-limit usage
Improves response time
Ensures consistent ranking during cache window
A debug endpoint is available to inspect cache HIT/MISS status.

6. Authentication & Authorization

Authentication is handled via Auth0 Universal Login
Email-based MFA is enabled (Always On)
Public signups are disabled
Only whitelisted users can log in
Backend APIs are protected using JWT validation
No user registration functionality is implemented as per assignment req

c4 diagram
in pdf 



















