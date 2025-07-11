import React from 'react'
import MainLayouts from '../Layout/MainLayouts'
import Dream from '../Components/Home/Dream'
import Desire from '../Components/Home/Desire';
import TopCompanies from '../Components/Home/TopCompanies';
import PopularIndustries from '../Components/Home/PopularIndustries';


export default function home() {
  return (
    <MainLayouts>
    <Dream/>
    <Desire/>
    <TopCompanies/>
    <PopularIndustries/>
    </MainLayouts>
  );
}
