import {Config} from '../../../core/Config'
export default new Config(
    {env: 'mock'},
    {"app":"asd","appname":"Asd","apptitle":"Asd","appdescription":"ASD application","apppath":"/asd","applogo":"/static/asd/images/logo.jpg","appversion":"0.0.1","port":2000,"livereloadport":35729},
    require('./ui'),
    require('./base'),
    require('./mock')
).all()
