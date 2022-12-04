import { useParams } from "react-router-dom";
import { area } from "../../data/area";
import { Link } from "react-router-dom";
export function Area() {
  const { id } = useParams();
  return (
    <>
      <Link to={`/`} className="link nav__link">
        <h2>Home</h2>
      </Link>
      <h1>This is Area {id}</h1>
      {area[id].experiences.map(function (element) {
        return (
          <Link
            key={element.id}
            to={`/profileArtist/${element.id}`}
            className="link nav__link"
          >
            <h2>
              {element.artist} id:{element.id}
            </h2>
          </Link>
        );
      })}
    </>
  );
}
