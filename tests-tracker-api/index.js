const express = require('express');
const categoryRoutes = require('./routes/category.routes');
const resultRoutes = require('./routes/result.routes');
const testRoutes = require('./routes/test.routes');
const userRoutes = require('./routes/user.routes');
const variantRoutes = require('./routes/variant.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/hello', (_req, res) => {
    res.status(200).send('World');
});

app.use('/api/categories', categoryRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/users', userRoutes);
app.use('/api/variants', variantRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});