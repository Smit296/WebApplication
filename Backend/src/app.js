const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const app = express();
const cookieParser = require('cookie-parser');

// Connect to database
connectDB();
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
  }));

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(morgan('dev'))

// Routes
app.use('/api/users', require('./Routes/users'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
