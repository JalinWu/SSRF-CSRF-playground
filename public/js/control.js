

function LineLoginPage() {
    var redirect_uri = "http://localhost:5000/callback";
    var state = genRandomString(12);
    var scope="profile%20openid"

    var link = `
https://access.line.me/oauth2/v2.1/authorize?
response_type=code&
client_id=${channel_id}&
redirect_uri=${redirect_uri}&
state=${state}&
scope=${scope}`;

    window.location.href = link;
}






/**********
 * Tool
 **********/
function genRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}