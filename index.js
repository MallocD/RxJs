const map = require('rxjs')


Promise.resolve(1)
 .then(num => console.log(num));

 map.create((observer) => {
     observer.next(1);
 }).subscribe(num => console.log(num))