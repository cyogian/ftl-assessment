import React, { Component } from "react"
import {
    Container,
    Header,
    List,
    Segment,
    Icon,
    Input
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
        currentMemberNAME: "",
        isLoading: true,
        searchTerm: "",
        searchLoading: false
    }

    onHandleSearch = (e) => {
        // a method that runs on every key press inside Search Box & Fetches the member list related to that search
        let value = e.target.value
        let searchLoading = false
        if (value !== "") {
            searchLoading = true
            let url = `/members`
            // query param option for searching everywhere  <url>?q=searchterm
            let options = {
                params: {
                    q: value
                }
            }
            axios.get(url, options)
                .then((response) => {
                    this.setState({
                        searchLoading: false,
                        members: response.data
                    })
                })
        }
        // setting state after get request as javascript doesn't wait for fetch to complete instead make use of Promises
        this.setState({
            searchTerm: value,
            searchLoading: searchLoading
        })
    }

    onOpen = (id, tz, name) => {
        // runs when a member element is clicked, sets current info in state to be further passes to Modal as props
        this.setState({
            isOpen: true,
            currentMemberID: id,
            currentMemberTZ: tz,
            currentMemberNAME: name
        })
    }

    onClose = () => {
        // runs when a close button is hit from Modal
        this.setState({
            isOpen: false,
        })
    }


    componentDidMount = () => {
        // fetches data automatically when the component is first mounted
        axios.get("/members")
            .then((response) => {
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
            // assuming that member.id will always be unique, it is passed as key
            return (
                <Member
                    key={member.id}
                    id={member.id}
                    real_name={member.real_name}
                    onMemberClick={() => this.onOpen(member.id, member.tz, member.real_name)}
                />
            )
        }
        )
        return ml
    }
    render() {
        let members = this.createMemberList(this.state.members)
        let { isOpen, currentMemberID, currentMemberTZ, currentMemberNAME } = this.state
        return (
            <Container
                style={
                    {
                        marginTop: '4.5rem',
                        marginLeft: "0 !important",
                        marginRight: "0 !important",
                        maxWidth: "none !important"
                    }
                }
                className="Main" fluid >
                <h1 className="alternate-heading">Member Activity Viewer</h1>
                <Header
                    as='h2'
                    style={
                        {
                            textAlign: "center",
                            color: "brown",
                            borderBottom: "3px solid black",
                            padding: "0.5rem 0rem",
                            marginTop: "0",
                            backgroundColor: "rgb(250,250,250)",
                            boxShadow: "0 0 2px 1px black"
                        }
                    }>
                    <Icon size="mini" name="list alternate outline" />
                    Members
                </Header>
                <Segment
                    loading={this.state.isLoading}
                    style={
                        {
                            margin: "0.5rem auto",
                            maxWidth: "850px"
                        }
                    }
                >
                    <Input
                        icon="search"
                        loading={this.state.searchLoading}
                        type="text" value={this.state.searchTerm}
                        placeholder="Search Members..."
                        onChange={this.onHandleSearch}
                    />
                    {/* condition for list to load only when length of members array is more than 0 */}
                    {
                        members.length
                            ? <List celled>{members}</List>
                            : <span
                                style={
                                    {
                                        padding: "0.4rem",
                                        marginLeft: "1rem",
                                        color: "crimson",
                                        border: "2px solid #CF000F",
                                        borderRadius: "4px"
                                    }
                                }>
                                "No members to display in this list"
                            </span>}
                </Segment>
                <ActivityPeriods open={isOpen} onClose={this.onClose} currentMemberNAME={currentMemberNAME} currentMemberID={currentMemberID} currentMemberTZ={currentMemberTZ} />
            </Container >
        )
    }
}

export default Main