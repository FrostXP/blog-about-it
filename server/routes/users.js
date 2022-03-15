const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const user = await User.findById({ _id: req.params.id });
      user.username = req.body.username;
      user.email = req.body.email;
      user.profilePic = req.body.profilePic;
      console.log(user);

      // const updatedUser = await User.findByIdAndUpdate(
      //   req.params.id,
      //   req.body,
      //   { new: true, runValidators: true }
      // );

      const dbres = await user.save();
      // console.log(dbres);
      res.status(200).json(dbres);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(401)
      .json("Don't try  that again. You can only update your account!");
  }
});

//delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can only delete your account!");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...rest } = user._doc; // do not show password so pull it out and show the rest
    console.log(`user._doc =>  ${user._doc}`); // sends back a [object object] //Duh cuz the backTicks
    // console.log(`rest =>  ${rest}`);
    // console.log(`user =>  ${user}`);
    // console.log(`password =>  ${password}`);

    res.status(200).json(rest);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
