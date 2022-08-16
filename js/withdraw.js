document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawfield = document.getElementById('width-field')
    const newwithdrawamountstring = withdrawfield.value
    const newwithdrawamoun = parseFloat(newwithdrawamountstring)


    const withdrawtotalelement = document.getElementById('withdraw-total')
    const previouswithdrawtotalstring = withdrawtotalelement.innerText
    const previouswithdrawtotal = parseFloat(previouswithdrawtotalstring)
    console.log(previouswithdrawtotal)

    const currentwithdrawtotal = previouswithdrawtotal + newwithdrawamoun
    withdrawtotalelement.innerText = currentwithdrawtotal

    const balancetotalelement = document.getElementById('balance-total')
    const previousbalancetotalelementstring = balancetotalelement.innerText
    const previousbalancetotal = parseFloat(previousbalancetotalelementstring)


    const newbalancetotal = previousbalancetotal - newwithdrawamoun
    balancetotalelement.innerText = newbalancetotal


    withdrawfield.value = ''
})