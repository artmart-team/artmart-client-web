const initState = {
  pictures: [],
  artistPics: [],
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
  showPictureArtistId: '',
  searching : ""
};

const picturesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_PICTURES_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_CURRENT_COLLECTION_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_ARTIST_PIC_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_PICTURES_DONE':
      return {
        ...state,
        pictures: action.payload,
        loading: false
      };
    case 'FETCH_CURRENT_COLLECTION_DONE':
      return {
        ...state,
        pictures: action.payload,
        loading: false
      };
    case 'FETCH_ARTIST_PIC_DONE':
      return {
        ...state,
        artistPics: action.payload,
        loading: false
      };
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
      };
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

    case "SEARCH_CHARACTER" :
      return { 
        ...state,
        searching : action.payload
      }
    default:
      return state;
  };
};

export default picturesReducer;
