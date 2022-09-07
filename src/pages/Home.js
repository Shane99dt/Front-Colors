import H1 from "../components/H1";
import H3 from "../components/H3";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
    <Header length={localStorage.articlesID ? JSON.parse(localStorage.getItem("articlesID")).length : 0}/>
    
    <section className="home-container">
      <article>
        <H1>COLORS.</H1>
        <H3>Drawing, Painting</H3>
      </article>
      <aside className="home-images">
          <div className="bg-1"></div>
          <div className="bg-2"></div>
      </aside>
    </section>
    </>
  );
};

export default Home;
