import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Oops!</h1>
      <p>page not found</p>
      go back <Link to='/appointments'>back</Link>
    </div>
  );
}
