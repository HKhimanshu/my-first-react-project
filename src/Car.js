function Car(props) {
  return <li>{ props.brand }</li>;
}
function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
    <h2>This is my garage</h2>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

export default Garage;