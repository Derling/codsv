const express = require('express')
const app = express()
const port = 3030

const API = require('call-of-duty-api')();

// update these to be the username and password you use to log into https://my.callofduty.com/login
const CREDS = {
    USERNAME: '',
    PASSWORD: ''
}

var cors = require('cors')
app.use(cors());

app.get('/', async (req, res) => {
    const query = req.query;
    console.log(query);
    console.log(`GET platform=${query.platform}, userId=${query.userId}`);
    var mwData = {}

    // log in and make the requests
    await API.login(CREDS.USERNAME, CREDS.PASSWORD)
        .then( async (response) => {
            console.log(response);

            // get br mode data 
            await API.MWBattleData('Spidey#11175', API.platforms.battle)
                .then( async (brStats) => {
                    mwData = brStats;
            }).catch( (error) => console.log(error));

    }).catch( (error) => console.log(error));

    res.json(mwData);
});

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))