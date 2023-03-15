function BorderBox({title, text}){
    return(
        <div className="Container__BB">
            <div className="BB__Content">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}
export default BorderBox;