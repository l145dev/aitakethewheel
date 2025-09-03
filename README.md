# AI take the wheel (aitakethewheel)

**AI Take The Wheel** is a web app that lets AI generate creative, uncommon web apps for you instantly! Powered by [Groq](https://groq.com/) and OpenAI's "openai/gpt-oss-120b" model, this project demonstrates how AI can take over the wheel and build unique HTML/CSS web apps on demand.

## ✨ Features

- **AI-Generated Web Apps:**  
  Each time you click "Generate AI Code," the app asks an AI model to create a new, uncommon web app using only plain HTML and inline CSS.
- **Instant Preview:**  
  The generated code is rendered live in the browser, letting you see the AI's creation immediately.
- **Modern Stack:**  
  Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and TypeScript.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/) (optional)

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/l145dev/aitakethewheel.git
   cd aitakethewheel
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   bun install
   ```

3. **Configure your API key:**

   - Create a `.env` file in the project root.
   - Add your Groq API key:
     ```
     VITE_GROQ_API_KEY="your-groq-api-key-here"
     ```

4. **Start the development server:**

   ```sh
   npm run dev
   # or
   bun run dev
   ```

5. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## 🖥️ Usage

- AI will create a web app for you on page load.
- To generate a web app manually, click the **"Generate AI Code"** button in the top-right corner.
- Watch as the AI creates a new, unique web app and displays it instantly.
- Refresh or click the button again for endless inspiration!

## 📦 Dependencies

- [react](https://react.dev/)
- [groq-sdk](https://www.npmjs.com/package/groq-sdk)
- [vite](https://vitejs.dev/)
- [typescript](https://www.typescriptlang.org/)

## 🤖 How It Works

- The app sends a prompt to the Groq API, asking for an uncommon web app in plain HTML with inline CSS.
- The AI responds with code (body contents only), which is injected and rendered in the browser.
- All code is sandboxed in a wrapper `<div>` for safety and layout.

## Contact

- **Author:** Aryan Shah
- **Email:** [aryan.shah@l145.be](mailto:aryan.shah@l145.be)
- **GitHub:** [l145dev](https://github.com/l145dev/)
- **LinkedIn:** [Aryan Shah](https://www.linkedin.com/in/aryan-shah-l145/)
