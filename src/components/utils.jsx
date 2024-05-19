let API_URL = `https://gateway.marvel.com:443`;

const fetchHeros = async (name) => {
    let heroUrl = `${API_URL}/v1/public/characters`;


    let apiKey = "2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a";
    let url = `${heroUrl}?ts=1&apikey=${apiKey}&nameStartsWith=${name}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchHero = async (id) => {
    let heroUrl = `${API_URL}/v1/public/characters/${id}`;


    let apiKey = "2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a";
    let url = `${heroUrl}?ts=1&apikey=${apiKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};


const fetchComics = async (id) => {
    let heroUrl = `${API_URL}/v1/public/comics/${id}`;
    let apiKey = "2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a";
    let url = `${heroUrl}?ts=1&apikey=${apiKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};
export {fetchHeros, fetchHero, fetchComics};
