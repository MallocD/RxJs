import  {Observer} from 'rxjs';

console.log("Teste")

Promise.resolve(1)
 .then(num => console.log(num));

new  Observer((observer) => {
     observer.next(1);
 }).subscribe(num => console.log(num))