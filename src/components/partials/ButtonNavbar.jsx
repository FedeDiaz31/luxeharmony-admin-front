import { Link } from "react-router-dom";

function ButtonNavbar({ text, image, link, hover, setHover }) {
  return (
    <Link to={link} onClick={() => setHover(false)}>
      <div className="flex gap-7 text-bgPrimaryColor items-center pl-7 py-5 hover:bg-headerAndFooterColor transition-all duration-150">
        <img src={image} className="w-10" />

        <h3
          className={
            hover
              ? "font-bold opacity-100 transition-all duration-200"
              : "opacity-0 transition-all duration-200"
          }
        >
          {text}
        </h3>
      </div>
    </Link>
  );
}

export default ButtonNavbar;
