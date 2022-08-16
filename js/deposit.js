// step-1 add addEventListener to the deposite button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2 get the depsite amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositfield = document.getElementById('deposit-field')
    const newdepositstring = depositfield.value
    const newdeposit = parseFloat(newdepositstring)


    // step-3: get the current deposite total
    // for non-input(element other then input,textarea)use innertext to get text
    const deposittotalelement = document.getElementById('deposit-total')
    const previousdeposittotalstring = deposittotalelement.innerText
    const previousdeposittotal = parseFloat(previousdeposittotalstring)

    // step-4: add numbers to set the total deposit
    const currentdeposittotal = previousdeposittotal + newdeposit
    deposittotalelement.innerText = currentdeposittotal

    // step-5: get balance current total
    const balancetotalelement = document.getElementById('balance-total')
    const previousbalancetotalstring = balancetotalelement.innerText
    const previousbalancetotal = parseFloat(previousdeposittotalstring)

    // step-6:calculate current total balance
    const currenttotalbalance = previousbalancetotal + newdeposit
    balancetotalelement.innerText = currenttotalbalance

    // step-7: clear the deposit field
    depositfield.value = ''
})