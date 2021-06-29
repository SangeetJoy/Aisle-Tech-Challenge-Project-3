import React from 'react';
import "./index.css"
class Discover extends React.Component {
    render() {
        return (
            <div className="discover_container">
                <div className="top_header_container">
                    <div className="main_header_text">Notes</div>
                    <div className="sub_header_text">Personal messages to you</div>
                </div>
                <div className="image_container"></div>
                <div className="top_img_text_container">
                    <div className="top_img_main_text">Meena, 23</div>
                    <div className="top_img_sub_text">Tap to review 50+ notes</div>
                </div>
                <div className="middle_section_container">
                    <div className="middle_text_container">
                        <div className="middle_main_text">Interested In You</div>
                        <div className="middle_sub_text">Premium members can view all their likes at once</div>
                    </div>
                    <button type="button"><p>Upgrade</p></button>
                </div>
                <div className="bottom_image_container">
                    <div className="bottom_img_1_container"><div className="bottom_img_1"></div></div>
                    <div className="bottom_img_1_text">Teena</div>
                    <div className="bottom_img_2_container"><div className="bottom_img_2"></div></div>
                    <div className="bottom_img_2_text">Beena</div>
                </div>
            </div >
        )
    }
}

export default Discover;