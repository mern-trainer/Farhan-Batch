const PageB = ({ data, callback, age, counter }) => {
    
    return <div>
        <button onClick={() => callback("data from child")}>Click</button>
        <h1>Page B - {data} - {age} - {counter}</h1>
    </div>
}

export default PageB