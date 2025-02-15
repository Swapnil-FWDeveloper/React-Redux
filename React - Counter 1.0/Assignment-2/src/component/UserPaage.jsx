export default function UserPage({ userData }) {
  console.log(userData);
  return (
    <div>
      {userData.map((el, id) => (
        <div key={id} className="cards">
          <div className="imgDiv">{el.image}</div>
          <div className="card-Contianer">
            <h3>{el.title}</h3>
            <h3>Name: {el.name}</h3>
            <h3>Age: {el.age}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
