import { render, screen,cleanup } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';
import Profile from './components/Profile'
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';

afterEach(cleanup)

it('should take a snapshot of App', () => {
  const { asFragment } = render(<App />)
  
  expect(asFragment(<App />)).toMatchSnapshot()
 })

 it('should take a snapshot of Navbar', () => {
  const { asFragment } = render(<Navbar />)
  
  expect(asFragment(<Navbar />)).toMatchSnapshot()
 })

 it('should take a snapshot of Profile', () => {
  const { asFragment } = render(<Profile />)
  
  expect(asFragment(<Profile />)).toMatchSnapshot()
 })

test('must contain Login button at start',() => {
  render(<App/>);
  const loginBtn = screen.getByText(/Log In/i);
  expect(loginBtn).toBeInTheDocument();

})

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    
    screen.debug();
  });
});

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(<Navbar/>);

    screen.getByText('Log in')
    screen.debug();
  });
});

describe('Profile', () => {
  test('renders Profile component', () => {
    render(<Profile/>);
    screen.debug();
  });
});
describe('Log in', () => {
  test('renders Log in component', () => {
    render(<LoginButton/>);
    screen.debug()

    
  });
});




