import React from "React";

export default class AA extends React.Component{
	constructor(props){
		super();
		let total = 124
		let max = ~~(total / 8) + (total % 8 > 0 ? 1 : 0);
		this.state = {
			total: total,
			limit: 8,
			number: 8,
			index: 0,
			max,
			val: '',
		}
	}
	left(){
		let { index } = this.state;
		index--;
		if(index < 0){
			index = 0;
			return false;
		}
		this.setState({
			index,
		})
	}
	right(){
		let { index, max } = this.state;
		index++;
		if(index > max){
			index = max;
			return false;
		}
		this.setState({
			index,
		})
	}
	jump(){

	}
	change(e){

	}
	createList(start = 0){
		let { number, max } = this.state;
		--number;
		return Array.from({length: number}).map((item,index) =>{
			return index + start;
		})
	}
	renderList(){
		let { max, number, index } = this.state;
		let part = number;
		let start = 0;
		let chazhi = index % number;
		
		if(index !== 0 || chazhi >= (part / 2)){ //from large that 7 / 2
			start = index - ~~part / 2;
			if(start + number > max){
				start = max - number + 2;
			}
		}
		if(start < 0){
			start = 0;
		}
		console.log(`index:${index},chazhi:${chazhi},start:${start},max:${max}`);
		return this.createList(start).map((item, j) => {
			return (
				<li key={j} className={item === index ? "avg" : ""}>{item}</li>
			)
		})
		// let list = []

	}
	render(){
		let lis = this.renderList();
		let { val } = this.state;
		return (
			<div>
			<ul>{lis}</ul>
			<button onClick={this.left.bind(this)}>left</button>
			<button onClick={this.right.bind(this)}>right</button>
			<input type='text' value={val} onChange={this.change} />
			<button onClick={this.jump}>go</button>
			</div>
		)
	}
}