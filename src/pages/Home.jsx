import {Link} from 'react-router-dom';
import pichomepage from '../assets/marvel-comics.jpg';

function Home() {
    return (
        <>

            <div className='home-container'>
                <article className='home-left'>
                    <h2>Welcome!</h2>
                    <p>
                        Stap binnen in de onbegrensde wereld van Marvel, waar helden en schurken met buitengewone
                        krachten samenkomen in epische verhalen vol avontuur, opoffering en ongekende krachten. Ontdek
                        de grenzeloze mogelijkheden van het Marvel-universum en laat je meevoeren op een reis die je
                        verbeelding te boven gaat!
                    </p>
                    <p>Heb je al een account? Log in via de volgende link: <Link to="/signin">Inloggen</Link>.</p>
                    <p>Wil je een kijkje nemen op mijn webpagina, dan heb je een account nodig. Nog geen account? Registreer je jezelf eerst via de volgende link : <Link to="/signup">Registeren</Link></p>
                    <p>Als je ingelogd bent, kun je je gegevens en je reviews zien op de <Link to="/profile">Profielpagina</Link></p>

                </article>
                <article className='home-right'>
                    <img src={pichomepage} alt='picture-homepage'/>
                </article>
            </div>

        </>
    );
}

export default Home;