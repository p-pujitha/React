import {useEffect} from 'react'

function CustomHookImport(count){
    useEffect(() =>{
        document.title = "Clicked " + count + " times"
    })
}

export default CustomHookImport