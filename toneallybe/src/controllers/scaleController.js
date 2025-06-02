const scaleModel = require('../models/scaleModel');

exports.getScale = async (req, res) => {
  try {
    const chords = req.body.chords;
    let scale = await scaleModel.generateScale(chords);
    res.status(200).json(scale);
  } catch (error) {
    console.error('Error fetching scale:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.getInterval = async (req, res) => {
  console.log(req.body);
    try {
      const difficulty  = req.body.difficulty;
      let intervals = await scaleModel.generateIntervals(difficulty);
      res.status(200).json(intervals);
    } catch (error) {
      console.error('Error fetching intervals:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
}