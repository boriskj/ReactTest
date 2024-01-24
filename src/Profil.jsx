export function Profil(props) {
  return (
    <>
      <h2>
        {props.children} je visoka {props.visina} cm je {props.hrana}
      </h2>
      <p>{props.opis}</p>
    </>
  );
}
