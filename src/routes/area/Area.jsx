import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import { Link } from "react-router-dom";
export function Area() {
  const { id } = useParams();
  return (
    <>
      <h1>This is Area {id}</h1>
      {data[id].experiences.map(function (element) {
        return (
          <Link
            key={element.id}
            to={`/experience/${element.id}`}
            className="link nav__link"
          >
            <h2>{element.type}</h2>
          </Link>
        );
      })}
    </>
  );
}
