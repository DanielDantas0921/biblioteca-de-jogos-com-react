import {useState} from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

newGameForm.protoType = {
    addGame: PropTypes.func
}


export default function newGameForm({addGame}) {
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({ title, cover })
        setTitle("")
        setCover("")

    }
   


    return (
        <form onSubmit={handleSubmit}>
           <TextInput id="title" value={title} setValue={setTitle} label="Título:" />
            <TextInput id="cover" value={cover} setValue={setCover} label="CapaUrl"/>
        
             
            <button type="submit">Adicionar a biblioteca</button>
        </form>)
}