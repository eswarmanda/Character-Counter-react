import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    inputText: '',
    list: [],
  }

  onClickAdd = event => {
    event.preventDefault()
    const {inputText} = this.state
    this.setState(prevState => ({
      list: [...prevState.list, {id: uuidv4(), text: inputText}],
    }))
    this.setState({inputText: ''})
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText, list} = this.state
    console.log(list)

    return (
      <div className="main-card">
        <div className="card1">
          <div className="left-card">
            <div className="left-top-card">
              <h1>count the characters like a Boss...</h1>
            </div>
            {list.length > 0 ? (
              <div className="list-card">
                <ul>
                  {list.map(eachItem => (
                    <li key={eachItem.id} className="list-item">
                      <p>
                        {eachItem.text} : {eachItem.text.length}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <img
                  className="img-height"
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              </div>
            )}
          </div>
          <div className="right-card">
            <h1 className="main-title">Character Counter</h1>
            <form onSubmit={this.onClickAdd}>
              <input
                value={inputText}
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
