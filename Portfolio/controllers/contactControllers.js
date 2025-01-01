import Contact from "../model/contact.model.js";
export const submitContactForm = async (req, res) => {
  try {
    const { fullName, email, mobile, subject, message } = req.body;

    if (!fullName || !email || !mobile || !subject || !message) {
      return res.status(400).json({ msg: 'Please fill in all fields' });
    }

    const newContact = new Contact({
      fullName,
      email,
      mobile,
      subject,
      message,
    });

    await newContact.save();

    return res.status(200).json({ msg: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: 'Something went wrong, please try again later' });
  }
};
