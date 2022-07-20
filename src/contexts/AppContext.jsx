import { getUser } from "@/services/auth.service";
import { createContext, useEffect, useState } from "react";
import { StreamChat } from "stream-chat";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const apiKey = process.env.REACT_APP_STREAM_API_KEY || "";
  const client = StreamChat.getInstance(apiKey);

  useEffect(() => {
    const userId = localStorage.getItem("userId") || "";
    const chatToken = localStorage.getItem("chatToken") || "";
    if (userId) {
      getUser(userId)
        .then((res) => {
          const user = res.data.data[0];
          if (Object.keys(user).length > 0) {
            setUser(user);
            client.connectUser(
              {
                id: userId,
                name: user?.email,
                image: user?.avatar,
              },
              chatToken
            );
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <AppContext.Provider value={{ user, client }}>
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider, AppContext };
