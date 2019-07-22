import React from 'react';
import confLogo from '../images/logo-ag.png';



class ProfileHeader extends React.Component{

    render(){

        return(

            <div className="container-fluid bg-gray py-2">
                <img className="img-fluid" src={confLogo} alt="Hola" /> 
            </div>

        );

    }

}

export default ProfileHeader;