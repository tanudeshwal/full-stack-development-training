function VariableInJsx(){
    let name ="TANU";
    let address = "panipat";

return(
    <div>
        {/* accesing variables in jsx in curly braces */}
        <h1>My name is= {name}</h1>
        <h1> My address is= {address}</h1>
    </div>
);
}

export {VariableInJsx}
