// FacebookMessenger.jsx
import { useEffect } from "react";

export default function FacebookMessenger() {
  useEffect(() => {
    const PAGE_ID = "YOUR_PAGE_ID_HERE"; // <-- put your real page id

    // 1) fb-root
    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }

    // 2) chat box
    let chatbox = document.getElementById("fb-customer-chat");
    if (!chatbox) {
      chatbox = document.createElement("div");
      chatbox.id = "fb-customer-chat";
      chatbox.className = "fb-customerchat";
      document.body.appendChild(chatbox);
    }
    chatbox.setAttribute("page_id", PAGE_ID);
    chatbox.setAttribute("attribution", "biz_inbox");

    // 3) load SDK once
    const loadSDK = () => {
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: "v19.0",
        });
      };

      if (document.getElementById("facebook-jssdk")) return;
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      document.body.appendChild(script);
    };

    loadSDK();
  }, []);

  // nothing to render because we added it to body
  return null;
}
