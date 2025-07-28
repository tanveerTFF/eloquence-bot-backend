# Eloquence Bot

Eloquence Bot is an AI-powered **quote recommendation website** that provides users with inspirational quotes based on various moods or categories like **motivational**, **romantic**, **funny**, **epic**, **stoic**, and **gamery**. The bot uses **natural language processing** to understand user inputs and provide contextually relevant quotes.

You can visit the live version of the site here: [**Eloquence Bot**](https://eloquence-bot.vercel.app)

---

### **Features**
- **Chatbot Interface**: The website has an interactive chatbot that allows users to ask for quotes based on specific moods or categories.
- **Category-based Quotes**: The user can request quotes from different categories: **motivational**, **romantic**, **funny**, **epic**, **stoic**, and **gamery**.
- **Quote Refresh**: A **refresh button** that fetches 5 new random quotes from the selected category.
- **Smooth Navigation**: The site allows smooth navigation between different quote categories with **scroll snap** for a clean user experience.
  
---

### **Technologies Used**

#### **Frontend**
- **React.js**: The frontend of the site is built using React for a **dynamic user interface** and **component-based architecture**.
- **Vite**: Vite is used for bundling the frontend assets. It offers **fast build times** and better **developer experience**.
- **Tailwind CSS**: Tailwind CSS is used for styling. It is a **utility-first CSS framework** that provides flexible styling with easy customization.
- **Vercel**: The frontend is deployed on **Vercel**, offering continuous integration and deployment straight from GitHub.

#### **Backend**
- **Node.js & Express**: The backend is built using **Node.js** with the **Express** framework, allowing for easy routing and API setup.
- **MongoDB**: Quotes and user interactions are stored in **MongoDB**, providing a flexible database solution with fast read and write operations.
- **Groq API**: Used to detect **user intent** and categorize the requests based on mood. This makes the chatbot smarter and capable of understanding various types of user queries.
- **Railway**: The backend is deployed on **Railway**, offering simple cloud infrastructure and environment management.

---

### **Key Features and Techniques Implemented**

1. **Quote Recommendation Logic**:
   - The **chatbot** uses Groq to detect the user's **intent** and provide relevant quotes. For example, if the user says "I want something funny," Groq classifies the intent, and the system fetches funny quotes.
   
2. **Session Management**:
   - The **chat history** is stored and maintained via **MongoDB**, allowing users to see past interactions.
   - Each user has a **session ID**, ensuring their interactions are persistent even if the page is reloaded.

3. **Dynamic Quote Fetching**:
   - The **quotes are fetched dynamically** based on the user's mood or category, from the backend API which is connected to MongoDB.
   - The **backend uses the Groq API** to determine if the user is asking for a **motivational** quote, **romantic** quote, etc.
   
4. **User Interface**:
   - The interface is designed with **clean, minimal, and modern aesthetics** using **Tailwind CSS**. The layout is fully responsive and adapts across devices.
   - The quotes section is styled with a **white background** and **black text** to ensure readability and consistency in design.
   - A **refresh button** allows users to get **new random quotes** from their selected category.

5. **Smooth Scrolling**:
   - The page utilizes **scroll snap behavior** for a smooth transition between sections. This makes it feel like users are navigating through full-page slides.

---

### **How It Works**

1. **Frontend (React + Vercel)**:
   - The **React frontend** interacts with the backend to fetch quotes and display them. The user interacts with the chatbot, and based on the user input, the appropriate API call is made to fetch the corresponding quotes.
   
2. **Backend (Node.js + Express + MongoDB + Railway)**:
   - The **Express API** listens for requests from the frontend and interacts with **MongoDB** to fetch quotes based on categories. It uses the **Groq API** to detect the mood or intent behind the user’s query and provide an appropriate response.

3. **Deployment**:
   - **Frontend** is deployed on **Vercel**, ensuring automatic deployments from GitHub with continuous integration.
   - **Backend** is deployed on **Railway**, which handles the API routes, database connections, and quote fetching functionalities.
