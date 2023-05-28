import MyHeading ,{MyHeading1 as CustomHeading, MyHeading2} from "./components/MyHeading";


function App(){
    return(
        <>
        <div>
            <MyHeading name="Harsh" department="computer science"/>
            <h1>Hello</h1>
            <p>this is a paragraph</p>
            <CustomHeading/>
            <MyHeading2/>
        </div>
        <div>
            This is a second div
        </div>
        </>
    );
}

export default App;