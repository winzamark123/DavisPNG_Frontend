import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Callback = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          console.log(`Bearer ${accessToken}`);
          const response = await fetch('https://moonlight.azurewebsites.net/', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setApiData(data);
          } else {
            console.error('Failed to fetch data from the API');
          }
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      }
    };

    fetchData();
  }, [getAccessTokenSilently, isAuthenticated]);

  return (
    <div>
      <h1>API Data:</h1>
      
      {apiData ? (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Callback;
