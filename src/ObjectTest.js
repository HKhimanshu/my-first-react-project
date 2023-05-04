function ObjectTest() {

    let myCar = {
        company: 'ford',
        details: {
            color: 'red',
            year: '2022'
        }
    }

    return ( 
        <p>Year: {myCar.details.year}</p>
     );
}

export default ObjectTest;