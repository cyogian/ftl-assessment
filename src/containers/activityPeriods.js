import React, { Component } from "react";

import { Button, Icon, Image, Modal } from 'semantic-ui-react'

class ActivityPeriods extends Component {
    state = {
        activityPeriods: [],
        isLoading: true
    }

    render() {
        const { open, onClose } = this.props
        return (
            <Modal
                loading={this.state.isLoading}
                closeIcon
                open={open}
                onClose={onClose}
                closeOnDimmerClick={false}
                closeOnEscape={true}
            >
                <Modal.Header>Activity Period List</Modal.Header>
                <Modal.Content image>
                    <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />
                    <Modal.Description>
                        <p>
                            This is an example of expanded content that will cause the modal's
                            dimmer to scroll.
                        </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary onClick={onClose}>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ActivityPeriods