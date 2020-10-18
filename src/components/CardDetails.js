import { connect } from 'react-redux'
import CardPage from '../../opages/CardPage'

const mapStateTopProps = (state) => {

  return {
    isLoadingCard: state.home.isLoadingCard,
    currentCard: state.home.currentCard,
    error: state.home.error,
    card:state.home.card,
    hasValue:state.home.hasValue,
    isValidationSucceed:state.home.isValidationSucceed,
    error: state.home.error,
  }
}

export default connect(mapStateTopProps)(CardPage)
