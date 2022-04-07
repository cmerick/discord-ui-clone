//UserInfo

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadsetIcon, SettingsIcon } from './styles'



const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>CasErick</strong>
                    <span>#8684</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
};

export default UserInfo;