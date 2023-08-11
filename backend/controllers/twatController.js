import mongoose from "mongoose";
import twatModel from "../models/twatModel.js";
import { TwatValidationSchema } from "../models/validation.js";

/**
 * Get all Twat documents from DB.
 * @param {*} req
 * @param {*} res
 */
export const getAllTwats = async (req, res) => {
  try {
    const allTwats = await twatModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(allTwats);
  } catch (error) {
    console.log("🚨 Error getting all twats from DB:", error.message);
    res.status(500).json({ error: error.message.replace(/"/g, "") });
  }
};

/**
 * Get a single Twat document from DB by id.
 * @param {*} req
 * @param {*} res
 */
export const getTwat = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: `ID ${id} is not valid ObjectId.` });
  }

  try {
    const twat = await twatModel.findById(id);
    if (!twat) return res.status(404).json({ error: `Twat with ID ${id} not found!` });
    res.status(200).json(twat);
  } catch (error) {
    console.log(`🚨 Error getting twat with ID ${id} from DB:`, error.message);
    return res.status(500).json({ error: error.message.replace(/"/g, "") });
  }
};

/**
 * Create new Twat document in DB.
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const createTwat = async (req, res) => {
  const body = req.body;

  // Validate
  let { error } = TwatValidationSchema.validate(body);
  if (error) {
    console.log("🚨 Error validating twat:", error.message);
    return res.status(400).json({ error: error.message.replace(/"/g, "") });
  }

  // Create new DB document
  try {
    const twat = await twatModel.create(body);
    res.status(200).json(twat);
  } catch (error) {
    console.log("🚨 Error saving twat to DB:", error.message);
    res.status(500).json({ error: error.message.replace(/"/g, "") });
  }
};
