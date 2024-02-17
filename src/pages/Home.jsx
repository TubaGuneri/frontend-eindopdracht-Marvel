import { Link } from 'react-router-dom';

function Home() {
  return (
      <>
        <h1>Homepagina</h1>
        <section>
         <h2>Welcome!</h2>
        </section>
        <section>
          <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
          <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen
            account hebt.</p>
        </section>
      </>
  );
}

export default Home;