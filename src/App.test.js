import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header with correct title', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent('My Awesome App');
});

test('renders Home component', () => {
  render(<App />);
  const homeElement = screen.getByTestId('home');
  expect(homeElement).toBeInTheDocument();
});

test('renders LiveStreaming component', () => {
  render(<App />);
  const liveStreamingElement = screen.getByTestId('liveStreaming');
  expect(liveStreamingElement).toBeInTheDocument();
});

test('renders HallOfFame component', () => {
  render(<App />);
  const hallOfFameElement = screen.getByTestId('hallOfFame');
  expect(hallOfFameElement).toBeInTheDocument();
});

test('renders Leagues component', () => {
  render(<App />);
  const leaguesElement = screen.getByTestId('leagues');
  expect(leaguesElement).toBeInTheDocument();
});
