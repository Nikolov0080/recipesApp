import axios from 'axios';

const exit = (commentData) => {
  return  axios.default.post("https://interesting-woolen-trampoline.glitch.me/api/recipes/add-comment", {
        commentData
    })
}

export default exit