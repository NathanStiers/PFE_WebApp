import React from "react";
import {Image, Table} from 'react-bootstrap';
import '../../index.css'

let imagesPath = process.env.PUBLIC_URL + '/images';

const Livret = () => {
    let categories = ["Déplacements","Habitation","Loisirs","Nutrition","Relations et communication","Responsabilités","Soins personnels"];
    let categoriesPath = ["/deplacements/","/habitation/","/loisirs/","/nutrition/","/relationscom/","/responsabilites/","/soinspersonnels/"];
    let items = [
    ["bus.jpg","marcher.jpg","traverser.jpg","velo.jpg","voiture.jpg"],
    ["allumerlumiere.jpg","balayer.jpg","machinealaver.jpg","passerdunepiecealautre.jpg","prothese.jpg","rangersonespace.jpg","vaisselledef.jpg"],
    ["casqueetordi.jpg","ecrire.jpg","lire.jpg","television.jpg"],
    ["boiretasse.jpg","dresserlatable.jpg","mangeraurestaurant.jpg","mangeraveclesmains.jpg","prepareramanger.jpg","sandwichdef.jpg","serviraliments.jpg"],
    ["parleradesadultes.jpg","parlerencommunaute.jpg","telephone.jpg"],
    ["acheter.jpg"],
    ["brossercheveux.jpg","chaussures.jpg","dormir.jpg","douche.jpg","habitssales.jpg","lavercheveux.jpg","laverlesmains.jpg"
        ,"prendrevetementgarderobe.jpg","sessuyer.jpg","shabillertirette.jpg","shabiller.jpg","sebrosserlesdents.jpg",
        "selever.jpg","semoucher.jpg","secherlescheveux.jpg","toilettes.jpg","urgence.jpg"]]
    return (
        <div>
            <div>
              <h1 class='Dyslexic'>HandicApp</h1>
              <h2 class='Dyslexic'>Livret</h2>
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
                    <tr>
                        <td class='Dyslexic'>{categories[0]}</td>
                        <td><Image width='200' height='auto'  fluid src={imagesPath + categoriesPath[0] + items[0][2]} thumbnail /></td>
                        <td style={{backgroundColor:"#E9573F"}}><Image width='50' height='auto'  fluid src={imagesPath + '/smiley/sad.jpg'} roundedCircle  /></td>
                        <td style={{backgroundColor:"#8CC152"}}><Image width='50' height='auto'  fluid src={imagesPath + '/smiley/happy.jpg'} roundedCircle  /></td>
                        <td style={{backgroundColor:"#8CC152"}}><Image width='50' height='auto'  fluid src={imagesPath + '/smiley/happy.jpg'} roundedCircle  /></td>
                        <td class='Dyslexic'></td>
                    </tr>
                    <tr>
                        <td class='Dyslexic'>{categories[2]}</td>
                        <td><Image width='200' height='auto' fluid src={imagesPath + categoriesPath[2] + items[2][1]} thumbnail /></td>
                        <td style={{backgroundColor:"#8CC152"}}><Image width='50' height='auto'  fluid src={imagesPath + '/smiley/happy.jpg'} roundedCircle  /></td>
                        <td style={{backgroundColor:"#E9573F"}}><Image width='50' height='auto'  fluid src={imagesPath + '/smiley/sad.jpg'} roundedCircle  /></td>
                        <td style={{backgroundColor:"#E9573F"}}><Image width='50' height='auto'  fluid src={imagesPath + '/smiley/sad.jpg'} roundedCircle  /></td>
                        <td class='Dyslexic'>Il ne sais pas tenir un stylo</td>
                    </tr>
                    <tr>
                        <td class='Dyslexic'>{categories[4]}</td>
                        <td><Image  width='200' height='auto' fluid src={imagesPath + categoriesPath[4] + items[4][2]} thumbnail /></td>
                        <td style={{backgroundColor:"#8CC152"}}><Image width='50' height='auto'  fluid src={imagesPath + '/smiley/happy.jpg'} roundedCircle  /></td>
                        <td style={{backgroundColor:"#E9573F"}}><Image width='50' height='auto'  fluid src={imagesPath + '/smiley/sad.jpg'} roundedCircle  /></td>
                        <td style={{backgroundColor:"#8CC152"}}><Image width='50' height='auto'  fluid src={imagesPath + '/smiley/happy.jpg'} roundedCircle  /></td>
                        <td class='Dyslexic'>Il a du mal avec les ecrans tactiles</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Livret;