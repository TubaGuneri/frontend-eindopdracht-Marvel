import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card.jsx";


function Character() {
    const [apiKey,] = useState("2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a");
    const [url, setUrl] = useState(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}`
    );
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url);
            setItem(res.data.data.results);
        };
        fetch();
    }, [url]);

    const searchMarvel = () => {
        setUrl(
            `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=${apiKey}`
        );
    };

    function handleClick() {
        console.log(search);
        searchMarvel();
    }

    return (
        <>
            <div>
                <div className="search-bar">

                    <input
                        type="search"
                        placeholder="Search Here"
                        className="search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button   className="search-button"  onClick={handleClick} >Search</button>
                </div>{" "}
            </div>
            <div className="contentComics">
                {!item ? <p>Not Found</p> : <Card data={item} path="character" />}
            </div>
        </>
    );
}

export default Character;
