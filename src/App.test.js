import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    const appConfig = {
        apiEndpointBase: "http://some.server/"
    };
    const { getByText } = render(<App config={appConfig}/>);
    const linkElement = getByText(/Testing Challenge/i);
    expect(linkElement).toBeInTheDocument();
});
