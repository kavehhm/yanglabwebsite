import Member from "../Components/Member";
import './Staff.css'

const Current = (props) => {
  return (
    <div className="memberlist">

      {props.current.map((member) => <Member
          name={member.name}
          task={member.task}
          description={member.description}
          key = {member.id}
          image = {member.image}
        />
      )}
    </div>
  );
};

export default Current;