import React from 'react'
import card from './Store.module.css'
import { useState, useEffect } from 'react'
const Store = (props) => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('/store')
            .then(res => res.json())
            .then(result => { setBlogs(result); setLoading(false) })
            .catch(err => console.log(err))
    })
    const tabs = blogs;
    if (loading) return (<div><div style={{ 'font-size': "5vw", "color": "#242582", "position": "relative", "left": "40%", 'font-style': "italic" }}>Our Products</div>
        <div>{"Loading Products ..."}</div></div>)
    else return (
        <div>
            <div style={{ 'font-size': "5vw", "color": "#242582", "position": "relative", "left": "40%", 'font-style': "italic" }}>Our Products</div>
            <div className={card.cards}>
                {tabs.map(tab => (<div className={card.card}>
                    <div className={card.image}><img className={card.imagee} src={tab.img} alt='m'></img></div>
                    <div className={card.title}>{tab.name}</div>
                    <div className={card.body}>
                        {tab.price}
                        <br></br>
                        Size:<input className={card.input}></input>
                        <br></br>
                    </div>
                    <button className={card.cartbtn}>Add to Cart</button>
                </div>))}
            </div>
        </div>
    )

}

export default Store
