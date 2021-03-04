import React from "react"
import {
    Container,
    Image,
    List,
    Segment,
} from 'semantic-ui-react'

import logo from "../logo.png"
import "./footer.css"

const Footer = () => (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '1em 0em', width: "100%" }} className="Footer">
        <Container textAlign='center'>
            <Image centered size='tiny' src={logo} className="Footer-logo" />
            <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                    Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                    Privacy Policy
                </List.Item>
            </List>
        </Container>
    </Segment>
)

export default Footer