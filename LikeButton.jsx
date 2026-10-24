import { useState } from 'react'

function LikeButton() {
const [likes, setLikes] = useState(0)

const addLike = () => {
    setLikes(likes + 1)
}

const resetLike = () => {
    setLikes(0)
}

return (
<div>
    <button onClick={addLike}>Like {likes}</button>
    &nbsp;
    <button onClick={resetLike}>Reset</button>
</div>

)
}

export default LikeButton
