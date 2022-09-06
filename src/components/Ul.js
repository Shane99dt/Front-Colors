import { Link } from "react-router-dom"

const Ul = (props) =>{
  const {link,lignes} = props
    return( <ul>
        {lignes.map(ligne=>{
          return  <li key={ligne.Name}>{link? <Link to={`/${ligne.Slug}`}>{ligne.Name}</Link> : <>{ligne.Name}</>}</li>
        })}
    </ul> )
}

export default Ul