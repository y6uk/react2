import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";



const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img
                    src="https://png.pngtree.com/thumb_back/fw800/back_our/20190623/ourmid/pngtree-blue-geometric-business-minimalistic-business-card-background-image_237858.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava+description
            </div>
        </div>
    )
};

export default ProfileInfo;

