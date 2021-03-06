import React from "react"
import {
    Container,
    Image,
    Menu,
} from 'semantic-ui-react'

import "./header.css"
import logoFull from '../../static/logoFull.png'

const Header = () => (
    <Menu fixed='top' inverted className="Header">
        <Container fluid>
            <Menu.Item as='a' header className=".Header-full-logo" href="/">
                <Image size='small' src={logoFull} />
                <span style={{ height: "100%", alignItems: "flex-end", display: "flex", fontSize: "0.95rem", fontWeight: "lighter", marginLeft: "-3.5rem" }}>Assessment</span>
            </Menu.Item>
            <Menu.Item style={{ flexGrow: "1", justifyContent: "flex-end" }}>
                <h1 className="Heading">Member Activity Viewer</h1>
            </Menu.Item>
        </Container>
    </Menu>
)

export default Header