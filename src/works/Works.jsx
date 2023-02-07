import {Link} from 'react-router-dom'

export const cards = [
  {
    title: 'Platon',
    description: "Platon a décidé de se lancer à l\'époque malgré une crise économique difficile. Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence."
  },
  {
    title: 'Solane',
    description: "C'est le premier vendeur de fraises du Poitou-Charentes. Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné."
  },
  {
    title: 'Sedal',
    description: "L\'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas. Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, \"les derniers seront les premiers\""
  },
];



function Works () {



  return (
    <div>
      <ul>
      {cards.map((item, index) => (
        <li key={index}>
        <Link to={`/works/${item.title}-study-case`}>
          <h2>{item.title}</h2>
        </Link>
        <p>{item.description}</p>
      </li>
      ))}
    </ul>
    </div>

  )
}

export default Works