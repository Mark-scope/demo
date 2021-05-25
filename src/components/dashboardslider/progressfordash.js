import ProgressBar from "../progressbar/progressbar"



function Progressfordash() {

    const testData = [
        { bgcolor: "#white", completed: 60 },
        { bgcolor: "#white", completed: 33 },
        { bgcolor: "#white", completed: 53 },    
  ];

    return(
        <div>
            {testData.map((item, idx) => (
                                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                            ))}
        </div>
    )
}
export default Progressfordash;