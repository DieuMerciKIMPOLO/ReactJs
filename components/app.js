// Code React
import React from 'react';
import Citation from './citation';
import citations from '../citations';
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
			   <Citation details={this.state}/>
			    <button
			    onClick={
			    	e=>this.genererCitation(e)
			    }
			    >Une autre citation</button>
			</div>
			)
	}
}

export default App;