import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Pillars from './components/Pillars'
import Scores from './components/Scores'
import Template from './components/Template'
import { useEffect, useState } from 'react'
import AllScoresContext from './contexts/AllScoresContext'
import axios from 'axios'

function App() {

  const [allScores, setAllScores] = useState({});

  const fetchScores = async() => {
    const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=FW1SkB1HkewNM1pXURYzasFIxjiACoj9a6Yx9PdeXctCgZVJ17rWw6QxYLu14Z4-VkmVTj8Txfb_ZeTWRZIOcnMQjdrWMD1Vm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAEFBR0HgEroBG3EwVVV0G-T09q4vtT5ZDb-povGb_9boDqKLBf9tN0Qj2wZVEEK_Quu197fAvp00mUhz3GCOShdg7H02OWP8g&lib=MfBbnKIdD6ukmKAdyS-OY4A16_JWBohlm");
  
      // const data = {
      //   home: [],
      //   spidey_squad: [
      //     { name: "John Smith", score: 150 },
      //     { name: "Alice Johnson", score: 320 },
      //     { name: "Michael Brown", score: 480 },
      //     { name: "Sarah Davis", score: 120 },
      //     { name: "David Wilson", score: 450 },
      //     { name: "Emily Miller", score: 300 },
      //     { name: "Daniel Anderson", score: 380 },
      //     { name: "Emma Thomas", score: 240 },
      //     { name: "Oliver Jackson", score: 410 },
      //     { name: "Sophia White", score: 160 },
      //     { name: "James Harris", score: 270 },
      //     { name: "Grace Martin", score: 350 },
      //     { name: "Henry Lee", score: 230 },
      //     { name: "Amelia Turner", score: 490 },
      //     { name: "Lucas Parker", score: 60 },
      //     { name: "Isabella Lewis", score: 500 },
      //     { name: "Benjamin Clark", score: 130 },
      //     { name: "Mia Walker", score: 360 },
      //     { name: "Elijah Young", score: 220 },
      //     { name: "Charlotte Hall", score: 470 },
      //     { name: "Jack Allen", score: 190 },
      //     { name: "Avery Wright", score: 410 },
      //     { name: "Ethan Scott", score: 300 },
      //     { name: "Harper Green", score: 480 },
      //     { name: "Alexander Adams", score: 210 },
      //     { name: "Lily Baker", score: 150 },
      //     { name: "Mason Nelson", score: 380 },
      //     { name: "Chloe Carter", score: 320 },
      //     { name: "Logan Mitchell", score: 250 },
      //     { name: "Sofia Perez", score: 90 },
      //     { name: "Jackson Roberts", score: 430 },
      //     { name: "Zoe Gonzalez", score: 140 },
      //     { name: "Levi Phillips", score: 200 },
      //     { name: "Layla Evans", score: 490 },
      //     { name: "Sebastian Campbell", score: 350 },
      //     { name: "Ella Stewart", score: 100 },
      //     { name: "Aiden Sanchez", score: 270 },
      //     { name: "Scarlett Morris", score: 310 },
      //     { name: "Matthew Rogers", score: 450 },
      //     { name: "Abigail Reed", score: 180 },
      //     { name: "Samuel Cook", score: 370 },
      //     { name: "Evelyn Diaz", score: 160 },
      //     { name: "Joseph Hughes", score: 430 },
      //     { name: "Victoria Foster", score: 120 },
      //     { name: "Owen Sanders", score: 220 },
      //     { name: "Hannah Russell", score: 330 },
      //     { name: "William Kelly", score: 190 },
      //     { name: "Liam Morgan", score: 500 },
      //     { name: "Aubrey Peterson", score: 260 }
      //   ],
      //   tony_techies: [
      //     { name: "Liam Williams", score: 360 },
      //     { name: "Noah Moore", score: 330 },
      //     { name: "Olivia Taylor", score: 500 },
      //     { name: "Ava Johnson", score: 120 },
      //     { name: "Isabella Harris", score: 410 },
      //     { name: "Mason Clark", score: 270 },
      //     { name: "Sophia Miller", score: 130 },
      //     { name: "Jacob Anderson", score: 320 },
      //     { name: "Mia Thompson", score: 280 },
      //     { name: "Elijah White", score: 200 },
      //     { name: "Charlotte Green", score: 490 },
      //     { name: "Lucas Young", score: 450 },
      //     { name: "Emily Walker", score: 150 },
      //     { name: "James Brown", score: 240 },
      //     { name: "Daniel King", score: 60 },
      //     { name: "Amelia Scott", score: 470 },
      //     { name: "Benjamin Lee", score: 300 },
      //     { name: "Oliver Martin", score: 130 },
      //     { name: "Grace Hall", score: 390 },
      //     { name: "Jack Adams", score: 110 },
      //     { name: "Henry Baker", score: 280 }
      //   ],
      //   cap_crusader: [
      //     { name: "William Turner", score: 220 },
      //     { name: "Sophia Gray", score: 450 },
      //     { name: "Alexander Hill", score: 330 },
      //     { name: "Mia Campbell", score: 270 },
      //     { name: "Charlotte Brooks", score: 410 },
      //     { name: "James Mitchell", score: 180 },
      //     { name: "Lucas Stewart", score: 350 },
      //     { name: "Olivia Howard", score: 480 },
      //     { name: "Isabella Foster", score: 160 },
      //     { name: "Ethan Wright", score: 280 },
      //     { name: "Ava Coleman", score: 400 },
      //     { name: "Mason Evans", score: 300 },
      //     { name: "Emily Moore", score: 210 },
      //     { name: "Lily Perez", score: 500 },
      //     { name: "Daniel Butler", score: 380 },
      //     { name: "Benjamin Rivera", score: 150 },
      //     { name: "Elijah Cooper", score: 340 },
      //     { name: "Mia Bryant", score: 190 },
      //     { name: "Logan Sanders", score: 440 },
      //     { name: "Henry Collins", score: 310 },
      //     { name: "Emma Ward", score: 130 }
      //   ],
      //   odinson_olympians: [
      //     { name: "Jackson Peterson", score: 410 },
      //     { name: "Lucas Edwards", score: 380 },
      //     { name: "Sophia Turner", score: 240 },
      //     { name: "Mason Garcia", score: 490 },
      //     { name: "Liam Gonzalez", score: 300 },
      //     { name: "Amelia Phillips", score: 120 },
      //     { name: "Olivia Howard", score: 280 },
      //     { name: "Isabella Hughes", score: 170 },
      //     { name: "James Alexander", score: 460 },
      //     { name: "Noah Rivera", score: 320 },
      //     { name: "Ava Murphy", score: 200 },
      //     { name: "Mia Kim", score: 330 },
      //     { name: "Henry Richardson", score: 150 },
      //     { name: "Grace Bryant", score: 430 },
      //     { name: "Elijah Price", score: 350 },
      //     { name: "Emma Torres", score: 400 },
      //     { name: "Lucas Cox", score: 260 },
      //     { name: "Sophia Bell", score: 500 },
      //     { name: "Daniel Reed", score: 360 },
      //     { name: "Benjamin Bailey", score: 130 },
      //     { name: "Emily Flores", score: 210 }
      //   ]
      // }
  
      const data = response.data;
  
      setAllScores(data);
    
  }

  useEffect(() => {

    // fetchScores();
     // Set up the interval
     const intervalId = setInterval(fetchScores, 5000); // 5000 ms = 5 seconds

     // Clean up the interval on component unmount
     return () => clearInterval(intervalId);

  }, []);

  return (
    <>
      <AllScoresContext.Provider value={{allScores, setAllScores}}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="/" element={<Template />}>
              <Route path="home" element={<><Pillars /></>} />
              <Route path="team/:team" element={<><Scores /></>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AllScoresContext.Provider>
    </>
  )
}

export default App


/*
  const data = {
    home: [],
    spidey_squad: [
      {name: "Aakarshit Saxen", score: 500}
    ],
    tony_techies: [],
    cap_crusader: [],
    odinson_olmpians: []
  }
*/