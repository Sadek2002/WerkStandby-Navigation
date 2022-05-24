import { Context } from "./Wrapper";
import React, { useContext } from "react";

function Dropdown() {
  let context = useContext(Context);
  return (
    <div>
      <select
        className="dropdown"
        value={context.locale}
        onChange={context.selectLanguage}
      >
        <option value="nl">Nederlands</option>
        <option value="en">English</option>
        <option value="pl">Polskie</option>
      </select>
    </div>
  );
}

export default Dropdown;
