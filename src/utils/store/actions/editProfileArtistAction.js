import axios from '../../API/axios.js'

export const editProfileArtistSubmit = (payload, ArtistId) => {
  return async next => {
    try {
      console.log('masuk action ---------')
      const { data } = await axios({
        method : "PUT",
        url : `/artists/${ArtistId}`,
        data: payload,
        headers : { access_token : localStorage.getItem("access_token")}
      })

      next({ type: 'PUT_PROFILE_SUBMIT', payload: data });
    } catch (err) {
      console.log("🚀 ~ file: editProfileArtistAction.js ~ line 18 ~ editProfileArtistSubmit ~ err", err)
      console.log(err);
    };
  };
};