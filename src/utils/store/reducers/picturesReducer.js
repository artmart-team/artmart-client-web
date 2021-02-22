const initState = {
  pictures: [],
  picture: {},
  loading: false,
  errors: null,
  categories: [],
  showPicture: '',
  showPictureId: null,
  showPicturePrice: '',
  showPictureName: '',
  showPictureDesc: '',
  showPictureRating: '',
  showPictureArtistId: ''
};

const picturesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_PICTURES_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_PICTURES_DONE':
      return {
        ...state,
        pictures: action.payload,
        loading: false
      }
    case 'FETCH_PICTURES_ERROR':
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case 'POST_PICTURE':
      return {
        ...state,
        picture: action.payload,
        loading: false
      }
    case 'RESET_PICTURE':
      return {
        ...state,
        picture: {}
      }
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
        loading: false
    case 'SHOW_PICTURE_DONE':
      return {
        ...state,
        showPicture: action.link,
        showPictureId: action.picId,
        showPicturePrice: action.picPrice,
        showPictureName: action.picName,
        showPictureDesc: action.picDescription,
        showPictureRating: action.artistRating,
        showPictureArtistId: action.artistId
      }
    case 'SHOW_PICTURE_ERROR':
      return {
        ...state,
        errors: action.payload,
      }
    default:
      return state;
  };
};

export default picturesReducer;