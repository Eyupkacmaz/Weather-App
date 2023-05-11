import React from 'react';
import { WeatherProvider } from '../Context/WeatherContext';
import Header from './Header';
import Footer from './Footer';
import Location from './Location';
import WeatherCard from './WeatherCard';

 export default function Container() {
  return (
    <WeatherProvider>
        <Header />
        <Location />
        <WeatherCard />
        <Footer/>
    </WeatherProvider>
  )
}