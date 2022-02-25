import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/countryList.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';




const CountryList = ({country, setCountry}) => {
	const [countryName, setCountryName] = useState('Select');
	const [dropdown, setDropdown] = useState(false);
	const [flag, setFlag] = useState('');

	const countries = [
		{
			"id": 1,
			"name": "BRA",
			"currency": "BRL",
			"value": 0.18,
			"flag": "https://flagcdn.com/w20/br.png"
		},
		{
			"id": 2,
			"name": "USA",
			"currency": "USD",
			"value": 1.00,
			"flag": "https://flagcdn.com/w20/us.png"
		},
		{
			"id": 3,
			"name": "EUR",
			"currency": "EUR",
			"value": 1.12,
			"flag": "https://flagcdn.com/w20/eu.png"
		},
		{
			"id": 4,
			"name": "ARG",
			"currency": "ARS",
			"value": 0.0099,
			"flag": "https://flagcdn.com/w20/ar.png"
		},
		{
			"id": 5,
			"name": "GBR",
			"currency": "GBP",
			"value": 1.34,
			"flag": "https://flagcdn.com/w20/gb.png"
		},
		{
			"id": 6,
			"name": "CHN",
			"currency": "CNY",
			"value": 0.16,
			"flag": "https://flagcdn.com/w20/cn.png"
		},
		{
			"id": 7,
			"name": "JPN",
			"currency": "JPY",
			"value": 0.0087,
			"flag": "https://flagcdn.com/w20/jp.png"
		},
		{
			"id": 8,
			"name": "AUS",
			"currency": "AUD",
			"value": 0.72,
			"flag": "https://flagcdn.com/w20/au.png"
		},
		{
			"id": 9,
			"name": "CAN",
			"currency": "CAD",
			"value": 0.79,
			"flag": "https://flagcdn.com/w20/ca.png"
		},
		{
			"id": 10,
			"name": "MEX",
			"currency": "MXN",
			"value": 0.05,
			"flag": "https://flagcdn.com/w20/mx.png"
		},
		{
			"id": 11,
			"name": "CHE",
			"currency": "CHF",
			"value": 1.07,
			"flag": "https://flagcdn.com/w20/ch.png"
		},
		{
			"id": 12,
			"name": "RUS",
			"currency": "RUB",
			"value": 0.013,
			"flag": "https://flagcdn.com/w20/ru.png"
		},
		{
			"id": 13,
			"name": "IND",
			"currency": "INR",
			"value": 0.013,
			"flag": "https://flagcdn.com/w20/in.png"
		},
		{
			"id": 14,
			"name": "THA",
			"currency": "THB",
			"value": 0.003,
			"flag": "https://flagcdn.com/w20/th.png"
		}
	];

	

	const toggleDropdown = () => {
		setDropdown(!dropdown);
	}


    	
	const handleCountryChange = (e, country) => {
		setCountryName(country.name);
		setFlag(country.flag);
		setDropdown(false);
        setCountry(country)
		console.log('country: ', country);
	}

	return (
		<Dropdown isOpen={dropdown} toggle={toggleDropdown} size="lg">
			
				<DropdownToggle caret>
					<img src={flag} alt={countryName.name} />
					{countryName}
				</DropdownToggle>
			
			

			<DropdownMenu className="dropdown-menu">

				<DropdownItem header>Países</DropdownItem>
				{countries.map(country => (
					<DropdownItem 
						key={country.id}
						onClick={(e) => handleCountryChange(e, country)}
					>
						<img src={country.flag} alt={country.name} />
						{country.name}
					</DropdownItem>
				))}

			</DropdownMenu>

				
		</Dropdown>
	);
}


export default CountryList;