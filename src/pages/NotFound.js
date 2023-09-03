import H1 from "../components/H1";
import H3 from "../components/H3";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <>
      <Header
        length={
          localStorage.articlesID
            ? JSON.parse(localStorage.getItem("articlesID")).length
            : 0
        }
      />
      <section className=" flex center notfound-section">
        <article className="notFound-container flex center clmn">
          <H1>404</H1>
          <H3>Not Found</H3>
        </article>
      </section>
    </>
  );
};

export default NotFound;
