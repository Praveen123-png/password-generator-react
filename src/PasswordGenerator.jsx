import { useState } from "react";

function PasswordGenerator(){

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "1234567890";
    const specialChars = "!@#$%^&*()<>?/.,-+_=|";



    let [allowedChars, setAllowedChars] = useState("");
    const [inputValue, setInputValue] = useState(1);
    const [password, setPassword] = useState("Select any of the above checkboxes and the length of the password");


    function inputValueHandler(event){
        setInputValue(event.target.value);
    }

    function generateHandler(){

        let checkboxes = document.querySelectorAll(".checkboxes");
        
        let tempChars = "";
        checkboxes.forEach(function(checkbox){
            if(checkbox.checked){
                if(checkbox.id === "toLowerCase"){
                    tempChars += lowerCase;
                }
                else if(checkbox.id === "toUpperCase"){
                    tempChars += upperCase;
                }
                else if(checkbox.id === "toNumbers"){
                    tempChars += nums;
                }
                else if(checkbox.id === "toSpecialChars"){
                    tempChars += specialChars;
                }
            }
        });
        setAllowedChars(tempChars);


        let tempPassword = "";
        if(tempChars.length === 0){
            tempPassword = "Select at least one checkbox!";
        }
        else{
            for (let i = 0; i < inputValue; i++){
                let character = Math.floor(Math.random() * tempChars.length);
                let tempStorage = tempChars[character];
                tempPassword += tempStorage;
            }
        }
        setPassword(tempPassword);

    }

    return (<>

        <div className="container">

            <input className="inputBox" type="number" min={1} max={20} value={inputValue} onChange={inputValueHandler}/><br />

            <div className="selectionBox">
                <input type="checkbox" id="toLowerCase" className="checkboxes"/>
                <label htmlFor="toLowerCase">Lower Case</label><br />

                <input type="checkbox" id="toUpperCase" className="checkboxes"/>
                <label htmlFor="toUpperCase">Upper Case</label><br />

                <input type="checkbox" id="toNumbers" className="checkboxes"/>
                <label htmlFor="toNumbers">Numbers</label><br />

                <input type="checkbox" id="toSpecialChars" className="checkboxes"/>
                <label htmlFor="toSpecialChars">Special Characters</label><br />
            </div>

            <button onClick={generateHandler}>Generate</button>

            <h3>{password}</h3>

        </div>

    </>)

}

export default PasswordGenerator