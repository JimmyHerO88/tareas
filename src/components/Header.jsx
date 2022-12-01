import Button from "./Button"

const Header = ({titulo}) => {

    const onClick = () =>{
        console.log('click');
    }
  return (
    <header className="header">
        <h1>{titulo}</h1>
        <Button texto='Agregar' color='green' onClick={onClick} />
        <Button texto='Borrar' color='red' onClick={onClick} />
    </header>
  )
}


export default Header