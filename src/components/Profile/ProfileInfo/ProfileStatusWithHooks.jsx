import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false) // первый элемет записываем в editMode а второй в setEditMode
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
            <div>
                <b>status</b>: <span onClick={activateEditMode}>{props.status || "q q"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={ deactivateEditMode }
                       onChange={onStatusChange}
                       value={status} />
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks

