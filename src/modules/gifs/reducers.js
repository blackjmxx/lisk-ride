
import {LOAD_REWARDS_REQUEST,LOAD_REWARDS_SUCCESS,LOAD_REWARDS_FAILURE} from './actions';

const initState = {
  error: false,
  rewards:[],
  isLoadingRewards:true
}

export default function giftReducer (state = initState, action) {
  switch (action.type) {
    case LOAD_REWARDS_REQUEST:
      return{
        ...state,
        error:false,
        isLoadingRewards:true
      }
    case LOAD_REWARDS_SUCCESS:
      return{
        ...state,
        error:false,
        rewards:action.payload,
        isLoadingRewards:false
      }
    case LOAD_REWARDS_FAILURE:
        return {
          ...state,
          error: true,
          isLoadingRewards: false
        }
    default:
      return state
  }
}