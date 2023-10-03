import { Link } from 'react-router-dom';
import { api } from '../../utils/api';
import styles from './styles.module.css';


export function Food({ url, name, price, id, setDataFood }) {

    function getFoods() {
        api.get("/food")
            .then(result => setDataFood(result.data))
    }

    function deleteFood() {
        api.delete(`/food/${id}`)
            .then(result => {
                //faz uma nova busca dos elementos
                getFoods();
            })
            .catch(err => console.log(err))
    }

    return (
        <li className={styles.food}>
            <img className={styles.image} src={url} alt={name} />
            <div>
                <h3>{name}</h3>
                <div >
                    <span>R$ {price}</span>
                    <div className={styles.btns}>
                        <Link className={styles.edite} to={`/edite/${id}`}>Editar</Link>
                        <button className={styles.delete} onClick={deleteFood}>Excluir</button>
                    </div>
                </div>
            </div>
        </li>
    )
}