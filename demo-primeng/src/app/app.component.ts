import { Component } from '@angular/core';
import { concat, merge, Observable, Observer, of, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(){

    // sync (default) and async push from observable  
    const observable = new Observable<number>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
     
    // console.log('just before subscribe');

    // observable.subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });

    // passing observer 
    const observer = {
      next: (x:any) => console.log('Observer got a next value: ' + x),
      error: (err:string) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };  
    // observable.subscribe(observer);

    // console.log('just after subscribe');

    
    // // Subscription

    // const subscription = observable.subscribe(observer);
    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 500);


    // subject 

    // const subject = new Subject<string>();
 
    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });
    
    // subject.next('multicast 1');
    // subject.next('multicast 2');

    // pipe
    console.log("##########Pipe ");
    observable
    .pipe(map((x) => x * x))
    .subscribe((v) => console.log(`value: ${v}`));


    //combination operators merge

    console.log("########## combination operators merge");
    const mergedTwo = merge(of(1,2,3), of(4,5,6));
    mergedTwo.subscribe(x => console.log(x));

    //combination operators concat

    console.log("########## combination operators concat");
    concat(
      of(1, 2, 3),
      // subscribed after first completes
      of(4, 5, 6),
      // subscribed after second completes
      of(7, 8, 9)
    )
      // log: 1, 2, 3, 4, 5, 6, 7, 8, 9
      .subscribe(console.log);
  }
}

