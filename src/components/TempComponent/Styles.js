import styled from 'styled-components';

export const TemperatureComponent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
text-align: center;
width: 250px;
height: 430px; 
padding: 15px;
padding-top: 30px;
align-items: center;
border-radius: 15px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 9px 9px 15px rgba(0, 0, 0, 0.6);
overflow: hidden;
border-top: 1px solid rgba(255, 255, 255, 0.5);
border-left: 1px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(7px);
`;

export const CountryCode = styled.sup`
font-size: 0.7em;
padding: 0.2em 0.6em;
border-radius: 30px;
color: white;
background: #ff8c00;
`;

export const WeatherIcon = styled.img`
margin: 0px auto;
width: 110px;
height: 110px;
`;

export const Degrees = styled.div`
margin-top: 20px;
font-size: 3rem;
font-weight: bold;
color: black;
`;