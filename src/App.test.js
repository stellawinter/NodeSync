// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeSync title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeSync/i);
    expect(titleElement).toBeInTheDocument();
});
