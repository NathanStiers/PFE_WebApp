import React from "react";
import {InputGroup, FormControl, Row, Col, Container, ListGroupItem, ListGroup,Button} from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
var createReactClass = require('create-react-class');

class Animateur extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listUser : [],
            pair :'light',
            impair :'dark',
            userClicked : false,
            userCode : null
        };
    }
    componentDidMount(){
    fetch("/user/liste", {
        method: 'GET',
        mode: 'no-cors',
        headers:{
          'Accept':'application/json'
        },
      }).then(result => result.json()).then(result=>{
          this.setState({
              listUser:[...result]
          })
          console.log(this.state.listUser)
        },(error) => {
          console.log(error);
        }
      )
    }
    userClicked = (user) => {
        this.setState({
            userClicked : true,
            userCode : user.code
        })
    }
    render(){
        if(this.state.userClicked === true){
            const code = this.state.userCode
            return <Redirect to={`/livret/${code}`}></Redirect>
        }else{
            return (
                <div>
                    <div>
                      <h1 class='Jeu-Titre Dyslexic'>HandicApp</h1>
                      <h2 class='Jeu-SousTitre Dyslexic'>Animateur</h2>
                    </div>
                    <div className="filter-list">
                        <form>
                            <fieldset className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Search"/>
                            </fieldset>
                        </form>
                    </div>
                    <ListGroup>
                        {this.state.listUser.map((user, index)=>
                            <ListGroupItem variant={index%2?this.state.pair:this.state.impair}>
                                <Container>
                                    <Row>
                                        <Col>
                                           <Button onClick={() => this.userClicked(user)}><p class='Dyslexic'>{user.name}</p></Button> 
                                        </Col>
                                    </Row>
                                </Container>
                            </ListGroupItem>
                        )}
                    </ListGroup>
                    <Container>
        
                    </Container>
                </div>
            );
        }
    }
}

/*var FilteredList = createReactClass({
    filterList: function(event){
      var updatedList = this.state.initialItems;
      updatedList = updatedList.filter(function(item){
        return item.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: updatedList});
    },
    getInitialState: function(){
       return {
         initialItems: listUser,
         items: []
       }
    },
    componentWillMount: function(){
      this.setState({items: this.state.initialItems})
    },
    render: function(){
      return (
        <div className="filter-list">
          <form>
          <fieldset className="form-group">
          <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
          </fieldset>
          </form>
        <List items={this.state.items}/>
        </div>
      );
    }
  });
  
  var List = createReactClass({
    render: function(){
      return (
        <ul className="list-group">
        {
          this.props.items.map(function(item) {
            return <li className="list-group-item" data-category={item} key={item}>{item}</li>
          })
         }
        </ul>
      )  
    }
  });*/

export default Animateur;