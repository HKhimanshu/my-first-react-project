function BioData(props){
    return (
        <>
            <h1 className='biodata'>Bio data</h1>
            <p className='myname'>My name is {props.name}</p>
            <p>My father name is manoj  mandal</p>
            <p>My mother name is munni devi</p>
            <p>My i read in class seven</p>
            <p>my school name is <br/>ahana foundation </p>
            <p>{props.gender == 'male' ? 'I am a good boy' : 'I am a good girl'}</p>
        </>
    )
}

export default BioData;

