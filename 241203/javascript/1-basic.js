// 조건이 2개 이상 : and (&&), or (||);

// and :false가 나오면 -- 이후로는 보지도 않음
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('-------------------------------')


// or : true가 1번이라도 나오면 -- 이후로는 보지도 않음
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

/*

암기 : false : 0,'',null, undefined, NaN

function box(){
    return(
        <div>
            ( 식 ? <p></p> : '';)
            ( 식 && <p></p>)
        </div>

    )
}

*/
