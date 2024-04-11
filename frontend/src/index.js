import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { positions, transitions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const options = {
  timeout: 3000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

const queryClient = new QueryClient();

const Root = () => {
  return (

    <BrowserRouter>
      <QueryClientProvider client={queryClient} >
        <Provider store={store}>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </Provider>
      </QueryClientProvider >
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
