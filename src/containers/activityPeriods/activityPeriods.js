import React, { Component } from "react";

import { Icon, Modal, Segment, List, Input, Header, TransitionablePortal, Message } from 'semantic-ui-react'
import ActivityPeriod from "../../components/activityPeriod/activityPeriod"

import axios from "../../utilities/axios"
import moment from "moment-timezone"
class ActivityPeriods extends Component {
    constructor(props) {
        super(props)
        let date = new Date().toISOString().slice(0, 10)
        this.state = {
            activityPeriods: [],
            isLoading: true,
            date: date,
            errorMessage: "",
            showError: false
        }
    }
    fetchData = (date) => {
        // reusable Function to fetch data
        let url = `/members/${this.props.currentMemberID}/activity_periods`

        // querying data by date < activity_periods["start_time"] />
        let dayIn = new Date(date)
        let d = dayIn.toISOString().slice(0, 10)
        let options = {
            params: {
                _sort: "start_time",
                _order: "dsc",
                start_time_like: `${d}`
            }
        }
        axios.get(url, options)
            .then((response) => {
                this.setState({
                    isLoading: false,
                    activityPeriods: response.data,
                    errorMessage: "",
                    showError: false,
                })
            })
            .catch((error) => {
                this.setState({
                    isLoading: false,
                    errorMessage: error.toJSON().message,
                    showError: true
                })
            })
    }
    onDateChange = (e) => {
        // fetching data whenver date is changed
        this.fetchData(e.target.value)
        this.setState({
            date: e.target.value,
            isLoading: true
        })
    }
    onClose = () => {
        // closing the modal & resetting the date
        let dayIn = new Date()
        let d = dayIn.toISOString().slice(0, 10)
        this.setState({
            date: d,
        })
        this.props.onClose()
    }

    handleDismiss = () => {
        this.setState({
            errorMessage: "",
            showError: false
        })
    }

    componentDidUpdate(prevProps) {
        // fetching data on prop change { memberId } i.e. different member is clicked, or modal visibility is toggled
        const { currentMemberID, open } = this.props
        if (prevProps.currentMemberID !== currentMemberID || prevProps.open !== open) {
            this.fetchData(this.state.date)
            this.setState({
                isLoading: true
            })
        }
    }

    createActivityPeriodList = (activityPeriods) => {
        const apl = activityPeriods.map((activityPeriod) => {
            // assuming that member.id will always be unique
            return (
                <ActivityPeriod
                    key={activityPeriod.id}
                    id={activityPeriod.id}
                    // using moment-timezone to convert time to specific timezone
                    // startTime={moment(activityPeriod.start_time).tz(this.props.currentMemberTZ).format('MMMM Do YYYY, h:mm a')}
                    // endTime={moment(activityPeriod.end_time).tz(this.props.currentMemberTZ).format('MMMM Do YYYY, h:mm a')}
                    startTime={moment(activityPeriod.start_time).format('MMMM Do YYYY, h:mm a')}
                    endTime={moment(activityPeriod.end_time).format('MMMM Do YYYY, h:mm a')}
                />
            )
        })
        return apl
    }

    render() {
        const { open, currentMemberID, currentMemberNAME, currentMemberTZ } = this.props
        const { activityPeriods } = this.state
        return (
            <TransitionablePortal open={open} transition={{ animation: "scale", duration: "500" }} >
                <Modal
                    closeIcon
                    open={true}
                    onClose={this.onClose}
                    closeOnDimmerClick={false}
                    closeOnEscape={true}
                >
                    <Modal.Header>
                        <Icon name="clock outline" /> Activity Periods
                    <hr />
                        <Header.Content>
                            <h4 style={{ color: "black", margin: "1rem 0rem 0rem 1.7rem" }}>{currentMemberNAME}</h4>
                            <i className="fas fa-hashtag" style={{ fontSize: "0.9rem", color: "#fcc45c", fontWeight: "bolder", marginLeft: "1.5rem" }}></i>&nbsp;
                        <span style={{ fontSize: "0.85rem", color: "grey" }}>{currentMemberID}&nbsp;&nbsp; {" | "} &nbsp;&nbsp;{currentMemberTZ}</span>
                        </Header.Content>
                    </Modal.Header>
                    <Modal.Content>
                        {this.state.showError
                            ?
                            (<Message negative onDismiss={this.handleDismiss}>
                                <Message.Header>Oops, something went wrong!</Message.Header>
                                <p>{this.state.errorMessage}</p>
                            </Message>)
                            : null
                        }
                        <div style={{ display: "flex", justifyContent: "center" }}><Input type="date" value={this.state.date} onChange={this.onDateChange} /></div>
                        <Segment loading={this.state.isLoading} style={{ margin: "0.5rem auto" }}>
                            {
                                activityPeriods.length
                                    ? <List celled>{this.createActivityPeriodList(activityPeriods)}</List>
                                    : <span
                                        style={
                                            {
                                                padding: "0.4rem",
                                                marginLeft: "1rem",
                                                color: "crimson",
                                                border: "2px solid #CF000F",
                                                borderRadius: "4px"
                                            }
                                        }
                                    >
                                        No activities to display in this list
                            </span>
                            }
                        </Segment>
                    </Modal.Content>
                    <Modal.Actions>
                    </Modal.Actions>
                </Modal>
            </TransitionablePortal>
        )
    }
}

export default ActivityPeriods