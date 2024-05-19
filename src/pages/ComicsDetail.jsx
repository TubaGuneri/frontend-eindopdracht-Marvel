import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchComics} from "../components/utils.jsx";
import CommentApp from "../components/CommentApp.jsx";

function ComicsDetail() {
    const {id} = useParams();
    const [item, setItem] = useState();
    let title;
    let description;
    let thumbnailPath;
    let thumbnailExtension;
    // let series;
    let creators;
    let characters;


    useEffect(() => {
        fetchComics(id)
            .then((data) => setItem(data))
            .catch((err) => console.error(err));
    }, []);

    if (item) {
        title = item.data.results[0].title;
        description= item.data.results[0].description;
        thumbnailPath = item.data.results[0].thumbnail.path;
        thumbnailExtension = item.data.results[0].thumbnail.extension;
        creators = item.data.results[0].creators.items;
        characters= item.data.results[0].characters.items;

    }
    console.log("comics", item);
    return (
        <>
            {!item ?
                ""
             : (
                <div>
                    <span><h1>Comics Detail</h1></span>
                    <div className="box-content">
                        <div className="right-box">
                            <img src={`${thumbnailPath}.${thumbnailExtension}`} alt=""/>
                        </div>
                        <div className="left-box">
                            <h1>{title}</h1>
                            <h4>{description}</h4>
                        </div>
                    </div>
                        {characters.length > 0
                            ?
                            (<div>
                                    <h4>Characters</h4>
                                    <ul>
                                        {/* eslint-disable-next-line no-unused-vars */}
                                        {characters.map((character) => (
                                            <li key={Math.random() * 1000}>{character.name}</li>

                                        ))
                                        }
                                    </ul>

                            </div>
                            )
                            : null}

                        {creators.length > 0
                            ?
                            (<div>
                                    <h4>Creators</h4>
                                    <ul>
                                        {creators.map((items) => (
                                            <li key={Math.random() * 1000}>{items.name} ({items.role})</li>

                                        ))
                                        }
                                    </ul>

                            </div>
                            )
                            : null}

                    <div className="App">
                        <CommentApp id={id} addComment = {true} pageName={ComicsDetail.name} title={title}/>
                    </div>

                </div>

            )}
        </>
    );
}

export default ComicsDetail;

