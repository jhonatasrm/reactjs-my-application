import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';
// import api from '../../services/api';

export default class Main extends Component {

    state = {
        produtos: [],
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await api.get('/products');

        this.setState({produtos: response.data.docs});
    };

    render() {         
        return ( 
        <div className="product-list">{ this.state.produtos.map(product => (
        <article key={product._id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <a href="#">Acessar</a>
        </article>))}
        </div>
         );
    }
}