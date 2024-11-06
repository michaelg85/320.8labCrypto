import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Price () {
  
    const { symbol } = useParams();

    const [coin, setCoin] = useState(null);

    const apiKey='5371F778-AE84-4B7C-8439-4D8E6CEEA718'
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    async function getCoin() {
      try {
        let res = await fetch(url);
        let data = await res.json();

        setCoin(data);

      } catch (error) {
        console.error(err)
      }
    }

    useEffect(() => {
      getCoin();
      
    }, []);

    const loading = () => {
      return <h1>Loading...</h1>;
    };

    const loaded = () => {
      return (
        <div>
          <h1>
            {coin.asset_id_base}/{coin.asset_id_quote}
          </h1>
          <h2>{coin.rate}</h2>
        </div>
      );
    };
  
    return coin && coin.rate ? loaded() : loading();
  }