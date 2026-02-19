const express = require('express');
const axios = require('axios');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// @desc    Search movies from OMDb
// @route   GET /api/movies/search?s=Title
// @access  Private
router.get('/search', protect, async (req, res) => {
    const { s } = req.query;

    if (!s) {
        return res.status(400).json({ message: 'Search term is required' });
    }

    try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${s}`);

        if (response.data.Error) {
            return res.status(404).json({ message: response.data.Error });
        }

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
