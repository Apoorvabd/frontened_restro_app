import React, { useState } from "react";
import { data } from "../pages/restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import userReservationStore from "../store";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggleReservation = userReservationStore(
    (state) => state.toggleReservation
  );
  return (
    <>
      <nav>
        <div className="logo">THAKUR SAHEB</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={false}
                smooth={true}
                duration={5000}
                key={element.id}
              >
                {element.title}
              </Link>
            ))
            }
            <div
              className="reservation-link"
              role="button"
              tabIndex={0}
              onClick={toggleReservation}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleReservation();
              }}
            >
              Reservation
            </div>

          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;