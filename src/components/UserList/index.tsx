//UserList

import UserRow from '../UserRow';
import {Container, Role} from './styles'



const UserList: React.FC = () => {
    return(
        <Container>
            <Role>Disponível - 1</Role>

            <UserRow nickName="Erick Castilho"/>

            <Role>Offline - 18</Role>

            <UserRow nickName="Igor Pereira"/>
            <UserRow nickName="Kleber Junior"/>
            <UserRow nickName="Renan Santana"/>
            <UserRow nickName="Spotify"  isBot={true}/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
            <UserRow nickName="Fulano"/>
      


        </Container>
    )
};

export default UserList;