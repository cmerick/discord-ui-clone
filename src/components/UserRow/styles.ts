//ServerName

import styled from 'styled-components';


export const User = styled.div`
display: flex;
margin-top: 5px;
padding: 5px;
display: flex;
align-items: center;

cursor: pointer;
border-radius: 4px;
background: transparent;
transition: background .2s;
&:hover{
  background-color: rgba(255,255,255,0.1);
}

> strong {
  margin-left: 13px;
  font-weight: 500;
  color: var(--white);
  opacity: 0.7;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

> span{
  margin-left: 9px;
  background-color: var(--discord);
  color: var(--white);
  border-radius: 4px;
  padding: 4px 5px;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
}
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: var(--primary);

  &.bot {
    background-color: var(--mention-detail);
  }
`;
