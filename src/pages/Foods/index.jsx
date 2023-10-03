import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../utils/api'
import { BiAddToQueue } from 'react-icons/bi'
import { Food } from '../../components/Food'
import styles from './styles.module.css'


export function Foods() {

    const [dataFood, setDataFood] = useState();
    const [error, setError] = useState();
    const [isFetch, setIsFetch] = useState(true);

    useEffect(() => {
        api.get("/food")
            .then(result => {
                setDataFood(result.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setIsFetch(false)
            })
    }, [])

    return (
        <div className={styles.container}>
            <h1>Cardápio digital
                <Link className={styles.addButton} to={"/create"}>
                    <BiAddToQueue/>
                </Link>
            </h1>
            {isFetch && <span>Carregando dados...</span>}
            {error && <span>Ops! Dados não encontrado. Recarregue a página e tente novamente.</span>}
            <ul className={styles.list}>
                {dataFood?.map(item => {
                    return (
                        <div key={item.id}>
                            <Food
                                id={item.id}
                                url={item.url}
                                name={item.name}
                                price={item.price}
                                setDataFood={setDataFood}
                            />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}