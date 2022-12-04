import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { artist } from "../../data/artist";
import { experiences } from "../../data/experiences";

export function ProfileArtist() {
  const { id } = useParams();
  const [profileArtist, setprofileArtist] = useState();
  const [artistExperiences, setArtistExperiences] = useState([]);

  useEffect(function () {
    const resultArtist = artist.find(function (element) {
      return Number(element.id) === Number(id);
    });
    const resultExperience = experiences.filter(function (element) {
      return Number(element.artist) === Number(id);
    });

    setprofileArtist(resultArtist);
    setArtistExperiences(resultExperience);
  }, []);

  return (
    profileArtist && (
      <>
        <Link to={`/`} className="link nav__link">
          <h2>Home</h2>
        </Link>
        <h1>This is the profile of Artist {profileArtist.id}</h1>
        <h2>{profileArtist.name}</h2>
        <p>{profileArtist.description}</p>
        {artistExperiences.map(function (element) {
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
    )
  );
}
