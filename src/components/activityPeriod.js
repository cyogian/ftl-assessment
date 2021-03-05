import React from "react"
import { List } from "semantic-ui-react"

const ActivityPeriod = props => {
    let { startTime, endTime } = props
    return (
        <List.Item className="ActivityPeriod">
            <List.Content className="ActivityPeriodContent">
                <List.Header style={{ lineHeight: "1.8rem", padding: "0.5rem 0.5rem", display: "flex", flexDirection: "row", alignItems: "flex-start", textAlign: "center", margin: "auto" }}>Active from <span style={{ color: "green", margin: "0 1rem" }}>{startTime}</span>to<span style={{ color: "red", marginLeft: "1rem" }}>{endTime}</span></List.Header>
            </List.Content>
        </List.Item >
    )
}

export default ActivityPeriod