import './App.css';
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  handleAddItem = () => {
    if (this.state.item === "") {
      return;
    }
    this.setState({
      list: [...this.state.list, this.state.item],
      item: ""
    })
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>To-do List</h1>
        <input type="text" value={this.state.item} onChange={this.handleChange} />
        <button onClick={this.handleAddItem}>Add</button>
        <br/><br/>
        <table>
          <thead>
          <tr>
            <th className="index">No.</th>
            <th>To-do</th>
          </tr>
          </thead>
          <tbody>
          {this.state.list.map((item, index) => (
              <tr>
                <td className="index">{index+1}</td>
                <td>{item}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
