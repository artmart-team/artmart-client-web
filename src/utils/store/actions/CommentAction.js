import initAxios from '../../API/axios.js'

export const postComment = (payload) => {
console.log("🚀 ~ file: CommentAction.js ~ line 4 ~ postComment ~ payload", payload)
  return (dispatch) => {
    initAxios({
      method: 'post',
      url: '/users',
      data: {
        comment: payload.comment
      },
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(({data}) => {
      console.log('data comment masuk')
      dispatch({ type: 'ADD_COMMENT', payload: data})
    }).catch((err) => {
      console.log("addComment -> err", err)
    });
  }
}
