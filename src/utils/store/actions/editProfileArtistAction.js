import axios from '../../API/axios.js'

export const editProfileArtistSubmit = (payload, ArtistId) => {
  return async next => {
    try {
      const submit = await axios({
        method: 'PUT',
        url: `/artists/${ArtistId}`,
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      });
      console.log("🚀 ~ file: editProfileArtistAction.js ~ line 12 ~ editProfileArtist ~ submit", submit)
      
      const { data } = await axios({
        method: 'GET',
        url: `/artist/${ArtistId}/edit`,
      });
      console.log("🚀 ~ file: editProfileArtistAction.js ~ line 15 ~ editProfileArtistSubmit ~ data", data)

      next({ type: 'PUT_PROFILE_SUBMIT', payload: submit.data, artists: data });
    } catch (err) {
      console.log('masuk error')
      console.log(err);
    };
  };
};