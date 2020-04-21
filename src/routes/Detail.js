import React from "react";
import "./Detail.css";
import Header from "../component/Header";

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    
    render() {
        const { location } = this.props;

        if(location.state) {
            return(
                <span>{location.state.title}</span>
            );
        } else {
            return null;
        }
    }
}

export default Detail;