import { Link } from "react-router-dom";
// local-data
import { socialMedia } from "../../../providers/local-data";

export default function Footer() {
  return (
    <footer className="w-full h-[200px] sm:h-[150px] bg-sky-700">
      <nav className="w-[85%] h-full m-auto flex flex-col items-center justify-around sm:justify-between sm:flex-row">
        <div className="flex flex-col space-y-1">
          <div className="flex text-4xl text-slate-900 space-x-8">
            {socialMedia.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="duration-700 hover:text-slate-300 hover:-translate-y-1"
              >
                <Icon />
              </a>
            ))}
          </div>
          <div className="text-xl text-slate-300 flex space-x-9 tracking-[1.5px]">
            <Link to="/privacy-policy" className="duration-500 hover:text-slate-800">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="duration-500 hover:text-slate-800">
              Terms of Use
            </Link>
          </div>
          <p className="text-center sm:text-left">&copy; 2024 MovieX. All rights reserved.</p>
        </div>
        <div>
          <Link to="/" className="text-slate-300 text-4xl font-bold">
            Movie<span className="text-[44px] text-[#383838]">X</span>
          </Link>
        </div>
      </nav>
    </footer>
  );
}
