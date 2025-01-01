# Disney+ React Frontend Application

## Overview
This is a Disney+ themed frontend application built using React. The application allows users to log in and log out using Auth0 for authentication. It utilizes Redux for state management and React Router for navigation.

## Features
- User authentication with Auth0
- Movie listing with detailed views
- Watchlist functionality
- Responsive design
- Dynamic routing with React Router

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for JavaScript applications.
- **React Router**: A library for routing in React applications.
- **Auth0**: A service for authentication and authorization.
- **Vite**: A build tool that provides a fast development environment.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/disney-plus-react.git
   cd disney-plus-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Auth0:
   - Create an Auth0 account and set up a new application.
   - Add your allowed callback URLs in the Auth0 application settings.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Deployment
The application is deployed on Netlify. You can access it at the following link:
[Disney+ React App](https://disneyreact.netlify.app)

## Usage
- Users can log in using their Auth0 credentials.
- Once logged in, users can view a list of movies, add them to their watchlist, and view details about each movie.
- Users can log out to end their session.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License.

## Acknowledgments
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Router](https://reactrouter.com/)
- [Auth0](https://auth0.com/)
- [Vite](https://vitejs.dev/)