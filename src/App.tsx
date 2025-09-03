import { Groq } from "groq-sdk";
import { useEffect, useState } from "react";

const App = () => {
  const [aiCode, setAICode] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getAICode = async () => {
    setLoading(true);
    const groq = new Groq({
      apiKey: import.meta.env.VITE_GROQ_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const prompt = `Make an uncommon web app in code. The code must be written in plain html with inline css only. Make sure that your response is only code and NOTHING ELSE. Only give the contents of the body of the HTML, excluding the body tag itself. Always use a div wrapper to ensure 100% in both width and height.`;

    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [{ role: "user", content: prompt }],
    });

    const data = response;
    setAICode(data.choices[0].message.content);
    setLoading(false);
  };

  // Run on mount
  useEffect(() => {
    getAICode();
  }, []);

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <button
          style={{
            fontSize: "1rem",
            padding: "0.5rem 1rem",
            border: "1px solid white",
            borderRadius: "5px",
            backgroundColor: "transparent",
            color: "white",
            cursor: "pointer",
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 9999,
          }}
          onClick={() => {
            getAICode();
          }}
        >
          Generate AI Code
        </button>

        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <h1>Generating a masterpiece...</h1>
          </div>
        ) : (
          <div
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: aiCode || "" }}
          />
        )}
      </div>
    </>
  );
};

export default App;
