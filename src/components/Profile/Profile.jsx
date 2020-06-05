import React from "react";
import s from './Profile.module.css';
import Myposts from "./MyPosts/Myposts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://png.pngtree.com/thumb_back/fw800/back_our/20190623/ourmid/pngtree-blue-geometric-business-minimalistic-business-card-background-image_237858.jpg"
                    alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <Myposts />
        </div>
    )

};

export default Profile;