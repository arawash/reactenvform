import React, { useState } from 'react'
class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit = (event)=>{
		event.preventDefault();
	console.log(this.state);
	}
	handleChange = (event) => {
		const target = event.target;
		const value = /*target.type === 'checkbox' ? target.checked :*/ target.value;
		const name = target.name;

		this.setState({
			[name]: value
		  });
		}
	// console.log(values);
	// const handleChange = (event) => {
	// 	// oldValues => ({
	// 	// 	...oldValues,
	// 	// })
	// 	// setValues(
	// 	// 	[event.target.name] = event.target.value
	// 	// )
	// }
	render() {
		return (
			< div >
				<form onSubmit={this.handleSubmit}>
					{/* <formGroup> */}
						<input
							id="outlined-name"
							name="name"
							label="الاسم"

							margin="dense"
							variant="outlined"
							onChange={this.handleChange}
						/>
						<input type="text-erea"
							name="desc"
							label="الوصف"
							// multiline
							rows="4"
							defaultValue=""
							id=" new-todo"
							margin="dense"

							// variant="outlined"
							onChange={this.handleChange}
						// onChange={this.handleChange}
						// value={this.state.items.text}
						/>
						<button size="large" variant="contained" color="primary">
							Save
	</button>
					{/* </formGroup> */}
				</form>
				{/* ************************* */}
			</div >
		)
	}
}


	export default Test
