import { create } from 'rxjs.js';


Promise.resolve(1)
 .then(num => console.log(num));

 create((observer) => {
     observer.next(1);
 }).subscribe(num => console.log(num))