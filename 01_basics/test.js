const accountId = 144553
let accountEmail = "samar@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState
//accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "bengaluru"

console.log(accountId);
/*
prefer not to use var
becouse of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
