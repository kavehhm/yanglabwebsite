import "./Member.css";



const Member = (props) => {
  return (
    <div className="member">
      <img src={props.image} alt={props.name}/>
      <div className="member-words">
        <p className="member-name">{props.name}</p>
        <div>
          <p>{props.task}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
