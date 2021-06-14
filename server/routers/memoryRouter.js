import express from "express";
import mongoose from "mongoose";

//Local Imports
import Memory from "../db/memoryModel.js";

const router = express.Router();

//GET ALL MEMORIES
router.get("/", async (req, res) => {
  try {
    const memories = await Memory.find();

    res.status(200);
    res.json(memories);
  } catch (error) {
    res.status(404);
  }
});

//GET SINGLE MEMORY
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "Mmeory id is not valid" });

    const memory = await Memory.findById(id);
    if (!memory) return;

    res.status(200).json(memory);
  } catch (error) {
    res.status(404).json({ message: "Mmeory Not Found" });
  }
});

//CREATE MEMORY
router.post("/", async (req, res) => {
  try {
    const memory = req.body;

    const createdMemory = await Memory.create(memory);

    res.status(201).json(createdMemory);
  } catch (error) {
    res.status(404).json({ message: "Create Memory Failed" });
  }
});

//UPDATE MEMORY
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "Mmeory id is not valid" });

    const { title, content, creator, image } = req.body;

    const updatedMemory = await Memory.findByIdAndUpdate(
      id,
      {
        title,
        content,
        creator,
        image,
        _id: id,
      },
      { new: true }
    );

    res.status(200).json(updatedMemory);
  } catch (error) {
    res.status(404).json({ message: "Update Memory Failed" });
  }
});
//DELETE MEMORY
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "Mmeory id is not valid" });

    await Memory.findByIdAndDelete(id);

    res.status(200).json({ message: "Memory has been deleted" });
  } catch (error) {
    res.status(404).json({ message: "Delete Memory Failed" });
  }
});

export default router;
