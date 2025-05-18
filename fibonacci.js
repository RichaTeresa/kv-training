function* fibonacci() {
    let first=0;
    let second=1;

    while(true){
        yield first;
        let temp=first;
        first=second;
        second+=temp;
    }
    }

    const fib=fibonacci();
    for(let i=0;i<10;i++){
        console.log(fib.next().value);
    }