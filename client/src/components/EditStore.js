import React from 'react'
import styles from "./EditStore.module.css"
import { useState, useEffect } from 'react'


const EditStore = (props) => {
    const [items, setItems] = useState([]);
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/store')
            .then(res => res.json())
            .then(result => { setItems(result); setLoading(false) })
            .catch(err => console.log(err))
    });
    function deletion(id) {
        const endpoint=`/store/${id}`
            fetch(endpoint, { method: 'DELETE' })
            .then( () =>{})
            .catch(err => console.log(err)) 
   
    } 
    
    if (Loading) return <div>Loading Page ...</div>
    else
        return (
            <div>
                <form className={styles.form} action='/editstore' method='post'>
                    <fieldset className={styles.fieldset}>
                        <label for='name'>Name</label>
                        <input type='text' name='name' />
                        <label for='price'>Price</label>
                        <input type='text' name='price' />
                        <label for='img'>Image</label>
                        <input type="text" id="avatar" name="img" />
                        <label for='body'>Notes</label>
                        <textarea rows='10' cols='30' name='body'></textarea>
                        <input type='submit' value='submit' />
                    </fieldset>
                </form>
                <div>
                    <h1>Delete Products from store:</h1>
                    {items.map(item => (
                        <div className={styles.container}>
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                            <div><img className={styles.image} src={item.img} alt='m'></img></div>
                            <button className={styles.button} onClick={() => deletion(item._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        )
}

export default EditStore



