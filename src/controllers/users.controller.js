import User from '../models/user.model.js';

// שליפת כל המשתמשים
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'שגיאה בשליפת משתמשים' });
  }
};

// יצירת משתמש חדש
export const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'שגיאה ביצירת משתמש', details: error.message });
  }
};

// מחיקת משתמש לפי ID
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'משתמש לא נמצא' });
    }
    res.json({ message: 'משתמש נמחק בהצלחה' });
  } catch (error) {
    res.status(500).json({ error: 'שגיאה במחיקת משתמש' });
  }
};
