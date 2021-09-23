import React from 'react';
import useDataFromAPI from '../hooks/useDataFromAPI';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


const Counteries = () => {

    let [data, error, isLoading] = useDataFromAPI("https://restcountries.eu/rest/v2/all");

    var result;
    if (isLoading) {
        return (<div class="spinner-border m-5" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>);
    } else if (error) {
        return (<div class="alert alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill" /></svg>
            <div>
                {error}
            </div>
        </div>);
    } else {
        result = data.map((country) =>
            <div key={country.name} style={{ marginBottom: '5em', marginLeft: '2em' }}>
                <h4>{country.name}({country.nativeName})</h4><br />
                <hr style={{ marginTop: '-2em' }} />
                <ul>
                    <li>Region: {country.region}</li>
                    <li>Alphacode: {country.alpha2Code + "/" + country.alpha3Code}</li>
                    <li>Capital: {country.capital}</li>
                </ul>
                <Button>Learn more about {country.name}</Button>
            </div>
        );
        return (<div>{result}</div>);
    }
}
export default Counteries;