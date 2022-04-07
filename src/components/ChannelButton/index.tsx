//ChannelButton

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

export interface Props {
    channelName: string;
    selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
    channelName,
    selected
}) => {

    return (
        <Container className={selected ? 'active' : ''}>
            <div>

                <span>
                    <HashtagIcon/>
                    {channelName}
                </span>
            </div>
            <div className='sideIcons'>
                <InviteIcon/>
                <SettingsIcon/>
            </div>


        </Container>
    )
};

export default ChannelButton;