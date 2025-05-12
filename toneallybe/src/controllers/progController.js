const progModel = require('../models/progModel');

exports.getProg = async (req, res) => {
  try {
    const key = req.body.key;
    const genre = req.body.genre;

    let prog = await progModel.generateProg(key, genre);
    res.status(200).json(prog);
  } catch (error) {
    console.error('Error fetching prog:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}