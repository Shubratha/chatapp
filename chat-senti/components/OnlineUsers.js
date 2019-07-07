import React, { Component, Fragment } from 'react';

class OnlineUsers extends Component {

	state = { roomUsers: [] }
	render() {
		// const { position = 'left', roomUsers } = this.props;
		// const isRight = position.toLowerCase() === 'right';

		// const align = isRight ? 'text-right' : 'text-left';
		// const justify = isRight ? 'justify-content-end' : 'justify-content-start';

		//    const UserList = roomUsers.map(user => {
		// return (
		// 	<li className="user" key={user.name}>
		// 	  <span className={`presence ${user.presence.state}`} />
		// 	  <span>{user.name}</span>
		// 	</li>
		// 	);
		// });
		return (
			<div>
				{this.props.roomUsers.map((item, index) => {
					return (
						<Fragment key={index}>
							<span> {item} </span>
						</Fragment>
					);
				})
				}
			</div>
		)
	}

}

export default OnlineUsers;