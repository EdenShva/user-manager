import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';

dotenv.config();

// משתנה סביבתי לקביעת הפורט (אם לא מוגדר, נשתמש ב־3000)
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌ שגיאה: MONGO_URI לא מוגדר בקובץ .env');
  process.exit(1);
}

// התחברות ל־MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ התחברות למונגו הצליחה');

    // הפעלת השרת רק לאחר התחברות למסד הנתונים
    app.listen(PORT, () => {
      console.log(`🚀 השרת רץ על http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ שגיאה בהתחברות למונגו:', err.message);
    process.exit(1);
  });
