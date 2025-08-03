// Rayza Store - Express.js Server

const express = require('express'); const app = express(); const port = process.env.PORT || 3000;

// Middleware to serve static files from 'public' folder app.use(express.static('public'));

// Root Route app.get('/', (req, res) => { res.send(<!DOCTYPE html> <html lang="ar" dir="rtl"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Rayza Store - رايزا ستور</title> <style> body { margin: 0; font-family: 'Cairo', sans-serif; background: linear-gradient(to bottom, #E0F7FA, #FFFFFF); color: #0D1B2A; text-align: center; } .container { padding: 2rem; max-width: 800px; margin: auto; } h1 { font-size: 2.5rem; margin-bottom: 1rem; } p { font-size: 1.2rem; line-height: 1.8; margin-bottom: 2rem; } .buttons a { display: inline-block; margin: 0.5rem; padding: 0.8rem 1.5rem; border-radius: 2rem; text-decoration: none; color: #fff; background-color: #0077B6; transition: background 0.3s; } .buttons a:hover { background-color: #023E8A; } </style> </head> <body> <div class="container"> <h1>Rayza Store - رايزا ستور</h1> <p> رايزا ستور هو وجهتك الأولى لعالم الإبداع الرقمي. نقدم لك <strong>برامج أدوبي الأصلية</strong> و <strong>حزم وُفويس بأسعار لا تُضاهى</strong>، بالإضافة إلى خدمات تصميم احترافية، وبرمجة مواقع بأعلى جودة.<br> نهتم بكل ما يحتاجه الطلبة من <strong>مشاريع جامعية وتصاميم عروض تقديمية</strong>، وحتى <strong>شحن الألعاب والباقات الرقمية</strong>. </p> <div class="buttons"> <a href="https://facebook.com/RayzaStore" target="_blank">فيسبوك</a> <a href="https://instagram.com/RayzaStore" target="_blank">إنستغرام</a> <a href="https://t.me/RayzaStore" target="_blank">تيليجرام</a> </div> </div> </body> </html>); });

app.listen(port, () => { console.log(Rayza Store is running on http://localhost:${port}); });

                        
