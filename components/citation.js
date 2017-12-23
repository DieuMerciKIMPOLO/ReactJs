// Code React
import React from 'react';
class Citation extends React.Component {
	render()
	{
		//console.log('citations')
		return(
			<div>
			   <h1>Bonjour</h1>
			   <p>
			    {this.props.details.citation}
			    <span> {this.props.details.auteur} </span>
			    </p>
			</div>
			)
	}
}
export default Citation;