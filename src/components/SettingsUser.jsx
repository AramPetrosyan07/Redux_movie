import { db } from "../firebase";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changeInfo, removeUser } from "store/slices/userSlice";
import "../style/SettingsUser.css";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import EditIcon from "@mui/icons-material/Edit";

const SettingsUser = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const destUserInfo = [user.name, user.date, user.pass];
  const [toggle, setToggle] = useState(NaN);
  const [text, setText] = useState("");

  const LogOut = () => {
    localStorage.removeItem("uid");
    dispatch(removeUser());
  };

  const handleEdo = (id) => {
    setToggle(id);
  };
  const handleChange = (e) => {
    e.preventDefault();
    async function changeInfo(prop) {
      if (prop === "name" || prop === "date") {
        const propObj = {};
        propObj[prop] = text;
        dispatch(changeInfo([`${prop}`, text]));
        await setDoc(doc(db, "users", localStorage.getItem("uid")), {
          ...user,
          ...propObj,
        });
      }
    }

    switch (toggle) {
      case 0:
        changeInfo("name");
        break;
      case 1:
        changeInfo("date");
        break;
      case 2:
        changeInfo("pass");
        break;
    }
    setToggle(NaN);
    setText("");
  };

  const passStar = (count) => {
    let star = "";
    for (let i = 0; i < count; i++) {
      star += "*";
    }
    return star;
  };

  return (
    <div className="set_user_container">
      {destUserInfo.map((el, ind) => (
        <div key={ind} className="set_user_infoDiv">
          {ind === 2 ? (
            <Link className="set_user_infoSpan" to="/forgetpass">
              {passStar(el.length)}
            </Link>
          ) : (
            <span className="set_user_infoSpan">{el}</span>
          )}
          {ind === 2 ? (
            <EditIcon
              className="set_user_infoEdit"
              onClick={() => navigate("/forgetpass")}
            />
          ) : (
            <EditIcon
              className="set_user_infoEdit"
              onClick={() => handleEdo(ind)}
            />
          )}
          {ind === toggle ? (
            <div>
              <form onSubmit={(e) => handleChange(e)}>
                {ind === 1 ? (
                  <>
                    <input
                      className="changeInfoInput"
                      type="date"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <input
                      className="changeInfoInput"
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </>
                )}
                <input
                  type="submit"
                  className="changeInfoButtons"
                  value="save"
                />
                <button
                  className="changeInfoButtons buttorRadius"
                  onClick={() => setToggle(NaN)}
                >
                  cansel
                </button>
              </form>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}

      <div className="logOut_button">
        <button
          onClick={() => {
            LogOut();
            navigate("/login");
          }}
        >
          log out
        </button>
      </div>
    </div>
  );
};

export default SettingsUser;
