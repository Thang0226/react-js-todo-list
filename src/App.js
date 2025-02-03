import "./App.css";
import { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
      loading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        this.setState({
          list: res.data,
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  handleAddItem = () => {
    if (this.state.item === "") {
      return;
    }
    let newItem = {
      id: this.state.list.length + 1,
      title: this.state.item,
    };
    this.setState({
      list: [...this.state.list, newItem],
      item: "",
    });
  };

  render() {
    const { loading, list } = this.state;
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div style={{ textAlign: "center" }}>
        <h1>To-do List</h1>
        <input
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddItem}>Add</button>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th className="index">ID</th>
              <th>To-do</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr>
                <td className="index">{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
