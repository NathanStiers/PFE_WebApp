import React from 'react';

class TestPileTechnoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          msg : ""
        };
      }
    componentDidMount() {
        fetch("/myapp/myresource")
          .then(res => res.text())
          .then((result) => {
            this.setState({
                msg : "Yeeeees : " + result
            });
            },(error) => {
            this.setState({
                msg : "Noooooo : " + error
            });
            }
        )

        var user = {
          "name":"testingFromWebApp",
          "surname":"test",
          "code":"generatedInWebApp"
        }

        fetch("/myapp/user/register", {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });

        



    }
    render() {
        const { msg } = this.state;
        return <div>{msg}</div>;
    }
  }

export default TestPileTechnoComponent;