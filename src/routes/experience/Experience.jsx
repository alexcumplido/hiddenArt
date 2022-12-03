import { useParams } from "react-router-dom";
import { experiences } from "../../data/data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function Experience() {
  const [experience, setExperience] = useState();
  const { id } = useParams();

  useEffect(function () {
    const result = experiences.find(function (element) {
      return Number(element.id) === Number(id);
    });

    setExperience(result);
  }, []);

  return (
    <>
      {experience ? (
        <>
          <h1>{experience.type}</h1>{" "}
          <Link
            to={`/profileArtist/${experience.artist}`}
            className="link nav__link"
          >
            <h2>Experience artist {experience.artist}</h2>
          </Link>
        </>
      ) : (
        <h1>Not found</h1>
      )}
    </>
  );
}
