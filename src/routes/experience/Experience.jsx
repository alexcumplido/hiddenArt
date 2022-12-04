import { useParams } from "react-router-dom";
import { experiences } from "../../data/experiences";
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
      <section className="hero">
        <Link to={`/`} className="link hero__link flex-center">
          <h2>Home</h2>
        </Link>
      </section>
      <section className="container-standard ">
        {experience ? (
          <>
            <h1>{experience.type}</h1>
            <p>{experience.description}</p>
            <p>{experience.location}</p>
            <ul>
              <li>{experience.date}</li>
              <li>{experience.locatio}</li>
              <li>{experience.price}</li>
            </ul>
            <Link
              to={`/profileArtist/${experience.artist}`}
              className="link nav__link"
            >
              <h2>Artist {experience.artist}</h2>
            </Link>
            <img className="experience__image" src={experience.image} alt="" />
          </>
        ) : (
          <h1>Not found</h1>
        )}
      </section>
    </>
  );
}
