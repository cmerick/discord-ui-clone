//UserRow

import {User, Avatar} from './styles'

export interface Props{
    nickName:string;
    isBot?:boolean
}

const UserRow: React.FC<Props> = ({
    nickName,
    isBot
}) => {
    return(
        <User>
            <Avatar className={isBot ? 'bot': ''}/>

            <strong>{nickName}</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
};

export default UserRow;