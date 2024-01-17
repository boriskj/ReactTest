export function Profil(props) {
  return (
    <>
      <h2>
        {props.children} je visoka {props.visina} cm
      </h2>
      <p>{props.opis}</p>
    </>
  );
}
