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

/**
 * Delete a single Twat document from DB by id.
 * @param {*} req
 * @param {*} res
 */
export const deleteTwat = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: `ID ${id} is not valid ObjectId.` });
  }

  try {
    const twat = await twatModel.findOneAndDelete({ _id: id });
    if (!twat) return res.status(404).json({ error: `Twat with ID ${id} not found!` });
    res.status(200).json(twat);
  } catch (error) {
    console.log(`🚨 Error deleting twat with ID ${id} from DB:`, error.message);
    return res.status(500).json({ error: error.message.replace(/"/g, "") });
  }
};

/**
 * Update a single Twat document in DB by id.
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateTwat = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: `ID ${id} is not valid ObjectId.` });
  }

  // Validate the body
  let { error } = TwatValidationSchema.validate(body);
  if (error) {
    console.log("🚨 Error validating twat:", error.message);
    return res.status(400).json({ error: error.message.replace(/"/g, "") });
  }

  try {
    const twat = await twatModel.findByIdAndUpdate(id, body, { new: true });
    if (!twat) return res.status(404).json({ error: `Twat with ID ${id} not found!` });
    res.status(200).json(twat);
  } catch (error) {
    console.log(`🚨 Error updating twat with ID ${id} from DB:`, error.message);
    return res.status(500).json({ error: error.message.replace(/"/g, "") });
  }
};

/**
 * Handle CORS
 * Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#examples_of_access_control_scenarios
 * @param {*} req
 * @param {*} res
 */
export const options = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PATCH, DELETE");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "86400");

  res.status(204).end();
};
