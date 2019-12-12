import React from "react";
import {Image, Table} from 'react-bootstrap';
import '../../index.css'
import './Livret.css';

let imagesPath = process.env.PUBLIC_URL + "/imagesJeu";

class Livret extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        categories : [],
        images : [],
        items : []
      }
    }
    componentDidMount() {
        fetch("/categories", {
            method: 'GET',
            mode: 'no-cors',
            headers:{
              'Accept':'application/json',
            }
          }).then(result => result.json()).then(result => {
            this.setState({
              categories : result
            });
            },(error) => {
              console.log(error);
            }
        ).then(
            fetch("/images", {
                method: 'GET',
                mode: 'no-cors',
                headers:{
                  'Accept':'application/json',
                }
              }).then(result => result.json()).then(result => {
                result.map(img => {
                  img.image = img.image.replace("/images/","/");
                })
                this.setState({
                  images : result
                });
                },(error) => {
                  console.log(error);
                }
            )
        ).then(
            fetch("/sheet/date/"+this.props.match.params.code+"/"+new Date(),{ // TODO date
                method: 'GET',
                mode: 'no-cors',
                headers:{
                    'Accept':'application/json',
                }
                }).then(result => result.json()).then(result => {
                  let itemList = [];
                  result.map((item) => {
                    this.state.images.map((img) => {
                      if(item.itemId === img.id){
                        this.state.categories.map((cat) => {
                          if(cat.id === img.category){
                            img.category = cat.label;
                          }
                        });
                        item.itemId = img;
                        if(item.loveIt){
                          item.loveIt = imagesPath + '/smiley/happy.jpg'
                          item.colorLoveIt = '#8CC152'
                        }else{
                          item.loveIt = imagesPath + '/smiley/sad.jpg'
                          item.colorLoveIt = '#E9573F'
                        }
                        if(item.needHelp){
                          item.needHelp = imagesPath + '/smiley/sad.jpg'
                          item.colorNeedHelp = '#E9573F'
                        }else{
                          item.needHelp = imagesPath + '/smiley/happy.jpg'
                          item.colorNeedHelp = '#8CC152'
                        }
                        if(item.wannaChange){
                          item.wannaChange = imagesPath + '/smiley/sad.jpg'
                          item.colorWannaChange = '#E9573F'
                        }else{
                          item.wannaChange = imagesPath + '/smiley/happy.jpg'
                          item.colorWannaChange = '#8CC152'
                        }
                        itemList.push(item);
                      }
                    });
                  });
                  this.setState({
                      items : [...itemList]
                  });
                },(error) => {
                    console.log(error);
                }
                )
        )
      }
    render(){
    return <div>
            <div>
            <h1 className='Livret-Titre Dyslexic'>HandicApp</h1>
            <h2 className='Livret-SousTitre Dyslexic'>Livret</h2>
            </div>
            <Table striped bordered hover class='Dyslexic'>
                <thead>
                    <tr>
                        <th class='Dyslexic'>Catégorie</th>
                        <th class='Dyslexic'>Activité</th>
                        <th class='Dyslexic' style={{width:"200px"}}>J'aime / J'aime pas</th>
                        <th class='Dyslexic' style={{width:"200px"}}>J'ai besoin / pas besoin d'aide</th>
                        <th class='Dyslexic' style={{width:"200px"}}>Je suis content / pas content</th>
                        <th class='Dyslexic'>Commentaire</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map((item) => {
                      return <tr>
                        <td class='Dyslexic'>{item.itemId.category}</td>
                        <td><Image width='200' height='auto'  fluid src={imagesPath + item.itemId.image} thumbnail /></td>
                        <td style={{backgroundColor:item.colorLoveIt}}><Image width='50' height='auto'  fluid src={item.loveIt} roundedCircle  /></td>
                        <td style={{backgroundColor:item.colorNeedHelp}}><Image width='50' height='auto'  fluid src={item.needHelp} roundedCircle  /></td>
                        <td style={{backgroundColor:item.colorWannaChange}}><Image width='50' height='auto'  fluid src={item.wannaChange} roundedCircle  /></td>
                        <td class='Dyslexic'>{item.comment}</td>
                      </tr>
                    })}
                </tbody>
            </Table>
        </div>
    }
}

export default Livret;