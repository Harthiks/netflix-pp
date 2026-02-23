const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { sequelize } = require('./config/db');

dotenv.config();

// connectDB(); // Removed Mongoose connection

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
    sequelize.sync().then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }).catch((err) => {
        console.log('Error syncing database:', err);
    });
}

module.exports = app;
