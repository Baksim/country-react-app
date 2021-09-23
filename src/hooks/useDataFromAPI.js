import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const useDataFromAPI = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hasGotData, setHasGotData] = useState(false);

    useEffect(() => {
        if (!hasGotData) {
            setHasGotData(true);
            let request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.onloadend = function () {
                setIsLoading(false);
                setHasGotData(true);
                if (this.status === 200) {
                    setData(JSON.parse(this.response));
                } else {
                    setError(<Alert variant="danger">Error</Alert>);
                }
            }
            request.send();
        }
    }, [data, error, isLoading, hasGotData, url]);

    return [data, error, isLoading]
}
export default useDataFromAPI;