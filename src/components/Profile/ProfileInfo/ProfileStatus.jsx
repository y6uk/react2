import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import React from "react";

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        let a = this.props
        let b = this.props
        console.log("componentDidUpdate")
    }


// 71.если не работает
    render() {
        console.log("render")
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={ this.activateEditMode }>{this.props.status || "q q"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           autoFocus={true}
                           onBlur={ this.deactivateEditMode.bind(this) }
                           value={this.state.status}
                    />
                </div>
                }
            </div>
        )
    }
};

