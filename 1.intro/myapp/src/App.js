var a=7;
function MyHeading(){
    return (
        <h1>This is component heading</h1>
    );
}
function App(){
    return(
        <div>
            <MyHeading/>
            <h1>Hello {a}</h1>
            <p>this is a paragraph</p>
        </div>
    );
}

export default App;