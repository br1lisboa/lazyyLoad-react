
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/Router";
import { NotificationProvider } from './context/Notification/notification.context';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
