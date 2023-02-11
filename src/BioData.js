function BioData({name, gender}){
    let goodLine;
    if(gender == 'male'){
        goodLine = 'I am a good boy'
    } else {
        goodLine = 'I am a good girl'
    }
    return (
        <>
            <h1 className='biodata'>Bio data</h1>
            <p className='myname'>My name is {name}</p>
            <p>My father name is manoj  mandal</p>
            <p>My mother name is munni devi</p>
            <p>My i read in class seven</p>
            <p>my school name is <br/>ahana foundation </p>
            <p>{goodLine}</p>
        </>
    )
}

export default BioData;

