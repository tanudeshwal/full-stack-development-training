import Headers from "./Header";
import Homepage from "./HomePage";
import Footer from "./Footer";
import Profilepage from "./ProfilePage";
import Friendspage from "./FriendsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="justify-between min-h-screen">
    <BrowserRouter>
      <Headers />

      {/* BrowserRouter component used to define routing.*/}
     
        {/* Routes component used to group route.*/}
        <Routes>
          {/* Route component define path with our page component*/}
          
          <Route path="/Home" element={<Homepage/>} />
          <Route path="/Profile" element={<Profilepage/>} />
          <Route path="/Friends" element={<Friendspage/>} />

        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
