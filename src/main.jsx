import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function Root() {
  const [loading, setLoading] = useState(true);

  const handleStart = () => {
    setLoading(false);
  };

  return (
    <React.StrictMode>
      {loading ? (
        <div 
          style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: "url('/1.png')", 
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            padding: "clamp(1.5rem, 5vh, 4rem) 1rem clamp(1.5rem, 6vh, 3.5rem)"
          }}
        >
          <div 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.2)", 
              zIndex: 1
            }}
          />

          <h1
            style={{
              fontFamily: "Charm, serif",
              fontSize: "clamp(2.6rem, 5vw, 3.5rem)",
              fontWeight: "900",
              color: "#000000",
              letterSpacing: "0.15em",
              textAlign: "center",
              zIndex: 2,
              textShadow: "0px 2px 12px rgba(255, 255, 255, 0.9)",
              animation: "pulse 2s infinite",
              margin: 0
            }}
          >
            WELCOME PEACE
          </h1>

          <div
            style={{
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              textAlign: "center",
              marginTop: "auto"
            }}
          >
            <p
              style={{
                fontFamily: "Charm, serif",
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                fontWeight: "700",
                color: "#1f2937",
                textShadow: "0px 2px 10px rgba(255, 255, 255, 0.9)",
                margin: 0
              }}
            >
              Are you ready?
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <button
                onClick={handleStart}
                style={{
                  fontFamily: "Charm, serif",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  padding: "0.85rem 1.8rem",
                  borderRadius: "9999px",
                  border: "none",
                  background: "#111827",
                  color: "#fff",
                  boxShadow: "0 12px 30px rgba(17, 24, 39, 0.2)",
                  cursor: "pointer"
                }}
              >
                Yes
              </button>
              <button
                onClick={handleStart}
                style={{
                  fontFamily: "Charm, serif",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  padding: "0.85rem 1.8rem",
                  borderRadius: "9999px",
                  border: "none",
                  background: "#f43f5e",
                  color: "#fff",
                  boxShadow: "0 12px 30px rgba(244, 63, 94, 0.25)",
                  cursor: "pointer"
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);