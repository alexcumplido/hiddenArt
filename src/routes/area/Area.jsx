import { useParams } from "react-router-dom";
import { area } from "../../data/area";
import { Link } from "react-router-dom";
export function Area() {
  const { id } = useParams();
  return (
    <>
      <section className="hero">
        <Link to={`/`} className="link hero__link flex-center">
          <h2>Home</h2>
        </Link>
      </section>
      <section className="hero">
        <h1 className="link hero__link flex-center">This is Area {id}</h1>
      </section>
      <div className="container-standard components-wrapper">
        {area[id].experiences.map(function (element) {
          return (
            <article key={element.id} className="card">
              <Link
                to={`/profileArtist/${element.id}`}
                className="link nav__link"
              >
                <img className="card__image" src={element.image} alt="" />
              </Link>
              <div className="card__description">
                <Link
                  to={`/profileArtist/${element.id}`}
                  className="link nav__link"
                >
                  <p className="card__name">{element.artist}</p>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
