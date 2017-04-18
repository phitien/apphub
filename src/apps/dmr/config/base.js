const primaryColor = 'rgba(52, 142, 40, 1)'
module.exports = exports = {
    api: {
        urls: {
            hierarchy: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/datahierarchy',
            searchDataElements: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/elements',
            dataElement: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/elementInfo',
            productList: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/productList',
            pageInfo: '/static/dmr/api/page.json',
            pageInfoLogged: '/static/dmr/api/page-logged.json',
            login: '/static/dmr/api/login.json',
        }
    },
    ui: {
        currentPageNo: 1,
        currentPageSize: 10,
        currentOutputType: 'SCBML',
        currentSourceSystem: 'FEDS',
        setCurrentSearchValue: '',
        listOutputTypes: [
            {primaryText: 'BCDF',value: 'BCDF'},
            {primaryText: 'SCBML',value: 'SCBML'},
        ],
        listSourceSystems: [
            {primaryText: 'FEDS',value: 'FEDS'},
            {primaryText: 'BTS',value: 'BTS'},
        ],
        dataElementColumns: [
            {name: 'ID',field: 'elementId',width: '40px',optional: true,},
            {name: 'Element Name',field: 'elementName',show: true,},
            {name: 'Asset Class',field: 'assetClass',show: true,},
            {name: 'Element Category',field: 'elementCategory',show: true,},
            {name: 'Description',field: 'elementDesc',show: true,optional: true,},
            {name: 'Xpath',field: 'context',optional: true,},
            {name: 'LifeCycle',field: 'lifeCycle',optional: true,},
        ],
        theme: {
            lineHeight: '32px',
            padding: '24px',
            paddingSmall: '5px',
            paddingTop: '24px',
            paddingRight: '24px',
            paddingBottom: '24px',
            paddingLeft: '24px',
            paddingTopSmall: '5px',
            paddingBottomSmall: '5px',
            paddingRightSmall: '5px',
            paddingLeftSmall: '5px',
            buttonFontSize: '14px',
            buttonBackgroundColor: primaryColor,
            fontSizeBig: '16px',
            fontSize: '14px',
            fontSizeSmall: '13px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: 'rgba(0, 0, 0, .7)',
            inputFontSize: '13px',
            inputColor: 'rgba(0, 0, 0, .8)',
            inputBackgroundColor: 'transparent',
            hintFontSize: '13px',
            hintColor: 'rgba(0, 0, 0, .6)',
            labelFontSize: '14px',
            labelColor: primaryColor,
            floatingLabelFontSize: '14px',
            floatingLabelFontSize: '13px',
            floatingLabelColor: primaryColor,
            floatingLabelFocusFontSize: '13px',
            floatingLabelFocusColor: primaryColor,
            materialTheme: {
                palette: {
                    primary1Color: primaryColor,
                    accent1Color: 'rgba(50, 200, 254, 1)',
                    borderColor: 'rgba(0, 0, 0, .1)'
                }
            }
        }
    }
}
