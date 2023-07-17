import {  Image, Text, Group } from '@mantine/core';

export const WeatherIcon = ({ weatherStatus }: any) => {
    return ( 
        <Group sx={{
            flexDirection: 'column',
            position: 'relative', top: -25, 
        }}>
            <Group>
            <Image src={`/${weatherStatus}.svg`}/>  
            </Group>
            <Group sx={{
                position: 'relative', top: -15, 
            }}>
            <Text
    sx={{ 
        color: '#E2E2E2',     
        fontFamily: 'Roboto, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px', }} 
    >{weatherStatus}</Text>
            </Group>
        </Group>
    )
}