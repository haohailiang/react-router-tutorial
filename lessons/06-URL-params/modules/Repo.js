import React from 'react'

export default React.createClass({
	render() {
		return (
			<div>
				<h2>Repo page</h2>
				<div>{this.props.params.repoName}</div>
			</div>
		)
	}
})
