/* eslint-disable max-len */
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '500mb' }));

/* CORS */
app.use(cors());

/* ROUTES */
// app.use('/locations-generator', versionOneRoute);
// app.use('/v2/locations-generator', versionTwoRoute);

app.listen(PORT, (): void => {
  console.log(`SERVER running on PORT ${PORT}`);
});
