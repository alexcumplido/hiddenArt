import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
      <Link className="link nav__link" to={`/area/${0}`}>
        Zero
      </Link>
      <p></p>
      <Link className="link nav__link" to={`/area/${1}`}>
        One
      </Link>
      <p></p>
      <Link className="link nav__link" to={`/area/${2}`}>
        Two
      </Link>
    </>
  );
}
