import React from "react"
import { List } from "semantic-ui-react"

import "./member.css"
const Member = (props) => {
    return (
        <List.Item onClick={props.onMemberClick} className="Member parent">
            <span className="child"><i className="fas fa-chevron-right"></i></span>
            <List.Content className="MemberContent">
                <List.Header style={{ lineHeight: "1.8rem" }}>{props.real_name}</List.Header>
                <i className="fas fa-hashtag" style={{ fontSize: "0.9rem", color: "#fcc45c", fontWeight: "bolder" }}></i>
                <span style={{ fontSize: "0.85rem", color: "grey" }}> {props.id}</span>
            </List.Content>
        </List.Item>
    )
}

export default Member