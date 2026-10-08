import { useState } from "react";
import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div>
      <Header />

      <main>
        <h2>Student Practice Tracker</h2>

        {showProfile && (
          <StudentProfile
            name="Anu"
            department="CSE"
            year="3rd Year"
            count={count}
          />
        )}

        <button onClick={() => setCount(count + 1)}>
          Complete Practice
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        <button onClick={() => setShowProfile(!showProfile)}>
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>
      </main>

      <Footer />
    </div>
  );
}

export default App;