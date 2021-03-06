import React, { Component } from "react";

import { Icon, Modal, Segment, List, Input, Header } from 'semantic-ui-react'
import ActivityPeriod from '../components/activityPeriod'

import axios from "../utilities/axios"
import moment from "moment-timezone"
class ActivityPeriods extends Component {
    constructor(props) {
        super(props)
        let date = new Date().toISOString().slice(0, 10)
        this.state = {
            activityPeriods: [],
            isLoading: true,
            date: date
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
                    activityPeriods: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    onDateChange = (e) => {
        this.fetchData(e.target.value)
        this.setState({
            date: e.target.value,
            isLoading: true
        })
    }
    onClose = () => {
        let dayIn = new Date()
        let d = dayIn.toISOString().slice(0, 10)
        this.setState({
            date: d,
        })
        this.props.onClose()
    }

    componentDidUpdate(prevProps) {
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
                    startTime={moment(activityPeriod.start_time).tz(this.props.currentMemberTZ).format('MMMM Do YYYY, h:mm a')}
                    endTime={moment(activityPeriod.end_time).tz(this.props.currentMemberTZ).format('MMMM Do YYYY, h:mm a')}

                />
            )
        })
        return apl
    }

    render() {
        const { open, currentMemberID, currentMemberNAME, currentMemberTZ } = this.props
        const { activityPeriods } = this.state
        return (
            <Modal
                closeIcon
                open={open}
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
                    <div style={{ display: "flex", justifyContent: "center" }}><Input type="date" value={this.state.date} onChange={this.onDateChange} /></div>
                    <Segment loading={this.state.isLoading} style={{ margin: "0.5rem auto" }}>
                        {activityPeriods.length ? <List celled>{this.createActivityPeriodList(activityPeriods)}</List> : "No members to display in this list"}
                    </Segment>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ActivityPeriods