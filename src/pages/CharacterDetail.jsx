import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchHero} from "../components/utils.jsx";
import CommentApp from "../components/CommentApp.jsx";

function CharacterDetail() {
    const {id} = useParams();
    const [item, setItem] = useState();

    let name;
    let description;
    let thumbnailPath;
    let thumbnailExtension;
    // let thumbnailUrl;
    let series;

    useEffect(() => {
        fetchHero(id)
            .then((data) => setItem(data))
            .catch((err) => console.error(err));
    }, []);

    if (item) {
        name = item.data.results[0].name;
        description = item.data.results[0].description;
        thumbnailPath = item.data.results[0].thumbnail.path;
        thumbnailExtension = item.data.results[0].thumbnail.extension;
        series = item.data.results[0].series.items;
    }

    return (
        <>
            {!item ? (
                ""
            ) : (
                <div><span><h1>Character Detail</h1></span>
                    <div className="box-content">
                        <div className="right-box">
                            <img src={`${thumbnailPath}.${thumbnailExtension}`} alt=""/>
                        </div>
                        <div className="left-box">
                            <h1>{name}</h1>
                            <h4>{description}</h4>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>Series</h4>
                            <ul>
                                {series
                                    ? series.map((title) => (
                                        <li key={Math.random() * 1000}>{title.name}</li>
                                    ))
                                    : null}
                            </ul>

                        </div>
                    </div>
                    <div className="App">
                        <CommentApp id={id} addComment={true} pageName={CharacterDetail.name} title={name} />
                    </div>
                </div>
            )}
        </>
    );
}

export default CharacterDetail;