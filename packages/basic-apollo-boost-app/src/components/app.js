import React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import { Spinner, Error } from "./loading";
import { URL } from "./const";

import "../css/style.css";

const client = new ApolloClient({
  uri: URL
});

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          name
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;
      if (error) return <Error />;

      return data.rates.map(({ currency, rate, name }) => (
        <div key={currency}>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    {name}
                  </div>
                  <h6 className="card-subtitle mb-2 text-muted">{currency}</h6>
                  <p className="card-text"> {rate}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      ));
    }}
  </Query>
);

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <h2>My first Apollo  currency app 🚀</h2>
      <ExchangeRates />
    </div>
  </ApolloProvider>
);

export default App;


