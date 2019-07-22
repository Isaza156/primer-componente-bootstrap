import React from "react";

import ProfileHeader from "../containers/ProfileHeader";
import ProfileAvatar from "../containers/ProfileAvatar";
import ProfileInfoUser from "../containers/ProfileInfoUser";
import ProfileFooter from "../containers/ProfileFooter";

class Profile extends React.Component {
  render() {
    return (
      //Contenedor de mi card
      <div className="text-center shadow rounded border border-secondary">
        {/* Encabezado del perfil */}
        {<ProfileHeader />}
        {/* Nombre de usuario y su avatar */}
        {<ProfileAvatar />}
        {/* Informacion profesional del usuario */}
        {<ProfileInfoUser />}
        {/* Etiqueta que hace mencion a la Geek conferencia */}
        {<ProfileFooter />}
      </div>
    );
  }
}

export default Profile;
