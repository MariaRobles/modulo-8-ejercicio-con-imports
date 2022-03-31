const DataBusiness = require("./data-business"); 
const ClientElement = require("./client-business"); 

function printClientsAccounts() {
    const clients = DataBusiness.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = ClientElement.getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }

module.exports = { printClientsAccounts };