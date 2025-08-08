import { useEffect, useRef } from "react";

function App() {
  // Initialization Code
  const bbInstanceRef = useRef(null);
  useEffect(() => {
    let isMounted = true;
    const initBetterbugs = async () => {
      if (typeof window !== "undefined") {
        const { default: Betterbugs } = await import("@betterbugs/web-sdk");
        const instance = new Betterbugs({
          // Replace with your BetterBugs Project API Key
          apiKey: "YOUR-API-KEY-GOES-HERE",

          // UI Customization Examples
          position: { top: "20px", right: "20px" },
          styles: {
            primaryColor: "#e41c38",
            primaryTextColor: "#fff",
            theme: "light",
          },
        });
        if (isMounted) {
          bbInstanceRef.current = instance;
        }
      }
    };

    initBetterbugs();
    return () => {
      isMounted = false;
      bbInstanceRef.current?.destroy?.();
    };
  }, []);

  // Example Component
  return (
    <>
      <h1>BetterBugs Web SDK Widget | React</h1>
    </>
  );
}

export default App;
