import './Hello.css'
export default function Hello({name="idk",last="haha",age=25}){
    return (
        <>
            <h1>Hello {name} {last} <br></br> age: {age} </h1>
            <hr/>
        </>
    );
}