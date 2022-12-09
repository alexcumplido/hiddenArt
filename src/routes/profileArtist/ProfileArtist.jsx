import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { artist } from "../../data/artist";
import { experiences } from "../../data/experiences";
import { Modal } from "./Modal";
import { nft } from "../../data/nft";

export function ProfileArtist() {
  const { id } = useParams();
  const [profileArtist, setprofileArtist] = useState();
  const [artistExperiences, setArtistExperiences] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

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
        <section className="hero">
          <Link to={`/`} className="link hero__link flex-center">
            <h2>Home</h2>
          </Link>
        </section>
        <section className="hero">
          <h1 className="link hero__link flex-center">{profileArtist.name}</h1>
        </section>
        <ul className="flex-center">
          {profileArtist.social.length ? (
            profileArtist.social.map(function (element) {
              return (
                <img key={element} className="social" src={element} alt="" />
              );
            })
          ) : (
            <span>No data</span>
          )}
        </ul>

        <div className="container-standard">
          <p>{profileArtist.description}</p>
          <button
            disabled={false}
            onClick={toggleModal}
            className={"button-modal"}
          >
            Check my Artistic Products
          </button>
        </div>
        <div className="container-standard components-wrapper">
          {artistExperiences.map(function (element) {
            return (
              <article key={element.id} className="card">
                <Link
                  to={`/experience/${element.id}`}
                  className="link nav__link"
                >
                  <img className="card__image" src={element.image} alt="" />
                </Link>
                <div className="card__description">
                  <Link
                    to={`/experience/${element.id}`}
                    className="link nav__link"
                  >
                    <h2>{element.type}</h2>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        {showModal ? (
          <Modal>
            <div className="modal-details">
              <ul className="flex-center nft-wrapper">
                {nft.map(function (element) {
                  return (
                    <img
                      key={element.name}
                      src={element.image}
                      alt={element.description}
                      title={element.description}
                    />
                  );
                })}
              </ul>

              <button
                disabled={false}
                onClick={toggleModal}
                className={"button-close"}
              >
                X
              </button>
            </div>
          </Modal>
        ) : null}
      </>
    )
  );
}
