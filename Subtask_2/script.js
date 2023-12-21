const { pipe, range, filter, reduce, Observable, fromEvent, merge } = rxjs;

const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    };
    return true;
};

const stream1 = range(1, 100)
    .pipe(
        filter(v => isPrime(v)),
        reduce((acc, v) => acc.concat(v), [])
    );
stream1.subscribe(res => {
    alert(res.join(' '))
});


const stream2 = new Observable(observer => {
    observer.next(5);
    observer.next(4);
    observer.next(3);
    observer.next(2);
    observer.next(1);
    observer.error("error");
});

stream2.subscribe({
    next: v => alert(v),
    error: e => alert(e)
});


const stream3_1 = fromEvent(document.getElementById('b-1'), 'click');
const stream3_2 = fromEvent(document.getElementById('b-2'), 'click');
const stream3_3 = fromEvent(document.getElementById('b-3'), 'click');

const stream3 = merge(stream3_1.pipe(), stream3_2.pipe(), stream3_3.pipe());
stream3.subscribe(() => {
    let backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.setAttribute("bgcolor", backgroundColor);
})