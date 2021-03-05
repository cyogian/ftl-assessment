import React, { Component } from "react"
import {
    Container,
    Header,
    List,
    Segment
} from 'semantic-ui-react'

import axios from "../utilities/axios"

import "./main.css"
import Member from "../components/member"
import ActivityPeriods from "./activityPeriods"
class Main extends Component {
    state = {
        isOpen: false,
        members: [],
        currentMemberID: "",
        currentMemberTZ: "",
        isLoading: true
    }

    onOpen = (id, tz) => {
        this.setState({
            isOpen: true,
            currentMemberID: id,
            currentMemberTZ: tz
        })
        console.log("Opened with " + id + " " + tz)
    }

    onClose = () => {
        this.setState({
            isOpen: false,
            currentMemberID: "",
            currentMemberTZ: "",
        })
        console.log("Closed")
    }
    componentDidMount = () => {
        axios.get("/members")
            .then((response) => {
                console.log(response)
                this.setState({
                    isLoading: false,
                    members: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    createMemberList = (members) => {
        const ml = members.map((member) => {
            // assuming that member.id will always be unique
            return (
                <Member
                    key={member.id}
                    id={member.id}
                    real_name={member.real_name}
                    onMemberClick={() => this.onOpen(member.id, member.tz)}
                />
            )
        })
        return ml
    }
    render() {
        let members = this.createMemberList(this.state.members)
        return (
            <Container style={{ marginTop: '4.5rem', marginLeft: "0 !important", marginRight: "0 !important", maxWidth: "none !important" }} className="Main" fluid >
                <h1 className="alternate-heading">Member Activity Viewer</h1>
                <Header as='h2' style={{ textAlign: "center", color: "brown", borderBottom: "3px solid black", padding: "0.5rem 0rem", marginTop: "0", backgroundColor: "rgb(250,250,250)", boxShadow: "0 0 2px 1px black" }}>Member List</Header>
                <Segment loading={this.state.isLoading} style={{ margin: "0.5rem auto", maxWidth: "850px" }}>
                    {members.length ? <List celled>{members}</List> : "No members to display in this list"}
                </Segment>
                <ActivityPeriods open={this.state.isOpen} onClose={this.onClose} />
            </Container >
        )
    }
}

export default Main