import React from 'react';
import TextField from '@material-ui/core/TextField';
import DateTimeRangeContainer from 'react-advanced-datetimerange-picker';
import { FormControl } from 'react-bootstrap';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.sayHello = this.sayHello.bind(this);
    this.state = {
      data: 'Initial data...'
    };
    this.updateState = this.updateState.bind(this);
    let now = new Date();
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
    );
    let end = moment(start)
      .add(1, 'days')
      .subtract(1, 'seconds');
    this.state = {
      start: start,
      end: end
    };
    this.applyCallback = this.applyCallback.bind(this);
  }
  updateState(e) {
    this.setState({ data: e.target.value });
  }
  sayHello() {
    alert('Hello!');
  }
  applyCallback(startDate, endDate) {
    this.setState({
      start: startDate,
      end: endDate
    });
  }
  render() {
    var myStyle = {
      fontSize: 10,
      color: '#FF0000'
    };
    let now = new Date();
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
    );
    let end = moment(start)
      .add(1, 'days')
      .subtract(1, 'seconds');
    let ranges = {
      'Today Only': [moment(start), moment(end)],
      'Yesterday Only': [
        moment(start).subtract(1, 'days'),
        moment(end).subtract(1, 'days')
      ],
      '3 Days': [moment(start).subtract(3, 'days'), moment(end)]
    };
    let local = {
      format: 'DD-MM-YYYY HH:mm',
      sundayFirst: false
    };
    let maxDate = moment(start).add(24, 'hour');
    return (
      <div>
        <div style={myStyle}>
          <Header />
          <Content />
        </div>
        <div>
          <input
            type="text"
            value={this.state.data}
            onChange={this.updateState}
          />
          <h4>{this.state.data}</h4>
        </div>
        <div>
          <button onClick={this.sayHello}>Open Alert</button>
        </div>
        <div>
          <DateTimeRangeContainer
            ranges={ranges}
            start={this.state.start}
            end={this.state.end}
            local={local}
            maxDate={maxDate}
            applyCallback={this.applyCallback}
          >
            <FormControl
              id="formControlsTextB"
              type="text"
              label="Text"
              placeholder="Enter text"
            />
          </DateTimeRangeContainer>
        </div>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
      </div>
    );
  }
}
export default App;
