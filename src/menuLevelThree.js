import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import context from "../src/context";

export default function MenuLevelThree({ content, status }) {
  const {handleFilter} = useContext(context);

  return (
    <div>
      <p className="text-muted">
        <Link onClick={() => handleFilter("")} to={"/"}>
          همه آگهی ها
        </Link>
      </p>

      <div>
        <p className="pr-2 text-muted">
          <Link
            onClick={() =>
                handleFilter(content.title.routeOne)
            }
            to={`/${content.title.routeOne}`}
          >
            {content.title.subMenuOneName}
          </Link>
        </p>

        {status === "END-LEVEL" ? (
          <p className="pr-3 text-muted">
            <Link
              onClick={() =>
                handleFilter(content.title.routeTwo)
              }
              to={`/${content.title.routeTwo}`}
            >
              {content.title.subMenuTwoName}
            </Link>
          </p>
        ) : (
          <p className="active-item pr-3">{content.title.subMenuTwoName}</p>
        )}

        <ul className="submenu-3">
          {content.item.map((data, ind) => (
            <li key={ind}>
              <NavLink
                onClick={() => handleFilter(data.route)}
                activeClassName="border-color active-item"
                to={`/${data.route}`}
              >
                {data.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
