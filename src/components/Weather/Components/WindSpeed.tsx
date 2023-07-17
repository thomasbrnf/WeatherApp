import {  Image, Text, Group } from '@mantine/core';

export const WindSpeed = ({ windSpeed }: any) => {
    return ( 
        <Group spacing={6}>
             <Group>
                <Image src='/wind.svg' />
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
            fontSize: '22px', }} >{windSpeed} Km/h</Text>
            <Text  sx={{    
            
            position: 'relative', bottom: 15,    
            color: '#E2E2E2',     
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '16px', }} >Wind speed</Text>
            </Group>
                    </Group>
    )
}