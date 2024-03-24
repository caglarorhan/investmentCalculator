import React from "react";

function Form({handleChange, dataObj}){



    return(
    <section id="user-input">
       <div className="input-group">
        <p>
            <label htmlFor="">Initial Investment</label>
            <input type="number" required id="initialInvestment" value={dataObj.initialInvestment} onChange={handleChange}/>
        </p>
        <p>
            <label htmlFor="">Annual Investment</label>
            <input type="number" required id="annualInvestment" value={dataObj.annualInvestment} onChange={handleChange}/>
        </p>
       </div>
       <div className="input-group">
        <p>
            <label htmlFor="">Expected return</label>
            <input type="number" required id="expectedReturn" value={dataObj.expectedReturn} onChange={handleChange}/>
        </p>
        <p>
            <label htmlFor="">Duration</label>
            <input type="number" required id="duration" value={dataObj.duration} onChange={handleChange}/>
        </p>
       </div>
    </section>
    )
}

export default Form;