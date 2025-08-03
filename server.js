const express = require('express');
const app = express();
const port = 3000;

// نعرض صفحة النبذة
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>نبذة عن Rayza Store - رايزا ستور</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
        body {
          margin: 0;
          font-family: 'Cairo', sans-serif;
          background: #e0f7fa; /* سماوي فاتح */
          color: #01579b; /* أزرق قوي */
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 20px;
        }
        .container {
          background: white;
          max-width: 600px;
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(1,87,155,0.3);
          padding: 40px 30px;
          text-align: center;
        }
        h1 {
          font-size: 2.8rem;
          margin-bottom: 10px;
          color: #0288d1;
          font-weight: 700;
          letter-spacing: 1.2px;
        }
        p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 30px;
          color: #0277bd;
        }
        .buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }
        .btn {
          background: #0288d1;
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(2,136,209,0.4);
          transition: background 0.3s ease, transform 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
        }
        .btn:hover {
          background: #01579b;
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(1,87,155,0.6);
        }
        /* أيقونات بسيطة من SVG */
        .btn svg {
          width: 20px;
          height: 20px;
          fill: white;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Rayza Store - رايزا ستور</h1>
        <p>
          متجرنا يقدم أفضل برامج أدوبي وأوافي بأسعار قوية ومميزة.
          نبيع أيضاً تصاميم احترافية، برمجة مواقع، وكل ما يخص الجامعات.
          بالإضافة إلى شحن الألعاب وكل شيء تحتاجه بأسهل الطرق وأفضل جودة.
        </p>
        <div class="buttons">
          <a href="https://www.facebook.com/RayzaStore" target="_blank" class="btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" ><path d="M22 12a10 10 0 10-11.5 9.9v-7h-3v-3h3v-2c0-3 2-4.6 4.7-4.6 1.4 0 2.9.2 2.9.2v3.1h-1.6c-1.6 0-2.1 1-2.1 2v2.3h3.5l-.6 3h-2.9v7A10 10 0 0022 12z"/></svg>
            فيسبوك
          </a>
          <a href="https://www.instagram.com/RayzaStore" target="_blank" class="btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 3a1 1 0 110 2 1 1 0 010-2zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>
            إنستاغرام
          </a>
          <a href="https://t.me/RayzaStore" target="_blank" class="btn" aria-label="Telegram">
            <svg viewBox="0 0 24 24"><path d="M21 3L3 10.5l5.5 2.3 1.6 5.6 2-4 4 4 4-16z"/></svg>
            تيليجرام
          </a>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Rayza Store app listening at http://localhost:${port}`);
});
