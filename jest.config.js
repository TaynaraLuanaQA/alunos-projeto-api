module.exports ={
    setupFiles:['./jest.setup.js'],
    reporters:[
        "default",
        [
            "jest-html-reporter",
            {
                pageTitle:"Relatório Simplificado de Execução",
                outputPath: "./reports/test-report.html",
                includeFailureMsg: true,
                includeConsoleLog: true
            }
        ]
    ]
}