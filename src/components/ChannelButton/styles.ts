//ChannelButton

import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color .2s;

  >div{
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  .sideIcons {
    opacity: 0;
}

  &:hover, &.active {
    background-color: var(--senary);
    
    .sideIcons{
       opacity: 1;
    }

    > div span {
      color: var(--white);
    }
  }


 
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
  margin-right: 4px;
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: var(--symbol);
  cursor: pointer;

  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;


