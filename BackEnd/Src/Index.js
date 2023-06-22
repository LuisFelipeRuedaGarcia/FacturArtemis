import app from "./App.js";
const Main = () => {
    app.listen(app.get('port'));
    console.log(`The Great Company's server is runnig on port ${app.get('port')}`);
};

Main();