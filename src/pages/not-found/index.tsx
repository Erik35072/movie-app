import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-300">
      <h1 className="font-bold text-4xl tracking-[5px]">PAGE NOT FOUND</h1>
      <p className="text-2xl p-5">
        Go to &nbsp;
        <Link to="/" className="text-sky-700 italic duration-500 hover:text-sky-400">
          Home page
        </Link>
      </p>
    </div>
  );
}
