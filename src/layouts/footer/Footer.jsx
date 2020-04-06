import './Footer.css'; 
import React, {Component} from 'react';

class Footer extends Component{  
 
 render(){

  return (
    <footer>
		<img src="../../assets/img/wa3.png" id="imlogo"/>
		<small>
		Cet exercice de <a href="https://3wa.fr/">3W Academy </a>est mis à disposition <a href="https://3wa.fr/">pour l'usage personnel des étudiants, Pas de Rediffusion - Attribution - Pas d'Utilisation Commerciale - Pas de Modification - International.</a>
        Les autorisations au-delà du champ de cette licence peuvent être obtenues auprès de<a href="https://3wa.fr/inscription-a-la-prochaine-reunion-dinformation-porte-ouverte/"> contact@3wa.fr</a> .Les maquettes ont été réalisées par Justine Muller.
		</small>
	
    </footer>

  );
}

}
export default Footer; 
