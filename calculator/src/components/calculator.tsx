import React, {useState} from "react";

export const Calculator = () => {
    const [result, setResult] = useState<string>("0");

    function handleOperation(operator: string) {
        if(operator == "=") {
            const evalResult : number = eval(result.replace("x", "*"));
            if(evalResult.toString() == "Infinity") {
                alert("Error: Value is infinite");
                reset();
            } else {
                setResult(evalResult.toString());     
            }
        } else {
            if(('0' <= result[result.length - 1]) && ('9' >= result[result.length - 1])) {
                setResult(result + " " + operator + " ");
            } else {
                const newResult = [...result];
                newResult[newResult.length - 2] = operator;
                setResult(newResult.join(''));
            }
        }
    }

    function handleInput(input: number) {
        if((parseInt(result) != 0) || (result.length > 1)) {
            setResult(result + input);
        } else {
            setResult(input.toString());
        }
    }

    function reset() {
        setResult("0");
    }

    return (
        <div style={{width: "320px"}}>
            <h1 style={{textAlign: "center", fontSize: "30px"}}>Pocket Calculator</h1>
            <br/>
            <button disabled style={{width: "320px", height: "50px", textAlign: "right", color: "white", fontWeight: "bold"}}>{result}</button>
            <div style={{flexWrap: "wrap", width: "340px", display: "flex"}}>
                <div style={{width: "240px"}}>
                    {[9,8,7,6,5,4,3,2,1].map(el => <button style={{width: "80px", height: "50px"}} onClick={() => handleInput(el)}>{el}</button>)}
                    <button style={{width: "160px", height: "50px"}} onClick={() => handleInput(0)}>0</button> 
                    <button style={{width: "80px", height: "50px"}} onClick={() => handleOperation("=")}>=</button> 
                </div>
                <div style={{width: "80px"}}>
                    {["+","-","x","/"].map(el => <button style={{width: "80px", height: "50px"}} onClick={() => handleOperation(el)}>{el}</button>)}
                </div>
            </div>
            <br/>
            <button style={{width: "160px", height: "50px", fontSize: "16px"}} onClick={() => reset()}>Reset</button>
        </div>
    )
}