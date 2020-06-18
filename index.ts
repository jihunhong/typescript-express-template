import * as express from 'express';
import { Request, Response, NextFunction, Application } from 'express';

const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';

app.set('port', prod ? process.env.PORT : 3065);
app.get('/', (req, res) => {
    res.send('test');
})

app.listen(app.get('port'), () => {
    console.log(`server is running on ${process.env.PORT}`);
})