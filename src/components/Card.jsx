import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Card  ({ data,path }) {
    let navigate = useNavigate();

    return (
        <>
            {data ? (
                // eslint-disable-next-line react/prop-types
                data.map(item => (
                    <div className="card" key={item.id} onClick={() => navigate(`/${path}/${item.id}`)}>
                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                        <div className="title">
                            <h3>{item.name}{item.title}</h3>
                        </div>
                    </div>
                ))
            ) : (
                ''
            )}
        </>
    );
}
export default Card;