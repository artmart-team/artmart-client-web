import axios from '../../API/axios.js';
import Swal from 'sweetalert2';

export const registerArtist = payload => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'POST',
        url: '/artists/register',
        data: payload
      });

      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      })

      Toast.fire({
        icon: 'success',
        title: 'Account created.'
      })

      return next({ type: 'REGISTER', payload: data });
    } catch (err) {
      err?.response?.data?.messages ?
        next({ type: 'ERROR', payload: [err.response.data.messages] }) :
        next({ type: 'ERROR', payload: err.response.data.errors })
    };
  };
};

export const loginArtist = payload => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'POST',
        url: '/artists/login',
        data: payload
      });

      return next({ type: 'LOGIN', payload: data.access_token, role: 'artist', id: data.id, profilePicture: data.profilePicture, username:data.username });
    } catch (err) {
      next({ type: 'ERROR', payload: err.response.data.messages });
    };
  };
};

export const registerCustomer = payload => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'POST',
        url: '/users/register',
        data: payload
      });

      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      })

      Toast.fire({
        icon: 'success',
        title: 'Account created.'
      })

      return next({ type: 'REGISTER', payload: data });
    } catch (err) {
      err?.response?.data?.messages ?
        next({ type: 'ERROR', payload: [err.response.data.messages] }) :
        next({ type: 'ERROR', payload: err.response.data.errors })
    };
  };
};

export const loginCustomer = payload => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'POST',
        url: '/users/login',
        data: payload
      });
      console.log(data, 'masuk login')

      return next({ type: 'LOGIN', payload: data.access_token, role: 'customer', id: data.id, profilePicture: data.profilePicture, username:data.username });
    } catch (err) {
      next({ type: 'ERROR', payload: err.response.data.messages });
    };
  };
};

export const logout = _ => {
  return async next => {
    try {
      return next({ type: 'LOGOUT' });
    } catch (err) {
      console.log(err);
    };
  };
};

export const reset = _ => {
  return async next => {
    try {
      return next({ type: 'RESET_USER' });
    } catch (err) {
      console.log(err);
    };
  };
};

export const authenticated = _ => {
  return async next => {
    try {
      return next({ type: 'AUTHENTICATED' });
    } catch (err) {
      console.log(err);
    };
  };
};

export const setError = error => {
  return async next => {
    try {
      next({ type: 'ERROR', payload: [error] })
    } catch (err) {
      console.log(err);
    };
  };
};

export const resetError = _ => {
  return async next => {
    try {
      next({ type: 'ERROR', payload: null })
    } catch (err) {
      console.log(err);
    };
  };
};

export const getUserByID = id => {
  return async next => {
    try {
      next({ type: 'RESET_USER' });

      const { data } =
        localStorage.getItem('role') === 'artist' ? (await axios({
          method: 'GET',
          url: `/artists/${id}`
        })) : (await axios({
          method: 'GET',
          url: `/users/${id}`
        }))

      return next({ type: 'GET_USER_ID', payload: data });
    } catch (err) {
      console.log(err)
    };
  };
};

export const getOtherUserId = (role, id) => {
  return async next => {
    try {
      // next({ type: 'RESET_OTHER_USER' });
      next({ type: 'LOADING' });

      const { data } =
        role === 'artist' ? (await axios({
          method: 'GET',
          url: `/artists/${id}`
        })) : (await axios({
          method: 'GET',
          url: `/users/${id}`
        }))

      return next({ type: 'GET_OTHER_USER', payload: data });
    } catch (err) {
      console.log(err)
    };
  };
};

export const getTotalRatingArtist = artistId => {
  return async next => {
    try {
      // next({ type: 'RESET_RATING' });
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'GET',
        url: `artists/${artistId}/ratings/average`
      });

      return next({ type: 'GET_TOTAL_RATING', payload: data.averageRating });
    } catch (err) {
      console.log(err.response)
    }
  }
}

export const editUserProfile = (userId, payload) => {
  return async next => {
    try {
      next({ type: 'LOADING' })

      console.log("masuk edit user dispatch")

      const { data } = await axios({
        method: "PUT",
        url: `users/${userId}`,
        data: payload,
        headers: { access_token: localStorage.getItem("access_token") }
      })

      console.log(data)

      next({ type: "DONE_EDIT_USER", payload: data })

    } catch (err) {
      console.log(err.response)
    }
  }
}

export const pictureByUser =(userId) => {
  return async next => {
    try {
    next ({ type : "LOADING" })
    let role = localStorage.getItem('role')
    
    if(role === 'customer') {
      const { data } = await axios.get(`/users/${userId}/pictures`)

      next({
        type : "GET_PICTURES_USER",
        payload : data
      })
    } 

    } catch (error) {
      console.log(error.response)
    }
  }
}


export const editProfileArtistSubmit = (artistId, payload) => {
  return async next => {
    try {
      console.log('masuk action ---------')
      next({ type : "LOADING" })

      const { data } = await axios({
        method : "PUT",
        url : `/artists/${artistId}`,
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