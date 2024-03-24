
import {formatter} from "../util/investment.js" 
function Table({calcedData}){
console.log(calcedData);

    return(
        <>
        <table id="result" className="center">
            <thead>
            <tr>
                    <td className="center">Duration</td>
                    <td className="center">Initial Investmenr</td>
                    <td className="center">Annual Investment</td>
                    <td className="center">Expected Return</td>
                </tr>
            </thead>
            <tbody>
                {calcedData.map(theData=>{
                    return <tr key={theData.year}>
                    <td>{theData.year}</td>
                    <td>{formatter.format(theData.interest)}</td>
                    <td>{formatter.format(theData.valueEndOfYear)}</td>
                    <td>{formatter.format(theData.annualInvestment)}</td></tr>   
                })}

            </tbody>
        </table>
        </>
    )
}

export default Table