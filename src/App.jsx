import {useState} from 'react';
import Header from "./components/Header"
import Form from "./components/Form";
import Table from "./components/Table";
import {calculateInvestmentResults} from "./util/investment.js" 

function App() {



const [dataObj, setDataObj]=useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})
const [calcedData, setCalcedData] = useState(calculateInvestmentResults(dataObj));

function calculateData(theData){
  setCalcedData(calculateInvestmentResults(dataObj))
}


function handleChange(event){
    setDataObj(prevUserInput=>{
        let sourceObj = event.target;
        let newData ={
            ...dataObj,
            [sourceObj.id]: +sourceObj.value
        }

        calculateData(newData);
        return newData;
    })
}



  return (
    <>
    <Header/>
    <Form handleChange={handleChange} dataObj={dataObj}/>
    <Table calcedData={calcedData}/>
    </>
  )
}

export default App
