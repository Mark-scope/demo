import ProgressStyle from './progressbar.module.css'

const ProgressBar = ({bgcolor, completed}) => {
  
    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        fontSize: '40px'
      }
    return (
      <div className={ProgressStyle.containerStyles}>
        <div style={fillerStyles}>
          <span className={ProgressStyle.labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;