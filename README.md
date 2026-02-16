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

<img width="1782" height="1570" alt="Untitled diagram-2026-02-12-164836" src="https://github.com/user-attachments/assets/1e3d0e67-7e6c-4661-8d64-5e612e2b6257" />

<img width="2896" height="2875" alt="Untitled diagram-2026-02-12-165111" src="https://github.com/user-attachments/assets/24c3faca-0e5e-4568-be2d-7aef548eb665" />

<img width="1705" height="3770" alt="Untitled diagram-2026-02-12-165227" src="https://github.com/user-attachments/assets/00134961-6dfe-4f1c-a2e6-098f52710d95" />

<img width="6830" height="4640" alt="Untitled diagram-2026-02-12-165419" src="https://github.com/user-attachments/assets/14054099-0466-40e1-929f-5bbe9a6813b3" />

<img width="1476" height="5399" alt="Untitled diagram-2026-02-12-165643" src="https://github.com/user-attachments/assets/284b242b-f8bd-42af-89c4-301757a92c01" />

<img width="1803" height="3642" alt="Untitled diagram-2026-02-12-170631" src="https://github.com/user-attachments/assets/7108dbfa-80b8-4e22-bff1-c728481a1c94" />

<img width="5435" height="1255" alt="Untitled diagram-2026-02-12-171012" src="https://github.com/user-attachments/assets/662fbfcb-5e90-47f3-8ab5-cdb3265c6c6d" />

<img width="3461" height="2666" alt="Untitled diagram-2026-02-12-171040" src="https://github.com/user-attachments/assets/7c0c8cc7-fa61-40f9-b16d-7164c6096844" />

<img width="3333" height="6611" alt="Untitled diagram-2026-02-12-171225" src="https://github.com/user-attachments/assets/da41f699-ead2-4c6e-9aaf-e5dcd6c1d56c" />

<img width="2634" height="2910" alt="Untitled diagram-2026-02-12-171414" src="https://github.com/user-attachments/assets/3b0e8f01-fafb-453e-a845-d0d123ee1f8c" />

<img width="1938" height="5029" alt="Untitled diagram-2026-02-12-171458" src="https://github.com/user-attachments/assets/ecfacf3d-b6f9-4712-924a-2b551596e7cc" />

<img width="1894" height="5140" alt="Untitled diagram-2026-02-12-171602" src="https://github.com/user-attachments/assets/6885fea4-a53c-4d5c-803b-2705565c32eb" />

<img width="1751" height="8192" alt="Untitled diagram-2026-02-12-171651" src="https://github.com/user-attachments/assets/65af035c-237f-4df9-96d2-c96afe5f31e3" />

<img width="2878" height="5724" alt="Untitled diagram-2026-02-12-171738" src="https://github.com/user-attachments/assets/0147608c-b21c-4f68-8ad0-130d63aa901d" />

<img width="4407" height="3300" alt="Untitled diagram-2026-02-12-171820" src="https://github.com/user-attachments/assets/ac5b4560-47f9-4733-9f92-9a0ff63146aa" />

<img width="2308" height="3274" alt="Untitled diagram-2026-02-12-171857" src="https://github.com/user-attachments/assets/c28435d2-6245-480f-8dfc-dcaaac177973" />

<img width="2305" height="3501" alt="Untitled diagram-2026-02-12-171941" src="https://github.com/user-attachments/assets/086ae617-4aa8-401d-a9ad-6082f659ce4f" />

<img width="3918" height="5774" alt="Untitled diagram-2026-02-12-172024" src="https://github.com/user-attachments/assets/a9bc3eef-7563-437f-8baa-67b6f63bdb89" />




















