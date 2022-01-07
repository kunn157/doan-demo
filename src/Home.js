import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import "./Home.css"

import { Image } from 'react-konva';
// import useImage from 'use-image';
// const url = 'https://konvajs.github.io/assets/yoda.jpg';
//<h1 style={{ fontSize: "45px" }}>⚽🎵👢🎐🎵🎗  🌜⚽🎵🎏🎗🌱🎗🎵🌜🎗 ⊙♫↳♗♫€ ☾⊙♫Ϝ€☈€♫☾€</h1>
class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}
	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="container2" >
					<div style={{ fontSize: "14px", width: "10%", textAlign: "center", margin:"auto" }}>
						<svg viewBox=" 0 0 200 100" xmlns="http://www.w3.org/2000/svg">
							<path fill="none" stroke="white"
								d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"  />
							<circle r="5" fill="yellow">
								<animateMotion dur="10s" repeatCount="indefinite"
									path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
							</circle>
						</svg>
					</div>

					<div>
						<h1 style={{ fontSize: "45px" , color:"white" }}>💻 𝙾𝙽𝙻𝙸𝙽𝙴 𝙲𝙾𝙽𝙵𝙴𝚁𝙴𝙽𝙲𝙴 💻</h1>
						
					</div>
					<div className="Input1">
						<Input id="IP1" placeholder="Enter Link or Creat room" style={{ fontSize: "15px" , color:"white" }} onChange={e => this.handleChange(e)} />
						<Button id="Btn1"  onClick={this.join}>☎ </Button>
					</div>
					<div className="Input" style={{padding: "20px", textAlign: "center", fontSize: "40px", }}>
					</div>
					 
				</div>
		)
	}
}

export default Home;