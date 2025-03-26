# Task Manager Application

A modern React application that combines task management with weather information, built using Vite and Redux Toolkit.

## Features

- User Authentication (Login/Logout)
- Todo List Management
  - Add new tasks
  - Delete tasks
  - Toggle task completion
  - Set task priority (Low, Medium, High)
- Persistent Storage
  - Tasks saved in localStorage
  - Session management

## Tech Stack

- React 19
- Redux Toolkit for state management
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:
```
WEATHER_API_KEY=your_api_key
BASE_URL=http://api.weatherapi.com/v1/current.json
```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
├── features/        # Redux slices and features
├── pages/           # Main page components
└── store/           # Redux store configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request