import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserAuth";
import { Typography } from "../../Global.style";
import { InnerNav, NavbarContainer, NavBox } from "./NavBar.style";
import { useHistory } from "react-router-dom";

function NavBar()
{
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory()

  return (
    <NavbarContainer>
      <InnerNav>
        <NavBox>
          <Link to={'/'}>
            <Typography fontSize={"20px"} color={"#fff"}>
              Home
            </Typography>
          </Link>
          <Link to={'/about'}>

            <Typography fontSize={"20px"} color={"#fff"}>
              AboutUs
            </Typography>
          </Link>
          <Link to={'/login'} onClick={() =>
          {
            localStorage.clear('user');
            setUser({
              email: '',
              authenticated: false


            })
            history.push('/login')
          }} >
            <Typography
              fontSize={"20px"}
              color={"#fff"}
              style={{
                transform: "translate(0, -4px)",
              }}
            >
              {user.email ? "logout" : 'Login'}

            </Typography>
          </Link>
        </NavBox>
      </InnerNav>
    </NavbarContainer>
    // <></>
  );
}

export default NavBar;
