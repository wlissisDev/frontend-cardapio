import { api } from '../../utils/api'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export function CreateFood() {

    const [url, setUrl] = useState(null);
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        api.post("/food", { url, name, price })
            .then(result => { console.log(result.status) })
            .catch(err => console.log(err))
            .finally(() => {
                window.alert("Item adicionado com sucesso!")
                //limpar campos
                setName("")
                setUrl("")
                setPrice("")
            })
    }

    return (
        <div className={styles.container}>
            <h3>Adicione um item ao cardápio</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.input}>
                    <label>Endereço da imagem</label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                    />
                </div>
                <div className={styles.input}>
                    <label>Nome</label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className={styles.input}>
                    <label>Preço</label>
                    <input
                        type="number"
                        required
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                        value={price}
                    />
                </div>
                <div className={styles.btns}>
                    <button className={styles.add} type="submit">Adicionar</button>
                    <Link className={styles.back} to={"/"}>Voltar</Link>
                </div>

            </form>

        </div>
    )
}