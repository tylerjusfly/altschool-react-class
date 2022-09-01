import React from 'react'

export function useData(type) {
  const [data, setUseData] = React.useState([])

  //useEffect hook
  React.useEffect(() => {

    //players
    const players = [
      {
        id : 1,
        name : "james Lebron",
        position : "PF"
      },
      {
        id : 2,
        name : "steph Curry",
        position : "SG"
      },
      {
        id : 3,
        name : "kyrie Iving",
        position : "PG"
      }
    ]

    //books
    const books = [
      {
        id : 1,
        name : 'Harry Potter'
      },
      {
        id : 2,
        name : 'Lords of the ring'
      }
    ]

    //magic
    if(type == 'players'){
      setUseData(players);
    }
    else if (type == 'books'){
      setUseData(books)
    }
    else{
      setUseData([]);
    }

  }, [type])

  return {data}
}
