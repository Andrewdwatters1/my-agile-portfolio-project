import React, {Component} from 'react';
import '../.././CSS/main.css';

class Display extends Component {
  constructor() {
    super()

    this.state = {
      somestate: "someval"
    }
  }

  render() {
    return (
      <div>
        {/* for each time input "add to Display" button is clicked
        add the stock to the Display */}
        Display
      </div>
    )
  }
}

export default Display;