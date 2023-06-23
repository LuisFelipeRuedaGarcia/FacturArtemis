import app from "./App.js";
const Main = () => {
    app.listen(app.get('port'));
    console.log(`The Greato Company's server is runnig on port ${app.get('port')}`);
};

Main();