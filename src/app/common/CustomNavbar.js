import React from "react";
import korrectLogo from "../../assets/images/logos/korrect-black-logo.svg";
import { Button, Image, Navbar, NavItem } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BaseReactComponent } from "../../utils/form";
import Avatar from "./_utils/Avatar";

const CustomNavbar = (props) => {
  const userPath = props.history ? props.history.location.pathname : "/";
  const userLoggedIn = true;
  const userDetails = null;
  const showAuthModal = false;

  return (
    <BaseReactComponent>
      <Navbar className="custom-nav" fluid={true}>
        <div className="navbar-wrapper">
          {/* LOGO */}

          {/* NAV ITEMS */}
          <div className="left">
            <div className="brand">
              <Link
                to={
                  userPath.includes("/workspace")
                    ? userPath == "/workspace/onboarding"
                      ? "/workspace/onboarding"
                      : "/workspace"
                    : "/"
                }
              >
                <Image className="logo-image" src={korrectLogo} />
              </Link>
            </div>

            {userLoggedIn && (
              <div className="links">
                <Link
                  to={
                    userPath.includes("/workspace")
                      ? userPath == "/workspace/onboarding"
                        ? "/workspace/onboarding"
                        : "/workspace"
                      : "/"
                  }
                  className="nav-link "
                >
                  Feedback
                </Link>
                <Link to="/" className="nav-link">
                  Roadmap
                </Link>
                <Link to="/" className="nav-link">
                  Users
                </Link>
                <Link to="/" className="nav-link">
                  Changelog
                </Link>
                <Link to="/" className="nav-link">
                  Reports
                </Link>
                <Link to="/feedback-stage" className="nav-link active">
                  Feedback Stage
                </Link>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="right">
            {/* <div className="notification">
                <Image src={bell} />
                <span>5</span>
              </div> */}
            {/* {userLoggedIn && !userPath.includes("/workspace") && (
              <Link to={"/workspace"}>Admin Console</Link>
            )} */}
            {userLoggedIn && userDetails ? (
              <div
                className="profile"
                ref={this.dropDownRef}
                onBlur={this.handleClickOutside}
              >
                <div onClick={this.handleClick}>
                  <Avatar profile={userDetails} />
                </div>
                <div
                  class={`dropdown-content ${
                    this.state.showMenu ? "show" : ""
                  }`}
                >
                  <span onClick={() => {}}>
                    <div className="profile-menu-container">
                      <div className="profile-img">
                        <Avatar profile={userDetails} />
                      </div>
                      <div className="profile-name">
                        <p>{userDetails.name}</p>
                        <p>{userDetails.email}</p>
                      </div>
                    </div>
                  </span>
                  <hr />
                  <Link to={"/workspace/settings?selectedSettings=admins"}>
                    Invite Colleagues
                  </Link>
                  <hr />
                  <Link onClick={this.logout} to={"/login"}>
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <Button
                  onClick={() => this.onLoginClicked(true)}
                  className="btn-primary"
                >
                  Login
                </Button>
              </div>
            )}
          </div>
        </div>
      </Navbar>
    </BaseReactComponent>
  );
};

export default CustomNavbar;
