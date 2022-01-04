import React, { useState } from "react";
import "./App.css";
import { Movies } from "./Components/Data";
import MovieList from "./Components/MovieList";
import Navibar from "./Components/Navibar";

function App() {
  const [list, setList] = useState(Movies);
  const [recheche, setRecheche] = useState("");
  const [value, setValue] = React.useState(null);

  const handelChange = (e) => {
    setRecheche(e.target.value);
  };
  const handelRating = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <div className="App">
      <Navibar
        recheche={recheche}
        handelChange={handelChange}
        value={value}
        handelRating={handelRating}
      />
      <MovieList
        omar={list.filter((el) =>
            el.title.toUpperCase().includes(recheche.toUpperCase())
            &&
            value===null?el:el.rating === value
        )}
      />
    </div>
  );
}

export default App;
