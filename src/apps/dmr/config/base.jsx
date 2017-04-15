module.exports = exports = {
    api: {
        urls: {
            hierarchy: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/datahierarchy',
            searchDataElements: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/elements',
            dataElement: 'http://uklvauems02a.uk.standardchartered.com:8083/dmr-api/mapper-service/elementinfo',
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
            {primaryText: 'Logical Model',value: 'Logical Model'},
        ],
        listSourceSystems: [
            {primaryText: 'FEDS',value: 'FEDS'},
            {primaryText: 'BTS',value: 'BTS'},
        ],
        dataElementColumns: [
            {name: 'ID',field: 'elementId',width: '40px',optional: true,},
            {name: 'Name',field: 'elementName',show: true,},
            {name: 'Asset Class',field: 'assetClass',show: true,},
            {name: 'Product',field: 'product',show: true,},
            {name: 'Description',field: 'elementDesc',show: true,optional: true,},
            {name: 'Xpath',field: 'xpath',optional: true,},
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
            buttonFontSize: '13px',
            labelFontSize: '14px',
            floatingLabelFontSize: '13px',
            fontSizeBig: '16px',
            fontSize: '14px',
            fontSizeSmall: '12px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: 'rgba(0, 0, 0, .7)',
            hintColor: 'rgba(0, 0, 0, .6)',
            labelColor: 'rgba(0, 0, 0, .9)',
            floatingLabelColor: 'rgba(50, 200, 254, 1)',
            floatingLabelFocusColor: 'rgba(50, 200, 254, 1)',
            materialTheme: {
                palette: {
                    primary1Color: 'rgba(50, 200, 254, 1)',
                    accent1Color: 'rgba(50, 200, 254, 1)',
                    borderColor: 'rgba(0, 0, 0, .1)'
                }
            }
        }
    }
}
