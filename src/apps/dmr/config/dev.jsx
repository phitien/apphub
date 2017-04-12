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
        currentPageNo: 0,
        currentPageSize: 10,
        currentOutputType: 'SCBML',
        currentSourceSystem: 'BTS',
        setCurrentSearchValue: '',
        listOutputTypes: [
            {primaryText: 'BCDF',value: 'BCDF'},
            {primaryText: 'SCBML',value: 'SCBML'},
            {primaryText: 'Logical Model',value: 'Logical Model'},
        ],
        listSourceSystems: [
            {primaryText: 'BTS',value: 'BTS'},
        ],
        dataElementColumns: [
            {name: 'ID',field: 'id',width: '40px',optional: true,},
            {name: 'Name',field: 'name',show: true,},
            {name: 'Asset Class',field: 'assetClass',show: true,optional: true,},
            {name: 'Product',field: 'product',show: true,optional: true,},
            {name: 'Description',field: 'description',show: true,optional: true,},
            // {name: 'Validation Rule',field: 'validationRule',show: false,optional: true,},
            // {name: 'Workflow',field: 'workflow',show: false,optional: true,},
        ],
        inputHeight: '32px',
        inputPaddingTop: '3px',
        inputPaddingBottom: '3px',
        inputPaddingLeft: '24px',
        inputPaddingRight: '24px',
        inputFontSize: '13px',
        inputBackgroundColor: 'rgba(255, 255, 255, 1)',
        inputColor: 'rgba(0, 0, 0, 1)',
        inputHintColor: 'rgba(0, 0, 0, .5)',
    }
}
