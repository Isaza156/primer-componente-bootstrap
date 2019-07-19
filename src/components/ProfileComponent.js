import React from 'react';
import confLogo from '../images/logo-ag.png';
import './styles/ProfileStyle.css';

class Profile extends React.Component{
    render(){
        return(             
            <div className='Profile'>               
                <div className='Profile__header'>
                    <img className='Profile__logo' src={confLogo} alt= "Logo de la Academia Geek"/>
                </div>
                <div className='Profile__section-name'>
                    <img className='Profile__avatar' src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png" alt= "Avatar del Usuario"/>
                    <h1>Jonathan Steven <br/> Isaza Villegas</h1>
                </div>
                <div className='Profile__section-info'>
                    <h2>Desarrollador Web FrontEnd</h2>
                    <div>@Isaza156</div>
                </div>
                <div className='Profile__footer'>
                    #GeekConf
                </div>
            </div>
        );
    }

}
export default Profile;