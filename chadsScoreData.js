const annualStrokeRisk = {
    '0': {
        asa: 1.0,
        warfarin: 1.0,
        noTx: 1.9
    },
    '1': {
        asa: 1.5,
        warfarin: 1.4,
        noTx: 2.8
    },
    '2': {
        asa: 2.5,
        warfarin: 2,
        noTx: 4
    },
    '3': {
        asa: 5,
        warfarin: 3,
        noTx: 5.9
    },
    '4': {
        asa: 7,
        warfarin: 4.3,
        noTx: 8.5
    }
}

//export const riskFinder = (annualStrokeRisk, num1, num2) => {
 //   return annualStrokeRisk[num1][num2];
//}

//console.log(annualStrokeRisk['0'][0])
export default annualStrokeRisk