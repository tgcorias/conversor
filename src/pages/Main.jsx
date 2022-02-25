import React, {useState} from 'react';
import CountryList from '../components/CountryList'
import CurrencyInput from '../components/CurrencyInput'
import '../styles/currency.css'
import '../styles/global.css'

const Main = (props) => {   
	const [country, setCountry] = useState({});
    const [inputValue, setInputValue] = useState(0);

    const fromValue = inputValue;
    const toValue = country.value;

    const amount = (fromValue * toValue).toFixed(2);

    return (
            <div className="page-container">

                <h1>Convert</h1>


                <div className="container">
                    <CountryList 
                    country={country}
                    setCountry={setCountry}
                    />

                    <CurrencyInput 
                        value={inputValue}
                        setInputValue={setInputValue}
                    />
                </div>


                <h1>To</h1>


                <div className="container">
                    <CountryList             
                        country={country}
                        setCountry={setCountry}
                    />

                    <CurrencyInput 
                        inputMask={((inputValue === 0) ? "$10.000" : "$" + amount)} 
                        readonly="readonly"
                        setInputValue={setInputValue}
                    />
                </div>

            </div>
        
    );
}

export default Main;
