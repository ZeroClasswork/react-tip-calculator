import react, { Component } from "react"

class TipCalculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bill: 100,
            tip: 15, 
            split: 4
        }
    }

    render() {
        return (
            <div>
                <label for="bill">Bill Amount</label>
                <input 
                    name="bill"
                    type="number"
                    value={ this.state.bill }
                    onChange={ (e) => {this.setState({bill: e.target.value})} }
                />
                <label for="tip">Tip Percentage</label>
                <input 
                    name="tip"
                    type="number"
                    value={ this.state.tip }
                    onChange={ (e) => {this.setState({tip: e.target.value})} }
                />
                <label for="split">Split</label>
                <input 
                    name="split"
                    type="number"
                    value={ this.state.split }
                    onChange={ (e) => {this.setState({tip: e.target.split})} }
                />

                <h3>Bill: ${ this.state.bill }</h3>
                <h3>Tip Amount: ${ this.state.bill * this.state.tip / 100 }</h3>
                <h3>Total: ${ this.state.bill * (1 + this.state.tip / 100) }</h3>
                <h3>Per Person: ${ (this.state.bill * (1 + this.state.tip / 100)) / this.state.split }</h3>
            </div>
        )
    }
}

export default TipCalculator