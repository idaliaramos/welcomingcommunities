import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name='community'
          active={activeItem === 'community'}
          onClick={this.handleItemClick}
        >
          The Welcoming Community
        </Menu.Item>

        <Menu.Item name='involved' active={activeItem === 'involved'} onClick={this.handleItemClick}>
          Get Involved
        </Menu.Item>

        <Menu.Item
          name='learn'
          active={activeItem === 'learn'}
          onClick={this.handleItemClick}
        >
          Learn More
        </Menu.Item>
      </Menu>
    )
  }
}
