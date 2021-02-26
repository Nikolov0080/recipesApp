import axios from 'axios';

export default (commentData) => {
  return  axios.default.post("https://interesting-woolen-trampoline.glitch.me/api/recipes/add-comment", {
        commentData
    })
}