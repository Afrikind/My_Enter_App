import React from 'react';
import '../styles/halloffame.css';
import axios from 'axios';

class HallOfFame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hallOfFameList: []
    };
  }

  componentDidMount() {
    axios.get('/api/halloffame')
      .then((response) => {
        this.setState({
          hallOfFameList: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="hall-of-fame">
        <h2>Hall of Fame</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.hallOfFameList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HallOfFame;
