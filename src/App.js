
import './App.css';
import React, { useEffect, useState } from "react"
import axios from "axios";
import Card from "./components/Card"


function App() {
  const [cards, setState] = useState([]);
  useEffect(() => {
    async function getTop5() {
      const data = await axios.get(`https://api.parsely.com/v2/analytics/posts?apikey=${process.env.REACT_APP_API_KEY}&secret=${process.env.REACT_APP_SECRET}&sort=fb_interactions&limit=5&page=1&period_start=24h&pub_date_start=7d`)
        .then(function (response) {
          console.log(response);
          setState(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getTop5();
  }, [])
  

  return (
    <div class="listContainer">
      {cards.length > 0 ? cards.map((cardInfo) => {
         // get authorName, link to each article, thumbnail image
        //const { author, link, thumb_url_medium} = authorObj;
        //const postInfo = [author, link, thumb_url_medium];
        
        return <Card data={cardInfo}/>;
      }) : false}
    </div>
  );
}

export default App;
