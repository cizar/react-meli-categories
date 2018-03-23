import { connect } from 'react-redux'
import { Categories } from '../components'
import { compose, lifecycle } from 'recompose'
import Axios from 'axios'

const mapStateToProps = state => ({
  ...state.categories
})

const categoriesSuccess = categories => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  categories
})

const categoriesFetched = () => ({
  type: 'FETCH_CATEGORIES_REQUEST'
})

const categoriesFailed = error => ({
  type: 'FETCH_CATEGORIES_FAILURE',
  error
})

const fetchCategories = () => dispatch => {
  dispatch(categoriesFetched())
  Axios.get('/sites/MLA/categories#json').then(response =>
    dispatch(categoriesSuccess(response.data))
  , err =>
    dispatch(categoriesFailed(err.message))
  )
}

export default compose(
  connect(mapStateToProps, { fetchCategories }),
  lifecycle({
    componentDidMount () {
      this.props.fetchCategories()
    }
  })
)(Categories)

