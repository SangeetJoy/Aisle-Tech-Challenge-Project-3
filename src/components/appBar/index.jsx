import React  from 'react';
import "./index.css"
import {Link} from "react-router-dom"

class AppBar extends React.Component {
    render() {
        return (
            <div className="appbar_container">
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div>
              <div className="image1_container"></div>
              <div className="discover_text">Discover</div>
            </div>
            </Link>
            <Link to="/notes" style={{ textDecoration: 'none' }}>
            <div>
              <div className="image2_container"></div>
              <div className="notes_text">Notes</div>
            </div>
            </Link>
            <Link to="/matches">
            <div>
              <div className="image3_container"></div>
              <div className="matches_text">Matches</div>
            </div>
            </Link>
            <Link to="/profile/phone-number">
            <div>
              <div className="image4_container"></div>
              <div className="profile_text">Profile</div>
            </div>
            </Link>
            </div>
        )
    }
}

export default AppBar;