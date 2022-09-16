import React, { useEffect } from "react";
import UserProfile from "./components/UserProfile";

//needs to be exported to be used outside of file
export const Themecontext = React.createContext("Hi");

function App() {
    return (
        <Themecontext.Provider value="Hi">
            <UserProfile />;
        </Themecontext.Provider>
    );
}

// function App() {
//   const [currentPos, setCurrentPos] = React.useState(0);
//   const [news, setNews] = React.useState(null)
//   const [loading, setLoading] = React.useState(true);
//   const [listItems, setListItems] = React.useState([])

//   useEffect(()=> {
//     //useEffect
//   const newsItems = [
//     {
//       id : 1,
//       title : "news Item 1",
//       desc : "this is news item 1",
//       url : "www.google.com"
//     },
//     {
//       id : 2,
//       title : "news Item 2",
//       desc : "this is news item 2",
//       url : "www.bbc.com"
//     },
//     {
//       id : 3,
//       title : "news Item 3",
//       desc : "this is news item 3",
//       url : "www.facebook.com"
//     },
//     {
//       id : 4,
//       title : "news Item 4",
//       desc : "this is news item 4",
//       url : "www.verge.com"
//     },
//     {
//       id : 5,
//       title : "news Item 5",
//       desc : "this is news item 5",
//       url : "www.usa.com"
//     },
//   ]

//     const item = newsItems[currentPos]

//     setListItems(newsItems)

//     setNews(item)
//     setLoading(false);
//   }, [currentPos])

//   function handleNext(event){
//     event.preventDefault();
//     //update current item num
//     // currentPos < listItems.length - 1 ? setCurrentPos(currentPos + 1) : setCurrentPos(0)
//     currentPos < newsItems.length - 1 ? setCurrentPos(currentPos + 1) : setCurrentPos(0)
//   }
// function handlePrev(event){
//   event.preventDefault();
//   //preventing current pos to be < 0
//   currentPos > 0 ?  setCurrentPos(prev => prev - 1 ) : setCurrentPos(0)
// }

//  return(
//   <section className="main-page">
//       <section className="news">
//      {loading? <div>Loading ...</div> :
//       <div className="item">
//       <h2>{news.title}</h2>
//        <p>{news.desc}</p>
//       <a href={news.url}> {news.url }</a>
//       </div>
//      }
//        </section>
//       <div className="parent-btn">
//       <button className="btn" onClick={handlePrev}>Previous</button>
//       <button className="btn" onClick={handleNext}>Next</button>
//       </div>

//   </section>
//   );
// }

export default App;
