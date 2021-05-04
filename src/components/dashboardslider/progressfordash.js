import ProgressBar from "../progressbar/progressbar"



function Progressfordash() {

    const testData = [
        { bgcolor: "#567DD7", completed: 'Business 60'},
        { bgcolor: "#567DD7", completed: 'Skills 33' },
        { bgcolor: "#567DD7", completed: 'Business 53' },    
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