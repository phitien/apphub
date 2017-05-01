import React from 'react'
import Application from './Application'
import Header from '../components/navigation/Header'

export default class HeaderApplication extends Application {
    container = 'header'
    children = () => <Header/>
}
