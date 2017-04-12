import React from 'react'
import Application from './Application'
import Footer from '../components/navigation/Footer'

export default class FooterApplication extends Application {
    get container() {return 'footer'}
    children = () => <Footer/>
}
