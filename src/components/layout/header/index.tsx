//router
import { Link } from "react-router-dom";
//components

export default function Header() {
  return (
    <header className="w-full h-[170px] sm:h-[100px] bg-gradient-to-r from-[rgba(30,30,30,0.9)] to-[rgba(160,160,160,0.9)] sticky top-0 z-[999]">
      <div className="w-[85%] h-full m-auto flex flex-col sm:flex-row items-center justify-around sm:justify-between">
        <div>
          <Link to="/" className="text-slate-300 text-4xl font-bold">
            Movie<span className="text-[44px] text-sky-700">X</span>
          </Link>
        </div>
        <div className="flex space-x-2 flex-col sm:flex-row">
          <div className="py-2 px-3 text-slate-300 tracking-[2px] text-center">
            MY MOVIES:&nbsp;&nbsp;
            <span className="font-bold text-xl">{0}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
