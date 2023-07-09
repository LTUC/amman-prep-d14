function Student(props) {
    // console.log(props.name);
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Fav Color: {props.favColor}</p>
      <p>Fav Food: {props.favFood}</p>
    </div>
  );
}

export default Student;
