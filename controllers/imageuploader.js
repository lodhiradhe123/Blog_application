
const imageKit = require('../utils/imagekit');
const User = require('../models/userschema');
async function uploadFile(req, res) {
  try {
   if(req.files){
    const result = await imageKit.upload({
      file: req.files.image.data, // base64 encoded image
      fileName: req.files.image.name // required
    });
    user.image=result.url;
   }
    // console.log("File URL:", result.url);
    // console.log("File ID:", result.fileId);
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    await user.save();

    res.redirect('/profile')
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

module.exports = uploadFile;