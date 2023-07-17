import {  Image, Text, Group } from '@mantine/core';

export const Humidity = ({ humidity }: any) => {
    return ( 
                <Group spacing={6}
                sx={{
                    position: 'relative', top: 25, 
                }}>

         <Group>
            <Image src='/drop.svg' />
        </Group>
        <Group sx={{
            flexDirection: 'column',
            alignItems: 'self-start',
        }}>
            <Text  sx={{    
        position: 'relative', top: 10,  
        color: '#E2E2E2',     
        fontFamily: 'Roboto, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '22px', }} >{humidity}%</Text>
        <Text  sx={{    
        
        position: 'relative', bottom: 15,    
        color: '#E2E2E2',     
        fontFamily: 'Roboto, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px', }} >Humidity</Text>
        </Group>
                </Group>
    )
}