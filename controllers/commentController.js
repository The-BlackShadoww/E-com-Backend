const _ = require("lodash");
const Comments = require("../models/comments");

module.exports.postComment = async (req, res) => {
    console.log(req.body);
    try {
        const userId = req.user._id;
        const userComment = _.pick(req.body, ["comment", "product"]);
        userComment["user"] = userId;

        let newComment = new Comments(userComment);
        await newComment.save();
        return res.status(200).send("Comment successfully posted");
    } catch (err) {
        console.log(err);
    }
};

//! For getting comments.
// module.exports.getComment = async (req, res) => {
//     // later try to get find document according to product id

//     try {
//         const comments = await Comments.find();
//         return res.status(200).send(comments);
//     } catch (err) {
//         console.log(err);
//     }
// };
