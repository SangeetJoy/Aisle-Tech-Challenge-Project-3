import React from 'react';

class Timer extends React.Component {

    state = {
        count: 60
    }
  componentDidMount() {
    this.myInterval = setInterval(() => {
        if(this.state.count === 1) {
            clearInterval(this.myInterval)
        }
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }, 1000);
  }

  componentWillUnmount() {
      clearInterval(this.myInterval)
  }


    render() {
        return (
            `00:${this.state.count}`
        )
    }
}

export default Timer;