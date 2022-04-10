//ChannelData
import React, {useRef, useEffect} from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, {Mention} from '../ChannelMessage'

const ChannelData: React.FC = () => {
    
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
        
    useEffect(() => {
        const div = messagesRef.current;
        if (div) div.scrollTop = div.scrollHeight;
    }, [messagesRef]); 

    return (
       

        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author='Erick Castilho'
                    date='25/06/2022'
                    content= 'Hoje é Meu aniverssário'
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Spotify'
                    date='25/06/2022'
                    content= 'Tocando => What You Won`t Do For Love - Bobby Caldwell'
                    isBot
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Renan Santana'
                    date='25/06/2022'
                    content= {
                        <>
                        <Mention>@Erick Castilho</Mention>, me carrega no lolzinho ai por favor?
                        </>
                        
                    }
                    hasMention
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
                <ChannelMessage
                    author='Fulano'
                    date='25/06/2022'
                    content= 'Isto é uma mensagem'
                />
            </Messages>
            <InputWrapper>
                <Input type='text' placeholder='Conversar em #chat-livre'/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;