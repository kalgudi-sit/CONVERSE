import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
