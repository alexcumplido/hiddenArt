import { useParams } from "react-router-dom";

export function ProfileArtist() {
  const { id } = useParams();
  return <h1>This is the profile of Artist {id}</h1>;
}
