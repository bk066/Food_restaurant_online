# 🍔 Bite & Delight - Premium 3D Food Delivery App

**Bite & Delight** is a high-end, McDonald's-inspired digital dining platform built for a premium user experience. It features a stunning 3D-animated UI, real-time order tracking, and a secure Kitchen Command Center for staff.

-----

## ✨ Key Features

### 🛒 Customer Portal

  * **3D Interactive Menu:** Perspective-based hover effects on food items for a modern feel.
  * **McDelivery Clone Logic:** Choose between **Dine-in (Table Service)**, **Takeaway**, or **Home Delivery**.
  * **Smart Bag (Cart):** Real-time price calculation and quantity management.
  * **Live Order Tracking:** A dedicated 3D tracking screen that updates instantly when the kitchen changes the order status.
  * **Cookie-Based Auth:** Remembers the user's name and phone number using browser cookies (No need to login every time).

### 👨‍🍳 Shop Staff Portal (Admin)

  * **Secure Access:** Protected by a PIN-locked gateway for authorized staff only.
  * **Live Command Center:** Real-time sync with Firebase to show incoming orders without page refresh.
  * **Status Management:** One-click status updates (Preparing → Out for Delivery → Completed).
  * **Customer Data Collection:** Access to customer names, phone numbers, and delivery addresses for every order.

-----

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React.js (Vite)** | Frontend Framework |
| **Tailwind CSS** | Premium Styling & Responsiveness |
| **Firebase Firestore** | NoSQL Real-time Database |
| **Framer Motion** | 3D Animations & Staggered Transitions |
| **React Router** | Multi-page Navigation (Customer vs Staff) |
| **JS-Cookie** | Session Management |
| **Lucide React** | High-quality Minimalist Icons |

-----

## 🚀 Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/bk066/Food_restaurant_online.git
    cd premium-site
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Firebase:**
    Create a `src/firebase.ts` file and add your Firebase credentials:

    ```javascript
    // src/firebase.ts
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_ID",
      appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    ```

4.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

-----

## 📂 Project Structure

```text
premium-site/
├── src/
│   ├── firebase.ts      # Database connection
│   ├── App.tsx          # Main Application Logic (Routes & UI)
│   ├── index.css        # Tailwind & Global Styles
│   └── main.tsx         # React entry point
├── public/              # Static assets
└── package.json         # Project dependencies
```

-----

## 🔐 Admin Access

  * **Path:** `/shop-staff-only`
  * **Default PIN:** `1234`

## 👨‍💻 Developed By

**Bharat Jalan** *Self-taught Web Developer & UI/UX Enthusiast* 
