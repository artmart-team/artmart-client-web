import axios from '../../API/axios.js'

export const postComment = (payload) => {
console.log("🚀 ~ file: CommentAction.js ~ line 4 ~ postComment ~ payload", payload)
  return async (dispatch) => {
    try {
      dispatch({
        type: "ADD_COMMENT_START"
      })

      const { data } = await axios({
        method: 'post',
        url: '/users/52/artists/1/comments',
        headers: {
          'Content-Type': 'application/json',
          'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTIsInVzZXJuYW1lIjoiYmFuZ2RlYnVnIiwicHJvZmlsZVBpY3R1cmUiOiJodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8_bmFtZT1iYW5nK2RlYnVnIiwiaWF0IjoxNjEzOTkwOTcyfQ.CtoLmpj_Uw4rH946iw7j1PnLODLrFqbodsE2P-DJ14s'
        }
      })

      console.log("🚀 ~ file: CommentAction.js ~ line 24 ~ return ~ data", data)
      dispatch({
        type: 'FETCH_COMMENT_DONE',
        payload: data
      })
    } catch (err) {
      console.log("🚀 ~ file: CommentAction.js ~ line 18 ~ return ~ error", err)
      dispatch({
        type: 'FETCH_COMMENT_ERROR',
        payload: err
      })      
    }
  }
}
