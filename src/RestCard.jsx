import { useParams } from 'react-router-dom'

const RestCard = () => {
    const {restId} = useParams();
  return (
    <div>
      {restId}
    </div>
  )
}

export default RestCard
