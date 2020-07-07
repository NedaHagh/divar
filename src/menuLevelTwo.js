import React, { useContext } from "react";
import { Link } from "react-router-dom";
import context from "../src/context";

export default function MenuLevelTwo({ content }) {
  const {handleFilter} = useContext(context);
  return (
    <div>
      <p className="text-muted">
        <Link onClick={() => handleFilter("")} to={"/"}>
          همه آگهی ها
        </Link>
      </p>

      <div>
        <p className="active-item pr-2">{content.title.name}</p>

        <ul className="submenu-2">
          {content.item.map((data, ind) => (
            <li key={ind}>
              <Link
                onClick={() => handleFilter(data.route)}
                to={`/${data.route}`}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
