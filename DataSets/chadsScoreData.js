export const annualStrokeRisk = {
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
    },
    '5': {
        asa: 7,
        warfarin: 4.3,
        noTx: 8.5
    },
    '6': {
        asa: 7,
        warfarin: 4.3,
        noTx: 8.5
    }
}

export let riskFactors = ['CHF','Hypertension', 'Age', 'Diabetes', 'Stroke']

export let anticoagulation = ['Warfarin', 'Apixaban', 'Rivaroxaban', 'Edoxaban']