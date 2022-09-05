import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { removeAlertAction } from "../actions/blogs";
import { alert } from "../modeles/blogs";
import { ADELoadingSelector } from "../seectors/blogs";
import { State } from "../store";

type AlertProps = {
    alert:alert
    alerts:alert[]
    removeAlert:(newAlerts:alert[])=>void
    ADELoading:boolean
};

const Alert: FC<AlertProps> = ({alert,alerts,removeAlert,ADELoading,...props}) => {
  const newAlerts=alerts.filter((a)=>a.alertId!=alert.alertId)
  useEffect(()=>{
    setTimeout(() => {
      removeAlert(newAlerts)
    },2000);
  },[ADELoading])
  const handleClick=()=>{
    removeAlert(newAlerts)
  }
  return <div className="flex bg-green-500 justify-between p-4 rounded-md shadow-md">
    <p>{alert.message}</p>
    <button onClick={handleClick} className="ml-1 w-8 h-8 rounded-full bg-white text-black">X</button>
     </div>;
};

Alert.defaultProps = {};
const mapStateToProps=(s:State)=>{
  return {
    ADELoading:ADELoadingSelector(s)
  }
}
const mapDispatchToProps={
  removeAlert:removeAlertAction
}

export default connect(mapStateToProps,mapDispatchToProps)(memo(Alert));