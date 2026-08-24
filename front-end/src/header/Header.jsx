import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./header.css";
import { PortfLinks } from "../../constants";


function Header() {
  const [active, setActive] = useState("");
  const handleChange = () => {
    setActive(active == "" ? "active" : "");
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a href="#/" className="logo btn btn-ghost text-2xl">Bouba</a>
        </div>
        <div className="flex-none">
          {active == "" ? (
            <span id="mobile" className="text-white-600" onClick={handleChange}>
              <FaBars />
            </span>
          ) : (
            ""
          )}

          <ul className={`menu menu-horizontal px-1 ${active}`}>
            {active == "active" ? (
              <span
                id="mobile"
                onClick={handleChange}
                className="text-white-600"
              >
                <AiOutlineClose />
              </span>
            ) : (
              ""
            )}
            {PortfLinks.map((link, index) => {
              return (
                <li key={link.id}>
                  <a href={`#${link.id}`} className={link.class}>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
