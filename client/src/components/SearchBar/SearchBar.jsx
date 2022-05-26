import React from "react";
import "./SearchBar.css";
// import Card from "../Card/Card";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function SearchBar() {

  // const [search, setSearch] = useState('')
  // const [cardData, setCardData] = useState([]);
  // const nav = useNavigate();
  // const {title} = useParams();
  
  // useEffect(() => {
  //   readPost(title);
  // }, [title])
  

  // const readPost = async (title) => {
  //   try{
  //     const response = await fetch(`http://localhost:3003/Posts/${title}`);
  //     const json = await response.json();
  //     setCardData(json);
  //     cardData.filter((title) => {return (title ? <Card /> : null)})
  //     nav('/Posts/')
  //   }catch(e){
  //     console.log(e);
  //   }
  // }


  return (
    <div className="searchBar">
      <form action="get">
        <input type="text"  className="textBox"  ></input>
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </form>
    </div>

  );

}