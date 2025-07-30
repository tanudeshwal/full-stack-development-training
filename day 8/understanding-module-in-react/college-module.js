let myfees=0;

function payfees(payment){
    console.log(`your fee ${payment} is paid`);
    myfees=payment;
}

function getfee(){
    return myfees;
}

export{ payfees, getfee };