import { useEffect } from 'react';

declare global {
  interface Window {
    AgentInitializer: {
      init: (config: any) => void;
    };
  }
}

const ChatBot = () => {
  useEffect(() => {
    // Load Jotform script
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.AgentInitializer.init({
        agentRenderURL: "https://agent.jotform.com/0195a7b433dc7795a8b239702a611c9fb16e",
        rootId: "JotformAgent-0195a7b433dc7795a8b239702a611c9fb16e",
        formID: "0195a7b433dc7795a8b239702a611c9fb16e",
        queryParams: ["skipWelcome=1", "maximizable=1"],
        domain: "https://www.jotform.com",
        isDraggable: false,
        background: "linear-gradient(180deg, #6C73A8 0%, #6C73A8 100%)",
        buttonBackgroundColor: "#0066C3",
        buttonIconColor: "#FFFFFF",
        variant: false,
        customizations: {
          "greeting": "Yes",
          "greetingMessage": "Hi! How can I assist you?",
          "openByDefault": "No",
          "pulse": "Yes",
          "position": "left",
          "autoOpenChatIn": "0"
        }
      });
    };

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id="JotformAgent-0195a7b433dc7795a8b239702a611c9fb16e"></div>
  );
};

export default ChatBot; 