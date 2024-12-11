import { data } from "../database/data.js";

const clientsControllers = () => {
  const getClients = () => {
    let clients = [];

    data.clients.map((item) => {
      console.log(item);
      const { firstName, lastName, clientId, email, phone, address } = item;
      clients = clients.concat({
        firstName,
        lastName,
        clientId,
        email,
        phone,
        address,
      });
    });

    console.log(clients);
    return clients;
  };

  const getClientId = (clientId2) => {
    let client = {};
    let clientFound = false;

    data.clients.forEach((c) => {
      if (c.clientId === clientId2) {
        const { firstName, lastName, clientId, email, phone, address } = c;
        client = { firstName, lastName, clientId, email, phone, address };
        clientFound = true;
      }
    });

    if (clientFound) return { client: client, message: "Client Found" };
    else return { client: null, message: "Client not Found" };
  };

  const postClients = (client) => {
    let clientFound = false;
    data.clients.map((item) => {
      if (item.clientId === client.clientId) clientFound = true;
    });

    if (!clientFound) {
      data.clients.push(client);
      return { message: "client has been aggregated successfully" };
    } else {
      return { message: "Client already exist" };
    }
  };

  return { getClients, postClients, getClientId };
};

export default clientsControllers;
