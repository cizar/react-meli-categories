import React, {Component} from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import { NavLink, Swith, Route } from 'react-router-dom'
import Category from './Category'

const DivStyled = styled.div`
    display: flex;
`
const UlStyled = styled.ul`
    list-style: none;
    padding: 40px;
    background-color: #ffdb15;
    margin: 40px;
    border-radius: 20px;
    & li {
      padding: 5px;
    }
`
const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: #000;
    width: 100%;
    padding: 5px;
    min-width: 100px;
    &:hover{
      text-decoration: underline;
    }
`

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount(){
    Axios.get('/sites/MLA/categories#json').then(response =>
      this.setState({
        categories: response.data
      })
    )
  }

  render(){

    const { categories } = this.state

    return(
        <DivStyled>
          <UlStyled>
          {categories.map(category =>
            <li key={category.id}>
              <NavLinkStyled to={`/categories/${category.id}`}>{category.name}</NavLinkStyled>
            </li>
          )}
          </UlStyled>
          <Route path={`/categories/:category_id`} component={Category} />
        </DivStyled>
    )
  }
}

export default Categories
