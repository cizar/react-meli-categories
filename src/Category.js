import React, {Component} from 'react'
import styled from 'styled-components'

const ImgStyled = styled.img`
  width: 160px;
  object-fit: cover;
  border-radius: 50%;
  background-color: #f2f2f2;
`
const ImgDivStyled = styled.div`
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 50%;
    margin-right: 10px;
`

const HeaderDivStyled = styled.div`
    display: flex;
    align-items: center;
`
const CategoryDivStyled = styled.div`
    margin-top: 40px;
`

class Category extends Component {

    state = {
      category: null,
      isFetching: false
    }

    componentDidMount () {
      this.fetchCategory(this.props.match.params.category_id)
    }

    componentWillReceiveProps (nextProps) {
      if (this.props.match.params.category_id !== nextProps.match.params.category_id) {
        this.fetchCategory(nextProps.match.params.category_id)
      }
    }

    fetchCategory (category_id) {
      this.setState({ isFetching: true })
      fetch(`/categories/${category_id}#json`)
        .then(res => res.json())
        .then(data =>
          this.setState({
            isFetching: false,
            category: data
          })
        )
    }

    render(){
      const { isFetching, category } = this.state
      console.log(category)
      return isFetching ? (
        <CategoryDivStyled>
          <p> Cargando... </p>
        </CategoryDivStyled>
      ) : category && (
        <CategoryDivStyled>
          <HeaderDivStyled>
            <ImgDivStyled>
              <ImgStyled src={category.picture} />
            </ImgDivStyled>
            <h1>{category.name}</h1>
          </HeaderDivStyled>
          <ul>
            {category.children_categories.map((child,i) =><li key={i}>{child.name}</li>)}
          </ul>
        </CategoryDivStyled>
      )
    }

}

export default Category
