import React, { Component } from "react"
import { Helmet } from "react-helmet"
import {
    Container,
    Header
} from 'semantic-ui-react'

import "./main.css"
class Main extends Component {
    state = {
        open: false,
        members: [],
        currentMemberID: "",
        loading: true
    }

    onOpen = () => {
        this.setState({
            open: true
        })
    }

    onClose = () => {
        this.setState({
            open: false
        })
    }
    render() {
        return (
            <Container style={{ marginTop: '4.5rem', marginLeft: "0 !important", marginRight: "0 !important", maxWidth: "none !important" }} className="Main" fluid >
                <Helmet>
                    <title>Full Throttle Labs Assessment | Member List</title>
                </Helmet>
                <h1 className="alternate-heading">Member Activity Viewer</h1>
                <Header as='h2' style={{ textAlign: "center", color: "brown", borderBottom: "3px solid black", paddingBottom: "0.5rem", marginTop: "0", backgroundColor: "rgb(250,250,250)" }}>Member List</Header>
            </Container >
        )
    }
}

export default Main