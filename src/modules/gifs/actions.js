import {Cloud} from "parse"


export const LOAD_REWARDS_REQUEST = 'LOAD_REWARDS_REQUEST'
export const LOAD_REWARDS_SUCCESS = 'LOAD_REWARDS_SUCCESS'
export const LOAD_REWARDS_FAILURE = 'LOAD_REWARDS_FAILURE'


export function loadRewardsRequest() {
  return {
    type: LOAD_REWARDS_REQUEST,
  }
}

export function loadRewardsSuccess (payload) {
  return {
    type: LOAD_REWARDS_SUCCESS,
    payload:payload
  }
}

export function loadRewardsFailure (error) {
  return {
    type: LOAD_REWARDS_FAILURE,
    error: error
  }
}

export const loadRewards = (cardId) => {
  return dispatch => {
    dispatch(loadRewardsRequest())
    Cloud.run("loadRewards", {cardId}).then( 
      rewards =>{
        dispatch(loadRewardsSuccess(rewards))
      })
      .catch(err => dispatch(loadRewardsFailure(err)))
  }
}