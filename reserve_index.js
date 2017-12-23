// Code React
import React from 'react';
import {render} from 'react-dom';
import citations from './citations';
import './index.css';

class App extends React.Component {
	state={
		citation: 'coucou',
		auteur  : 'Dieu Merci'
       //citations
	};
	
	componentWillMount(){
		this.genererCitation();
	}
	genererCitation=event=>{
		// on transforme les citations en array
		const keyArray=Object.keys(citations);
		//console.log(keyArray)
		const randomKey = keyArray[Math.floor(Math.random()*keyArray.length)];
		if(this.state.citation===citations[randomKey].citation){
            this.genererCitation();
            return;
		}
		this.setState(citations[randomKey])
	}

	render()
	{
		//console.log('citations')
		return(
			<div>
			   <h1>Bonjour</h1>
			   <p>
			    {this.state.citation}
			    <span> {this.state.auteur} </span>
			    <button
			    onClick={
			    	e=>this.genererCitation(e)
			    }
			    >Une autre citation</button>
			   </p>
			</div>

			)
	}
}

render(
	<App />,
	document.getElementById('root')

	 );