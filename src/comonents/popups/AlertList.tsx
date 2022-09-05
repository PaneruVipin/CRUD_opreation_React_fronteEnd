import { connect } from "react-redux";
import { FC, memo } from "react";
import { alert } from "../../modeles/blogs";
import { alertsSelector } from "../../seectors/blogs";
import { State } from "../../store";
import Alert from "./Alert";

type AlertListProps = {
    alerts:alert[]
};

const AlertList: FC<AlertListProps> = ({alerts,...props}) => {
  return <div className="fixed inset-x-0 z-10 md:px-72">
    {
  alerts.map((a)=><Alert alerts={alerts} key={a.alertId} alert={a}/>)
    }
  </div>;
};

AlertList.defaultProps = {};
const mapStateToProps=(s:State)=>{
    return {
        alerts:alertsSelector(s)
    }
}

export default connect(mapStateToProps)(memo(AlertList));