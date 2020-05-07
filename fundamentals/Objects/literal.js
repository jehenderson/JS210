// write both functions from scratch in function declaration style (all functions in this placement challenge are written in function declaration style)
var users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
];

// write both functions from scratch in function declaration style (all functions in this placement challenge are written in function declaration style)

// generateSampleView
function generateSampleView(users) {
    let output = [];
    users.forEach(user => {
        if (user.id % 2 == 0) {
          let addressString = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
          output.push(addressString);
        } else {
            output.push(user.email);
        }
    });
    return output;
}
// assertArraysEqual
function assertArraysEqual(actual, expected, testName) {
    if (actual.length !== expected.length) {
      return `${testName} failed`;
    } else {
      for (let i=0; i<expected.length; i++) {
          if (expected[i] !== actual[i]) {
              return `${testName} failed`;
          }
          return `${testName} passed`;
      }
    }
}
let expectedOutput = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
console.log(assertArraysEqual(generateSampleView(users), expectedOutput, 'test'));
