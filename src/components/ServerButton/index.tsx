//ServerButton
import { Button } from './styles'

import Logo from '../../assets/discord-icon.png'

export interface Props {
    isHome?: boolean;
    selected?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}
const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >

            {isHome && <img src={Logo} alt="discord" />}
        </Button>
    )
};

export default ServerButton;